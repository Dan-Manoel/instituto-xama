import SectionWrapper from "../components/SectionWrapper";

const modulos = [
  {
    titulo: "Módulo I",
    data: "Fevereiro 2026",
    resumo: "Fundação dos Saberes Ancestrais. História, símbolos, práticas e vivência de abertura.",
  },
  {
    titulo: "Módulo II",
    data: "Março 2026",
    resumo: "Totens, arquétipos e força da natureza. Vivências práticas.",
  },
  {
    titulo: "Módulo III",
    data: "Abril 2026",
    resumo: "Níveis de consciência, mediunidade e recursos terapêuticos.",
  },
  {
    titulo: "Módulo IV",
    data: "Maio 2026",
    resumo: "Medicinas da floresta, corpo sutil e ritos de cura.",
  },
];

export default function Programa() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Programa 2026
      </h2>
      <p className="mt-4 text-center text-lg opacity-95">
        Cada módulo une teoria, prática e vivência ritual.
        O calendário final será divulgado em breve.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {modulos.map((m, idx) => (
          <div key={idx} className="rounded-2xl bg-white/5 p-7 backdrop-blur">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium">{m.titulo}</h3>
              <span className="text-sm opacity-80">{m.data}</span>
            </div>
            <p className="mt-3 opacity-95 leading-relaxed">{m.resumo}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
