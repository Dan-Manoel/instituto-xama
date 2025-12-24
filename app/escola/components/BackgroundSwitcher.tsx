"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const backgroundsDesktop = [
  "/escola/bg-01.jpg",
  "/escola/bg-02.jpg",
  "/escola/bg-03.jpg",
  "/escola/bg-04.jpg",
];

const backgroundsMobile = [
  "/escola/bg-01-mobile.jpg",
  "/escola/bg-02-mobile.jpg",
  "/escola/bg-03-mobile.jpg",
  "/escola/bg-04-mobile.jpg",
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

export default function BackgroundSwitcher() {
  const isMobile = useIsMobile();
  const backgrounds = useMemo(
    () => (isMobile ? backgroundsMobile : backgroundsDesktop),
    [isMobile]
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-bg]")
    );

    const io = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const idx = Number(
            (mostVisible.target as HTMLElement).getAttribute("data-bg")
          );
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        threshold: [0.15, 0.35, 0.6, 0.85],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="
        fixed inset-0 -z-10
        w-screen h-[100svh]
        overflow-hidden
      "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={`${isMobile}-${active}`}
          src={backgrounds[active]}
          alt=""
          aria-hidden="true"
          className="
            absolute inset-0
            h-full w-full
            object-cover object-center
            select-none pointer-events-none
            [transform:translate3d(0,0,0)]
            [backface-visibility:hidden]
            will-change-opacity
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
