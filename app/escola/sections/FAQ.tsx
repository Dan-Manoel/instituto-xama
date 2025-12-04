import SectionWrapper from "../components/SectionWrapper";

const faqs = [
  {
    q: "Preciso ter experiência anterior?",
    a: "Não. A formação começa do fundamento e vai aprofundando ao longo dos módulos.",
  },
  {
    q: "Como funciona a modalidade online?",
    a: "Após a confirmação do pagamento, o acesso é liberado na plataforma digital.",
  },
  {
    q: "Posso migrar do online para o presencial?",
    a: "Sim, caso existam vagas e mediante ajuste de investimento.",
  },
  {
    q: "Como recebo confirmação da inscrição?",
    a: "Você receberá um e mail automático do gateway de pagamento e da Escola.",
  },
];

export default function FAQ() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Perguntas frequentes
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">{f.q}</h3>
            <p className="mt-3 opacity-95 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
