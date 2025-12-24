"use client";

import { useEffect, useMemo, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

const itens = [
  {
    titulo: "Transformação pessoal profunda",
    texto:
      "Vivencie uma jornada de autoconhecimento e reconexão com seu poder interno em todos os níveis.",
  },
  {
    titulo: "Aprendizado prático e aplicável",
    texto:
      "Integre saberes ancestrais e recursos terapêuticos para aplicar em sua vida pessoal e profissional.",
  },
  {
    titulo: "Habilidades terapêuticas",
    texto:
      "Desenvolva presença, escuta, condução de processos e práticas que apoiam cura e expansão de consciência.",
  },
  {
    titulo: "Comunidade e apoio pós formação",
    texto:
      "Continue sua jornada com uma rede de suporte e recursos adicionais após a conclusão do ciclo.",
  },
];

const PAGE_SIZE_MOBILE = 2;

export default function Beneficios() {
  const [page, setPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Desktop não pagina (mostra tudo em grid como já era)
  const pageSize = isDesktop ? itens.length : PAGE_SIZE_MOBILE;

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(itens.length / pageSize)),
    [pageSize]
  );

  useEffect(() => {
    // se mudar de tamanho de tela e a página ficar inválida, ajusta
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const start = page * pageSize;
  const currentItens = isDesktop ? itens : itens.slice(start, start + pageSize);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        O que você leva dessa jornada
      </h2>

      {/* DESKTOP: mantém como era (grid completo) */}
      <div className="mt-10 hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {itens.map((i, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10"
          >
            <h3 className="text-lg font-medium">{i.titulo}</h3>
            <p className="mt-3 opacity-95 leading-relaxed">{i.texto}</p>
          </div>
        ))}
      </div>

      {/* MOBILE: 2 por página */}
      <div className="mt-10 md:hidden">
        <div className="grid grid-cols-1 gap-5">
          {currentItens.map((i, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10"
            >
              <h3 className="text-lg font-medium">{i.titulo}</h3>
              <p className="mt-3 opacity-95 leading-relaxed">{i.texto}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={page === 0}
              className="rounded-full px-6 py-3 text-sm font-semibold
              bg-white/10 backdrop-blur border border-white/20
              hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              ← Anterior
            </button>

            <div className="text-sm opacity-85">
              {page + 1} / {totalPages}
            </div>

            <button
              onClick={next}
              disabled={page === totalPages - 1}
              className="rounded-full px-6 py-3 text-sm font-semibold
              bg-white/10 backdrop-blur border border-white/20
              hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Próximo →
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
