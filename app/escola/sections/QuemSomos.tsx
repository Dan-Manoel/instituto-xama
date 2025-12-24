"use client";

import { useMemo, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

const paraQuem = [
  "Pessoas em chamado de transformação real, com seriedade e responsabilidade.",
  "Buscadores espirituais que desejam integrar ciência e espiritualidade.",
  "Terapeutas integrativos, psicólogos, psicanalistas e profissionais da saúde.",
  "Facilitadores, líderes conscientes e pessoas em autoconhecimento profundo.",
];

const paraQuemNao = [
  "Quem busca solução rápida ou experiências superficiais.",
  "Quem espera fórmulas prontas ou promessas milagrosas.",
  "Quem não está disposto a estudo, prática e processo interno consistente.",
];

const facilitadores = [
  {
    nome: "Thaty Tambor",
    foco:
      "Condução central, saberes ancestrais e integração entre ciência e espiritualidade.",
  },
  {
    nome: "Bruno Arruda",
    foco:
      "Vivências práticas, trabalho com o tambor, acolhimento e sustentação do grupo.",
  },
  {
    nome: "Getúlio Tecchio",
    foco:
      "Compreensão da psique, do ego e dos processos internos de consciência.",
  },
  {
    nome: "Andrea Giaretta",
    foco:
      "Expressão simbólica, arte e arquétipos como caminhos de integração e propósito.",
  },
  {
    nome: "Gabriel Lourenço",
    foco:
      "Olhar científico e ético sobre medicinas da floresta e uso responsável de práticas.",
  },
  {
    nome: "Flaviana",
    foco:
      "Sandplay e processos simbólicos profundos para autoconhecimento e integração.",
  },
  {
    nome: "Thwskya (Fulni-ô)",
    foco: "Cantos, rezos, costumes e saberes tradicionais vivos do seu povo.",
  },
  {
    nome: "Naynawa (Pajé Shanenawa)",
    foco:
      "Ensinamentos ancestrais e conduções cerimoniais com respeito e tradição.",
  },
];

function chunk2<T>(arr: T[]) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) out.push(arr.slice(i, i + 2));
  return out;
}

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function Btn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-md px-6 py-2 text-sm font-semibold
        bg-white/10 backdrop-blur border border-white/20
        hover:bg-white/20 transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default function QuemSomos() {
  const [tab, setTab] = useState<0 | 1>(0);
  const publico = tab === 0 ? paraQuem : paraQuemNao;

  const pages = useMemo(() => chunk2(facilitadores), []);
  const [facPage, setFacPage] = useState(0);

  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* 1) QUEM SOMOS — faixa horizontal */}
        <div className="lg:col-span-2 rounded-2xl bg-white/5 p-7 md:p-8 backdrop-blur border border-white/10">
          <h2 className="text-3xl md:text-4xl font-semibold">Quem somos</h2>

          <p className="mt-4 text-lg leading-relaxed opacity-95">
            A Escola de Xamanismo foi criada para sustentar um caminho formativo,
            vivencial e espiritual, com seriedade, cuidado e presença. Aqui,
            saber ancestral não é fantasia: é estudo, prática e integração
            consciente.
          </p>

          <p className="mt-3 text-lg leading-relaxed opacity-95">
            A Formação 2026 é conduzida por <strong>Thaty Tambor</strong> e{" "}
            <strong>Bruno Arruda</strong>. Juntos, unem vivências profundas,
            condução responsável e uma visão que integra espiritualidade e
            desenvolvimento humano.
          </p>
        </div>

        {/* 2) O QUE MUDA — faixa horizontal */}
        <div className="lg:col-span-2 rounded-2xl bg-white/5 p-7 md:p-8 backdrop-blur border border-white/10">
          <p className="text-base md:text-lg uppercase tracking-wider opacity-85">
            <strong>O que muda na vida do aluno?</strong>
          </p>
          <p className="mt-2 text-base md:text-[15px] leading-relaxed opacity-90">
            O aluno desperta sua força interior, desenvolve clareza sobre seus
            dons e caminhos, aprofunda sua consciência e aprende a viver com
            propósito, presença e responsabilidade espiritual.
          </p>
        </div>


        {/* 3) ESQUERDA — Público-alvo (tabs) */}
        <div className="rounded-2xl bg-white/5 p-6 md:p-7 backdrop-blur border border-white/10 flex flex-col">
          <div className="rounded-2xl bg-black/20 border border-white/10 p-6 flex-1">
            {/* Tabs: mobile fica como estava; desktop centralizado e ocupando largura */}
            <div className="flex gap-3 md:gap-4 md:justify-center">
              <button
                type="button"
                onClick={() => setTab(0)}
                className={[
                  // Mobile: mantém compacto
                  "px-4 py-2 text-sm font-semibold rounded-md transition border",
                  // Desktop: mais largo e proporcional
                  "md:flex-1 md:max-w-[320px] md:text-center",
                  tab === 0
                    ? "bg-white/10 border-white/35"
                    : "bg-transparent border-white/15 hover:bg-white/5",
                  // UX: cursor e hover mais claro
                  "cursor-pointer",
                ].join(" ")}
              >
                Para quem é
              </button>

              <button
                type="button"
                onClick={() => setTab(1)}
                className={[
                  "px-4 py-2 text-sm font-semibold rounded-md transition border",
                  "md:flex-1 md:max-w-[320px] md:text-center",
                  tab === 1
                    ? "bg-white/10 border-white/35"
                    : "bg-transparent border-white/15 hover:bg-white/5",
                  "cursor-pointer",
                ].join(" ")}
              >
                Para quem não é
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {publico.map((t, i) => (
                <p key={i} className="opacity-95 leading-relaxed">
                  “{t}”
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 4) DIREITA — Quem sustenta (carrossel 2 por página) */}
        <div className="rounded-2xl bg-white/5 p-6 md:p-7 backdrop-blur border border-white/10 flex flex-col">
          <h3 className="text-xl font-semibold">Facilitadores</h3>

          <p className="mt-2 opacity-90 leading-relaxed">
            Além dos fundadores Thaty e Bruno, a jornada pode contar com facilitadores
            convidados conforme cada módulo, ampliando o contato com diferentes
            saberes e abordagens, sem perder profundidade.
          </p>

          {/* Área do carrossel:
              - Mobile: NÃO MEXE (altura natural)
              - Desktop: altura fixa pra evitar botão pulando
          */}
          <div
            className="
              mt-4 rounded-2xl bg-black/20 border border-white/10 p-5 flex-1
              md:min-h-[240px] md:flex md:flex-col
            "
          >
            <div className="grid sm:grid-cols-2 gap-4 md:flex-1">
              {pages[facPage]?.map((f, idx) => (
                <div
                  key={idx}
                  className="
                    rounded-xl bg-black/20 border border-white/10 p-4
                    md:h-full
                  "
                >
                  <p className="font-semibold leading-snug">{f.nome}</p>
                  <p className="mt-1 text-sm opacity-90 leading-relaxed">
                    {f.foco}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Botões sempre no mesmo lugar (desktop) */}
          <div className="mt-5 flex justify-center gap-4">
            <Btn onClick={() => setFacPage((v) => clampIndex(v - 1, pages.length))}>
              Voltar
            </Btn>
            <Btn onClick={() => setFacPage((v) => clampIndex(v + 1, pages.length))}>
              Avançar
            </Btn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
