"use client";

import { usePathname } from "next/navigation";

function getSectionLabel(pathname: string) {
  const map: Array<{ prefix: string; label: string }> = [
    { prefix: "/escola", label: "ESCOLA DE XAMANISMO" },
    { prefix: "/celldrum", label: "CELLDRUM" },
    { prefix: "/loja", label: "LOJA DOS TXAI" },
    { prefix: "/terapias", label: "TERAPIAS" },
    { prefix: "/mentorias", label: "MENTORIAS" },
    { prefix: "/eventos", label: "EVENTOS & RITUAIS" },
    { prefix: "/tambores", label: "TAMBORES XAMÂNICOS" },
  ];

  return map.find((x) => pathname.startsWith(x.prefix))?.label ?? "PORTAL";
}

export default function TopbarPill() {
  const pathname = usePathname() ?? "/";
  return <span className="topbar-pill">{getSectionLabel(pathname)}</span>;
}
