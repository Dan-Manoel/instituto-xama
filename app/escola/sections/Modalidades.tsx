import SectionWrapper from "../components/SectionWrapper";

export default function Modalidades() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Modalidades
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-sm">
          <h3 className="text-xl font-medium">Presencial</h3>
          <p className="mt-3 opacity-95 leading-relaxed">
            Encontros em grupo, vivências rituais e práticas guiadas.
            Inclui suporte direto com os facilitadores.
          </p>
          <ul className="mt-4 space-y-2 opacity-95">
            <li>Vivências ao vivo</li>
            <li>Ritos e práticas em campo</li>
            <li>Comunidade presencial</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-sm">
          <h3 className="text-xl font-medium">Online</h3>
          <p className="mt-3 opacity-95 leading-relaxed">
            Formação completa na plataforma digital.
            Acesso liberado após confirmação de pagamento.
          </p>
          <ul className="mt-4 space-y-2 opacity-95">
            <li>Aulas e materiais digitais</li>
            <li>Encontros ao vivo quando previstos</li>
            <li>Comunidade online e suporte</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
