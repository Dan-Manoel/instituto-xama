"use client";

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

type Modulo = {
  titulo: string;
  data: string;
  resumo: string;
};

const AUTOPLAY_DELAY = 10000; // 10 segundos
const AUTOPLAY_RESUME_DELAY = 8000; // tempo após interação manual

const MODULOS: Modulo[] = [
  {
    titulo: "Módulo I: Fundamentação dos Saberes Ancestrais",
    data: "28/03/2026",
    resumo: `Conteúdos
• História e conceito do Xamanismo
• Povos originários e suas lendas
• Grandes pesquisadores
• O que é o Xamanismo e suas vertentes
• O Xamanismo no cotidiano
• Mandala Mágica: os quatro elementos no Xamanismo
• Abalone e o poder da queima das ervas e resinas sagradas
• Limpeza energética pessoal e de ambientes

Vivência
• Encontro com o seu espaço sagrado
• Pau falante e roda de cura`,
  },
  {
    titulo: "Módulo II: Fundamentação dos Saberes Ancestrais II",
    data: "25/04/2026",
    resumo: `Conteúdos
• O poder dos elementos no Xamanismo
• Caminho Vermelho e Caminho Quádruplo
• A força do totem animal no Xamanismo

Vivência
• OCA
• Construção do seu totem animal de poder`,
  },
  {
    titulo: "Módulo III: Arquétipos no Xamanismo",
    data: "30/05/2026",
    resumo: `Conteúdos
• Arquétipos segundo Jung
• Inconsciente coletivo
• Oráculo Thaty Tambor

Vivência
• Descoberta do arquétipo pessoal`,
  },
  {
    titulo: "Módulo IV: Níveis de Consciência",
    data: "27/06/2026",
    resumo: `Conteúdos
• Identificação e desidentificação
• Indo além do ego
• Organização do aparelho psíquico

Vivência
• Conexão espiritual`,
  },
  {
    titulo: "Módulo V (Híbrido): Medicinas da Floresta",
    data: "24/07/2026",
    resumo: `Conteúdos
• Ética e uso consciente das medicinas
• Ayahuasca, Rapé, Sananga, Kambô

Vivência
• Cama de ervas`,
  },
  {
    titulo: "Módulo VI (Imersivo)",
    data: "25–26/07/2026",
    resumo: `Conteúdos
• Instrumentos mágicos
• Canções de poder e cura
• Temazcal

Vivência
• Ritual Xamânico`,
  },
  {
    titulo: "Módulo VII: Recursos Terapêuticos I",
    data: "29/08/2026",
    resumo: `Conteúdos
• Chakras e corpos sutis
• Meditação guiada

Vivência
• Alinhamento energético`,
  },
  {
    titulo: "Módulo VIII: Terapias Transpessoais",
    data: "26/09/2026",
    resumo: `Conteúdos
• Arteterapia
• Mandalas terapêuticas

Vivência
• Cerimônia do Cacau`,
  },
  {
    titulo: "Módulo IX (Híbrido): Xamanismo Andino",
    data: "16/10/2026",
    resumo: `Conteúdos
• Setting terapêutico
• Técnicas de abordagem

Vivência
• Machu Picchu`,
  },
  {
    titulo: "Módulo X: Encerramento",
    data: "28/11/2026",
    resumo: `Vivência
• Rito de passagem e fechamento`,
  },
];

export default function Programa() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [active, setActive] = useState(0);

  const cardWidth = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    return el.clientWidth / (window.innerWidth >= 768 ? 2 : 1);
  };

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(idx, MODULOS.length - 1));
    el.scrollTo({
      left: clamped * cardWidth(),
      behavior: "smooth",
    });
    setActive(clamped);
  };

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(startAutoplay, AUTOPLAY_RESUME_DELAY);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setActive((a) => {
        const next = a + 1 >= MODULOS.length ? 0 : a + 1;
        goTo(next);
        return next;
      });
    }, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const prev = () => {
    pauseAutoplay();
    goTo(active - 1);
  };

  const next = () => {
    pauseAutoplay();
    goTo(active + 1);
  };

  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Programa 2026
      </h2>

      <div
        ref={scrollerRef}
        onTouchStart={pauseAutoplay}
        onMouseDown={pauseAutoplay}
        className="mt-10 flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {MODULOS.map((m, idx) => (
          <div
            key={idx}
            className="snap-start flex-shrink-0 w-full md:w-1/2 rounded-2xl
            bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex justify-between gap-3 mb-2">
              <h3 className="font-semibold">{m.titulo}</h3>
              <strong className="text-sm">{m.data}</strong>
            </div>

            <div className="whitespace-pre-line leading-relaxed">
              {m.resumo
                .replace(/^Conteúdos/gm, "Conteúdos")
                .replace(/^Vivência/gm, "Vivência")}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ BOTÕES ABAIXO DOS CARDS (mobile + desktop) */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2
          backdrop-blur hover:bg-white/15 transition"
          aria-label="Módulo anterior"
        >
          ← Anterior
        </button>

        <div className="text-sm opacity-85">
          {active + 1}/{MODULOS.length}
        </div>

        <button
          onClick={next}
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2
          backdrop-blur hover:bg-white/15 transition"
          aria-label="Próximo módulo"
        >
          Próximo →
        </button>
      </div>
    </SectionWrapper>
  );
}
