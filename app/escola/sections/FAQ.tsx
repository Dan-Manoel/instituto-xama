"use client";

import { useEffect, useMemo, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

const faqs = [
  {
    q: "Preciso ter experiência prévia em xamanismo ou espiritualidade?",
    a: "Não. A Formação foi estruturada para acolher iniciantes e também quem já trilha um caminho. O conteúdo é progressivo e respeita o ritmo de cada aluno.",
  },
  {
    q: "Qual é a idade mínima para participar?",
    a: "A formação é destinada a maiores de 18 anos.",
  },
  {
    q: "A formação é religiosa?",
    a: "Não. O xamanismo aqui é trabalhado como filosofia, saber ancestral e caminho de consciência, não como religião. Pessoas de todas as crenças (ou nenhuma) são bem-vindas.",
  },
  {
    q: "A formação é presencial ou online?",
    a: "A Formação 2026 possui modalidade presencial e modalidade EAD. No presencial, os encontros acontecem conforme cronograma. No EAD, os conteúdos são acessados pela plataforma Astron Members, com aulas gravadas e encontros ao vivo quando previstos.",
  },
  {
    q: "Como funciona a modalidade online (EAD)?",
    a: "O acesso é liberado no Portal da Escola, com usuário e senha. As aulas são majoritariamente gravadas e a formação inclui no mínimo 5 encontros ao vivo para orientações e aprofundamentos. O acesso permanece disponível por 18 meses.",
  },
  {
    q: "Como funciona o módulo imersivo?",
    a: "O módulo imersivo acontece de sexta a domingo, proporcionando um mergulho contínuo de práticas e integração. Neste módulo, alojamento e área para camping estão inclusos (conforme a proposta da vivência).",
  },
  {
    q: "Posso pernoitar no local (alojamento ou camping)?",
    a: "O espaço conta com alojamento e área para camping para quem desejar pernoitar. Nos módulos regulares, hospedagem não está inclusa. No módulo imersivo, alojamento/camping são oferecidos conforme a proposta da vivência.",
  },
  {
    q: "A alimentação está inclusa?",
    a: "Não. A alimentação não está inclusa. Pode existir opção de refeições simples (café da manhã, almoço e café da tarde) contratadas à parte, conforme organização de cada módulo.",
  },
  {
    q: "O que está incluso na formação?",
    a: "Participação nos 10 módulos (conforme modalidade), vivências e conduções formativas, suporte e acompanhamento, apostila em PDF, acesso à Comunidade ESA e mentorias/encontros online (quando aplicável).",
  },
  {
    q: "O que não está incluso?",
    a: "Despesas de transporte até o local, hospedagem nos módulos regulares (exceto no módulo imersivo), despesas pessoais, passagens e custos relacionados à imersão andina (Peru), e conteúdos EAD exclusivos da modalidade online (quando não contratada).",
  },
  {
    q: "O uso de medicinas da floresta é obrigatório?",
    a: "Não. A participação é opcional e sempre condicionada à orientação da equipe e à segurança do aluno. É possível concluir a formação sem participar dessas vivências.",
  },
  {
    q: "Existem contraindicações para vivências específicas?",
    a: "Sim. Algumas vivências possuem critérios de segurança. Pessoas com determinadas condições clínicas, psicológicas ou em uso de alguns medicamentos podem ser orientadas a não participar de atividades específicas.",
  },
  {
    q: "Como funciona a anamnese e o termo de responsabilidade?",
    a: "Todos os alunos preenchem ficha de anamnese e assinam um Termo de Responsabilidade, confirmando ciência da proposta formativa, orientações e responsabilidades pessoais ao longo do processo.",
  },
  {
    q: "A formação oferece certificado?",
    a: "Sim. Ao concluir a Formação 2026, o aluno recebe certificação de Terapeuta Integrativo Xamânico, reconhecendo a jornada formativa.",
  },
  {
    q: "A formação me habilita como terapeuta?",
    a: "A formação tem caráter educacional, vivencial e de autoconhecimento. O uso profissional depende da ética, responsabilidade e contexto de atuação de cada aluno.",
  },
  {
    q: "Existe grupo de alunos e comunidade?",
    a: "Sim. Os alunos fazem parte da Comunidade ESA, com acesso ao Portal ESA e ao grupo fechado de WhatsApp da turma 2026, fortalecendo vínculos e suporte ao longo da jornada.",
  },
  {
    q: "Como funciona a política de cancelamento?",
    a: "A política de cancelamento é apresentada no momento da matrícula e no contrato/termo de adesão, de forma clara e transparente.",
  },
  {
    q: "Ainda estou em dúvida. Como falar com a equipe?",
    a: "Fale com a equipe pelos canais oficiais informados na página. A gente orienta você sobre modalidades, cronograma e detalhes da inscrição.",
  },
];

const PAGE_SIZE_MOBILE = 2;
const PAGE_SIZE_DESKTOP = 4;

export default function FAQ() {
  const [page, setPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pageSize = isDesktop ? PAGE_SIZE_DESKTOP : PAGE_SIZE_MOBILE;

  const totalPages = useMemo(
    () => Math.ceil(faqs.length / pageSize),
    [pageSize]
  );

  useEffect(() => {
    // se trocar de mobile <-> desktop e a página atual ficar fora do range, ajusta
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const start = page * pageSize;
  const currentFaqs = faqs.slice(start, start + pageSize);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Perguntas frequentes
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {currentFaqs.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10"
          >
            <h3 className="text-lg font-medium">{f.q}</h3>
            <p className="mt-3 opacity-95 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

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
    </SectionWrapper>
  );
}
