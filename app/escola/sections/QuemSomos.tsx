import SectionWrapper from "../components/SectionWrapper";

export default function QuemSomos() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Quem somos
          </h2>
          <p className="mt-5 text-lg leading-relaxed opacity-95">
            A Escola de Xamanismo foi criada para oferecer um espaço sagrado
            de aprendizado e transformação. Nossa missão é reconectar e qualificar
            as pessoas com a sabedoria ancestral por meio de vivências profundas
            de autoconhecimento e espiritualidade.
          </p>
          <p className="mt-4 text-lg leading-relaxed opacity-95">
            Em 2026 iniciamos uma nova jornada, com uma formação renovada,
            encontros presenciais e uma modalidade online completa.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-8 backdrop-blur">
          <h3 className="text-xl font-medium">A caminhada dos facilitadores</h3>
          <p className="mt-4 opacity-95 leading-relaxed">
            Bruno iniciou sua jornada espiritual em 2007, aprofundando estudos
            e vivências em diferentes tradições. Em 2019, encontrou Tatiana,
            cuja conexão desde cedo com o mundo espiritual consolidou um propósito
            comum de cura, acolhimento e serviço.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
