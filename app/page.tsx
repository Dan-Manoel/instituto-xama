export default function Home() {
  const phone = "5511965897744"; // número único de WhatsApp

  return (
    <main className="section">
      <div className="wrap section-construction">
        {/* ILUSTRAÇÃO */}
        <div className="construction-illustration">
          <div className="sprout-circle">
            <div className="sprout-soil" />
            <div className="sprout-stem" />
            <div className="sprout-leaf sprout-leaf-left" />
            <div className="sprout-leaf sprout -leaf-right" />
          </div>
        </div>

        {/* CARD */}
        <div className="construction-card">
          <p className="construction-kicker">NOVO PORTAL EM PREPARAÇÃO</p>

          <h1>Estamos tecendo o portal do Instituto Xamã.</h1>

          <p className="construction-text">
            Estamos organizando tudo para receber você em um espaço
            claro, natural e alinhado com a essência do Instituto Xamã: Escola
            de Xamanismo, tambores Xamânicos, terapias integrativas e
            rituais com medicinas da floresta.
          </p>

          <div className="construction-meta">
            <div>
              <p className="meta-label">Status</p>
              <p className="meta-value">Em desenvolvimento</p>
            </div>
          </div>


          <div className="flex gap-3 mt-4 flex-wrap">
  <a
    href={`https://wa.me/${phone}`}
    className="btn btn-whatsapp"
    target="_blank"
  >
    Falar no WhatsApp
  </a>

  <a
  href="https://instagram.com"
  className="btn btn-instagram flex items-center gap-2"
  target="_blank"
>
  Acompanhe-nos
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
</a>

</div>


          <p className="construction-footnote">
            Enquanto o portal não fica pronto, acompanhe nossos canais para
            novas datas de rituais, oficinas de tambor, formações e
            atendimentos terapêuticos.
          </p>
        </div>
      </div>
    </main>
  );
}
