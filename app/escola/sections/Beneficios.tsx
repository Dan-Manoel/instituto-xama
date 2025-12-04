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

export default function Beneficios() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        O que você leva dessa jornada
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {itens.map((i, idx) => (
          <div key={idx} className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">{i.titulo}</h3>
            <p className="mt-3 opacity-95 leading-relaxed">{i.texto}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
