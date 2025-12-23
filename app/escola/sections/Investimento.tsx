"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import ConsentModal from "../components/ConsentModal";
import { CHECKOUT_PRESENCIAL_URL, CHECKOUT_ONLINE_URL } from "../components/CTAButtons";

type ModalKind = "presencial" | "online" | null;

export default function Investimento() {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ModalKind>(null);

  const checkoutUrl =
    kind === "presencial"
      ? CHECKOUT_PRESENCIAL_URL
      : kind === "online"
      ? CHECKOUT_ONLINE_URL
      : "";

  const openModal = (k: Exclude<ModalKind, null>) => {
    setKind(k);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setKind(null);
  };

  return (
    <SectionWrapper id="investimento">
      <div className="rounded-3xl bg-[rgba(254,250,224,0.14)] p-8 md:p-12 backdrop-blur-xl border border-[rgba(169,179,136,0.25)]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Investimento</h2>

        <p className="mt-3 text-center text-lg opacity-95">
          Valores oficiais do Programa 2026. Parcelamento em até <strong>12x*</strong>.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* PRESENCIAL */}
          <div className="rounded-2xl bg-[rgba(95,111,82,0.18)] border border-[rgba(169,179,136,0.35)] p-6 md:p-7 backdrop-blur flex flex-col">
            <h3 className="text-xl font-semibold">Presencial</h3>

            <p className="mt-2 leading-relaxed">
              <strong>Ganhe</strong> 1 Retiro Xamânico + <strong>1 Tambor Xamânico (Lakota)</strong> fazendo sua matrícula até{" "}
              <strong>31/12</strong>.
            </p>

            {/* Tambor (mobile: imagem em cima / desktop: lado a lado) */}
            <div className="mt-5 rounded-xl bg-black/20 border border-white/10 p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative w-full h-[220px] md:w-[110px] md:h-[110px] shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src="/escola/tambor-premio.png"
                    alt="Tambor Xamânico (Lakota)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 110px"
                    priority={false}
                  />
                </div>

                <div className="md:flex-1">
                  <p className="text-sm opacity-80"><strong>Garanta o seu brinde</strong></p>
                  <p className="mt-1 font-semibold leading-snug">Tambor Xamânico (Lakota)</p>
                  <p className="mt-1 text-sm opacity-85">
                    Entregue no programa presencial (conforme condições da matrícula).
                  </p>
                </div>
              </div>
            </div>

            {/* Preço */}
            <div className="mt-6">
              <p className="text-sm uppercase tracking-wider opacity-80">Investimento</p>
              <p className="text-4xl font-semibold mt-1">R$ 6.500,00</p>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => openModal("presencial")}
                className="block w-full rounded-full px-8 py-4 text-base font-semibold text-center
                           bg-white/10 backdrop-blur-xl border border-white/20
                           hover:bg-white/20 hover:-translate-y-[1px]
                           transition cursor-pointer"
              >
                Inscrição presencial
              </button>
            </div>
          </div>

          {/* ONLINE */}
          <div className="rounded-2xl bg-[rgba(95,111,82,0.18)] border border-[rgba(169,179,136,0.35)] p-6 md:p-7 backdrop-blur flex flex-col">
            <h3 className="text-xl font-semibold">Online (EAD)</h3>

            <p className="mt-2 leading-relaxed">Formação online com acesso à plataforma digital.</p>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-wider opacity-80">Formação online</p>
              <p className="text-4xl font-semibold mt-1">R$ 3.500,00</p>
            </div>

            <div className="mt-5 rounded-xl bg-black/25 border border-white/10 p-5">
              <p className="text-sm uppercase tracking-wider opacity-80">Bônus exclusivo</p>
              <p className="mt-2 font-semibold text-lg">Duas imersões presenciais</p>
              <p className="text-sm opacity-90">Vivências no Instituto Xamã incluídas na formação.</p>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => openModal("online")}
                className="block w-full rounded-full px-8 py-4 text-base font-semibold text-center
                           bg-white/10 backdrop-blur-xl border border-white/20
                           hover:bg-white/20 hover:-translate-y-[1px]
                           transition cursor-pointer"
              >
                Inscrição online
              </button>
            </div>
          </div>
        </div>

        {/* NOVO BLOCO: bônus/comunidade (sem quebrar layout) */}
        <div className="mt-8 rounded-2xl bg-black/25 border border-white/10 p-6 md:p-7">
          <p className="text-sm uppercase tracking-wider opacity-80">Ao se inscrever, você também recebe</p>

          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold">Comunidade ESA</p>
              <p className="mt-1 text-sm opacity-90">
                Um espaço vivo de troca, apoio e conexão com pessoas que trilham o mesmo chamado.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold">Grupo fechado (WhatsApp) da turma 2026</p>
              <p className="mt-1 text-sm opacity-90">
                Suporte direto, partilhas e fortalecimento de vínculos ao longo da jornada.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold">Encontros online exclusivos</p>
              <p className="mt-1 text-sm opacity-90">
                Orientações e aprofundamentos para manter consistência entre os módulos.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold">Mentoria do Oráculo Pessoal</p>
              <p className="mt-1 text-sm opacity-90">
                Um processo autoral para criar sua própria ferramenta de leitura e autoconhecimento.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm opacity-80">
            Benefícios e entregas podem variar por modalidade e cronograma da turma, mantendo coerência com a proposta formativa.
          </p>
        </div>

        <p className="mt-10 text-sm text-center opacity-80">
          * Consulte taxas do parcelamento. Pagamento em ambiente seguro. Você será redirecionado para concluir a inscrição.
        </p>

        <ConsentModal open={open} onClose={closeModal} checkoutUrl={checkoutUrl} />
      </div>
    </SectionWrapper>
  );
}
