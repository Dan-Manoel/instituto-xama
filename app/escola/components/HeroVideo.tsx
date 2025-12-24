"use client";
import { useRef, useState, useEffect } from "react";

export default function HeroVideo() {
  const desktopRef = useRef<HTMLVideoElement | null>(null);
  const mobileRef = useRef<HTMLVideoElement | null>(null);

  const [muted, setMuted] = useState(true);
  const [hideMobilePoster, setHideMobilePoster] = useState(false);

  useEffect(() => {
    if (desktopRef.current) desktopRef.current.muted = muted;
    if (mobileRef.current) mobileRef.current.muted = muted;
  }, [muted]);

  return (
    <section className="relative w-full overflow-hidden h-svh md:h-[90vh] min-h-[560px]">
      {/* Vídeo desktop */}
      <video
        ref={desktopRef}
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
        autoPlay
        loop
        playsInline
        muted
        poster="/escola/hero-poster.jpg"
        preload="metadata"
        onPlaying={() => setHideMobilePoster(true)}
      >
        <source src="/escola/teaser-desktop.mp4" type="video/mp4" />
        <source src="/escola/teaser-desktop.webm" type="video/webm" />
      </video>

      {/* Vídeo mobile (retrato) */}
      <video
        ref={mobileRef}
        className="absolute inset-0 h-full w-full object-cover block md:hidden"
        autoPlay
        loop
        playsInline
        muted={muted}
        poster="/escola/hero-poster-mobile.jpg"
        preload="metadata"
        onPlaying={() => setHideMobilePoster(true)}
        onLoadedData={() => setHideMobilePoster(true)}
      >
        <source src="/escola/teaser-mobile.mp4" type="video/mp4" />
        <source src="/escola/teaser-mobile.webm" type="video/webm" />
      </video>

      {/* Poster mobile separado para não estourar */}
      {!hideMobilePoster && (
        <img
          src="/escola/hero-poster-mobile.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-contain bg-black md:hidden"
        />
      )}

      {/* Overlay de contraste */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Botão de som pequeno no canto */}
      <button
        onClick={() => setMuted(v => !v)}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        className="absolute top-5 right-5 z-20 rounded-full bg-black/50 p-3
                   hover:bg-black/70 transition backdrop-blur"
        title={muted ? "Ativar som" : "Desativar som"}
      >
        {muted ? (
          // Ícone som desligado
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M23 9l-6 6M17 9l6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        ) : (
          // Ícone som ligado
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M15 9c1.5 1.5 1.5 4.5 0 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M18 6c3 3 3 9 0 12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Escola de Xamanismo
          </h1>

          {/* slogan flexível */}
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Onde ciência e espiritualidade caminham juntas.
          </p>

          {/* CTA leitoso verde */}
          <div className="mt-8 flex justify-center">
            <a
              href="#investimento"
              className="
                rounded-full px-15 py-4 text-lg font-semibold text-white
                bg-[--verde-mata] bg-opacity-85
                backdrop-blur-xl border border-white/15
                shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                hover:bg-opacity-100 hover:-translate-y-[1px]
                active:translate-y-0
                transition
              "
            >
              Quero me inscrever
            </a>
          </div>

          <p className="mt-6 text-sm opacity-80">
            Turmas 2026. Vagas limitadas.
          </p>
        </div>
      </div>
    </section>
  );
}
