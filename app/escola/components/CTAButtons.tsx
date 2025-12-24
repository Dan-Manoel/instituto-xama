export const CHECKOUT_PRESENCIAL_URL =
  "https://loja.infinitepay.io/txaiarruda/quz4678-formacao-esa-online---ensino-hibrido";

export const CHECKOUT_ONLINE_URL =
  "https://loja.infinitepay.io/txaiarruda/giu5596-1-lote---escola-de-xamanismo-2026";

export default function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <a
        href={CHECKOUT_PRESENCIAL_URL}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-full px-8 py-4 text-base font-semibold text-white text-center
          bg-[--verde-mata] bg-opacity-90
          backdrop-blur-xl border border-white/15
          shadow-[0_10px_30px_rgba(0,0,0,0.45)]
          hover:bg-opacity-100 hover:-translate-y-[1px]
          active:translate-y-0 transition
        "
      >
        Inscrição presencial
      </a>

      <a
        href={CHECKOUT_ONLINE_URL}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-full px-8 py-4 text-base font-semibold text-white text-center
          bg-white/10 backdrop-blur-xl border border-white/20
          hover:bg-white/20 hover:-translate-y-[1px]
          active:translate-y-0 transition
        "
      >
        Inscrição online
      </a>
    </div>
  );
}
