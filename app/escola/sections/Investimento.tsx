import SectionWrapper from "../components/SectionWrapper";
import {
  CHECKOUT_PRESENCIAL_URL,
  CHECKOUT_ONLINE_URL,
} from "../components/CTAButtons";

export default function Investimento() {
  return (
    <SectionWrapper id="investimento">
      <div className="rounded-3xl bg-white/5 p-10 md:p-12 backdrop-blur-xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Investimento
        </h2>

        <p className="mt-4 text-center text-lg opacity-95">
          Valores oficiais 2026 serão divulgados em breve. Você já pode garantir
          prioridade de matrícula.
        </p>

        {/* GRID — AGORA CADA COLUNA TEM CAIXA + BOTÃO */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* PRESENCIAL */}
          <div>
            <div className="rounded-2xl bg-black/30 p-6 backdrop-blur border border-white/10 shadow-sm">
              <h3 className="text-xl font-medium text-center">Presencial</h3>
              <p className="mt-2 text-3xl font-semibold text-center">
                A definir
              </p>
              <p className="mt-2 opacity-90 text-center">
                Parcelamento no cartão e Pix
              </p>
            </div>

            {/* BOTÃO PRESENCIAL — AGORA ALINHADO */}
            <div className="mt-5 flex justify-center">
              <a
                href={CHECKOUT_PRESENCIAL_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-4 text-base font-semibold text-white text-center
                           bg-white/10 backdrop-blur-xl border border-white/20
                           hover:bg-white/20 hover:-translate-y-[1px]
                           active:translate-y-0 transition w-full md:w-auto"
              >
                Inscrição presencial
              </a>
            </div>
          </div>

          {/* ONLINE */}
          <div>
            <div className="rounded-2xl bg-black/30 p-6 backdrop-blur border border-white/10 shadow-sm">
              <h3 className="text-xl font-medium text-center">Online</h3>
              <p className="mt-2 text-3xl font-semibold text-center">
                A definir
              </p>
              <p className="mt-2 opacity-90 text-center">
                Acesso na plataforma digital
              </p>
            </div>

            {/* BOTÃO ONLINE — ALINHADO CORRETAMENTE */}
            <div className="mt-5 flex justify-center">
              <a
                href={CHECKOUT_ONLINE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-4 text-base font-semibold text-white text-center
                           bg-white/10 backdrop-blur-xl border border-white/20
                           hover:bg-white/20 hover:-translate-y-[1px]
                           active:translate-y-0 transition w-full md:w-auto"
              >
                Inscrição online
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-center opacity-80">
          Pagamento em ambiente seguro do provedor. Você será redirecionado para
          concluir a inscrição.
        </p>
      </div>
    </SectionWrapper>
  );
}
