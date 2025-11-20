// app/page.tsx

const WHATSAPP_NUMBER = '5511965897744';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Home() {
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <a href="#principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <header className="topbar">
        <div className="wrap">
          <div className="brand">
            <span className="brand-mark">✦</span>
            <span>Instituto Xamã</span>
          </div>
          <span className="topbar-pill">Site em construção</span>
        </div>
      </header>

      <main id="principal" className="main">
        <section className="section section-construction">
          <div className="wrap">
            <div className="construction-layout">
              {/* Ilustração da plantinha */}
              <div className="construction-illustration" aria-hidden="true">
                <div className="sprout">
                  <div className="sprout-circle">
                    <div className="sprout-stem" />
                    <div className="sprout-leaf sprout-leaf-left" />
                    <div className="sprout-leaf sprout-leaf-right" />
                    <div className="sprout-soil" />
                  </div>
                </div>
              </div>

              {/* Card principal */}
              <div className="construction-card" role="status" aria-live="polite">
                <p className="construction-kicker">Novo portal em preparação</p>

                <h1>Estamos tecendo o novo portal do Instituto Xamã.</h1>

                <p className="construction-text">
                  Estamos reorganizando a casa para receber você em um espaço mais claro e alinhado com a essência do
                  Instituto Xamã: escola de saberes ancestrais, tambores xamânicos, terapias integrativas e rituais com
                  medicinas da floresta como ayahuasca, cogumelos sagrados e cactos.
                </p>

                <div className="construction-meta">
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span className="meta-value">
                      <span className="status-dot" />
                      Em desenvolvimento
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Caminho</span>
                    <span className="meta-value">
                      Saberes ancestrais, medicinas da floresta e terapias integrativas
                    </span>
                  </div>
                </div>

                <div className="construction-actions">
                  <a
                    className="btn primary whatsapp-btn"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>

                  <a
                    className="btn ghost"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acompanhar no Instagram
                  </a>
                </div>

                <p className="construction-footnote">
                  Enquanto o portal não fica pronto, acompanhe nossos canais para novas datas de rituais, oficinas de
                  tambor, formações e atendimentos terapêuticos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="construction-footer">
        <div className="wrap">
          <small>© {anoAtual} Instituto Xamã. Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  );
}
