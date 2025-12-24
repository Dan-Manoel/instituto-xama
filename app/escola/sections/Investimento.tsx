"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import ConsentModal from "../components/ConsentModal";
import EadInterestModal from "../components/EadInterestModal";
import {
  CHECKOUT_PRESENCIAL_URL,
  CHECKOUT_ONLINE_URL,
} from "../components/CTAButtons";

type ModalKind = "presencial" | "online" | null;

export default function Investimento() {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ModalKind>(null);

  const [openEad, setOpenEad] = useState(false);

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
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Investimento
        </h2>

        <p className="mt-3 text-center text-lg opacity-95">
          Valores oficiais do Programa 2026. Parcelamento em até{" "}
          <strong>12x*</strong>.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* PRESENCIAL */}
          <div className="relative rounded-2xl bg-[rgba(95,111,82,0.18)] border border-[rgba(169,179,136,0.35)] p-6 md:p-7 backdrop-blur flex flex-col overflow-hidden">
            {/* Selo (SVG) — Brinde */}
            <div className="absolute -top-6 -right-6 rotate-12 pointer-events-none">
              <svg
                width="150"
                height="150"
                viewBox="0 0 200 200"
                aria-hidden="true"
                className="drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
              >
                <path
                  d="M100 10
                     L112 28 L134 20 L140 40 L162 40 L160 62 L180 70
                     L168 86 L182 102 L160 110 L162 132 L140 132
                     L134 152 L112 144 L100 162 L88 144 L66 152
                     L60 132 L38 132 L40 110 L20 102 L32 86 L20 70
                     L40 62 L38 40 L60 40 L66 20 L88 28 Z"
                  fill="rgba(31,107,78,0.92)"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="2"
                />
                <circle
                  cx="100"
                  cy="95"
                  r="58"
                  fill="rgba(0,0,0,0.18)"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="2"
                />
                <text
                  x="100"
                  y="82"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="800"
                  fill="rgba(255,255,255,0.95)"
                  style={{ letterSpacing: "0.14em" }}
                >
                  GANHE!
                </text>
                <text
                  x="100"
                  y="106"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="900"
                  fill="rgba(255,255,255,0.98)"
                  style={{ letterSpacing: "0.10em" }}
                >
                  TAMBOR
                </text>
                <text
                  x="100"
                  y="130"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="rgba(255,255,255,0.85)"
                  style={{ letterSpacing: "0.18em" }}
                >
                  LAKOTA
                </text>
              </svg>
            </div>

            <h3 className="text-xl font-semibold">Turma Presencial</h3>

            {/* Brinde: tambor em destaque */}
            <div className="mt-5 rounded-xl bg-black/20 border border-white/10 p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative w-full h-[240px] md:w-[128px] md:h-[128px] shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src="/escola/tambor-premio.png"
                    alt="Tambor Xamânico (Lakota) — brinde"
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 128px"
                    priority={false}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wider opacity-85">
                    Bônus exclusivo
                  </p>

                  <p className="mt-2 leading-relaxed">
                    <strong>1 Tambor Xamânico (Lakota)</strong>.
                  </p>
                  <p className="mt-0 leading-relaxed">
                    Para acompanhar toda sua jornada.
                  </p>

                  <p className="mt-4 leading-relaxed">
                    <strong>1 Retiro Xamânico</strong>.
                  </p>
                  <p className="mt-0 leading-relaxed">
                    Onde o conhecimento se transforma em vicência.
                  </p>
                </div>
              </div>
            </div>

            {/* Preço */}
            <div className="mt-6">
              <p className="text-4xl font-semibold mt-1">12x R$ 649,95</p>
              <p className="text-sm uppercase tracking-wider opacity-80 mt-2">
                Ou R$ 6.500,00 à vista
              </p>
            </div>

            <div className="mt-5 space-y-1">
              <p className="text-sm tracking-wider opacity-95">✅ Turma limitada</p>
              <p className="text-sm tracking-wider opacity-95">
                ✅ Grupo fechado de acompanhamento
              </p>
              <p className="text-sm tracking-wider opacity-95">
                ✅ Acesso à comunidade ESA
              </p>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => openModal("presencial")}
                className="block w-full rounded-full px-8 py-4 text-base font-semibold text-center
                           bg-[#1F6B4E]/90 backdrop-blur text-white border border-[#1F6B4E]/70
                           hover:bg-[#195a42]/95 hover:-translate-y-[1px]
                           active:translate-y-0 transition cursor-pointer"
              >
                GARANTIR MINHA VAGA
              </button>

              <p className="mt-3 text-xs text-center opacity-75">
                Brinde válido para inscrições confirmadas até 31/DEZ, enquanto
                durarem as unidades.
              </p>
            </div>
          </div>

          {/* ONLINE */}
          <div className="relative rounded-2xl bg-[rgba(95,111,82,0.18)] border border-[rgba(169,179,136,0.35)] p-6 md:p-7 backdrop-blur flex flex-col overflow-hidden">
            <h3 className="text-xl font-semibold mb-3">Turma (EAD)</h3>

            {/* FAIXA DE DESCONTO */}
            <button
              type="button"
              onClick={() => setOpenEad(true)}
              className="mb-4 w-full rounded-lg bg-[#1F6B4E]/90 text-white px-4 py-2
                        text-sm font-semibold text-center
                        hover:bg-[#195a42]/95 transition
                        cursor-pointer"
            >
              ENTRE NA LISTA DE INTERESSE
            </button>

            <p className="mt-2 leading-relaxed">
              <strong>
                Formação online completa com acesso à plataforma digital.
              </strong>
            </p>

            <p className="mt-2 text-sm opacity-85">
              Ideal para quem busca conhecimento mas ainda não pode viver a
              experiência presencial.
            </p>

            <div className="mt-6">
              <p className="text-sm uppercase font-semibold blur-[7px] opacity-80">
                Formação online
              </p>

              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-semibold blur-[7px] opacity-70">
                  R$ 3.500,00
                </span>
                <span className="text-sm opacity-85">Valor a ser confirmado</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-black/25 border border-white/10 p-5">
              <p className="text-sm uppercase tracking-wider opacity-80">
                Bônus exclusivo
              </p>
              <p className="mt-2 font-semibold">Duas imersões presenciais</p>
              <p className="text-sm opacity-90">1 Retiro Xamânico.</p>
              <p className="text-sm opacity-90">1 Rito Iniciático.</p>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => setOpenEad(true)}
                className="w-full rounded-full px-8 py-4 font-semibold
                          bg-[#5F6F52]/90 text-white hover:bg-[#4f5e45]
                          cursor-pointer"
              >
                Garantir 10% OFF no lançamento
              </button>

              <p className="mt-8 text-xs text-center opacity-75">
                Desconto válido apenas para inscritos na lista de interesse.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-center opacity-80">
          * Consulte taxas do parcelamento. Pagamento em ambiente seguro.
        </p>

        {/* MODAL PRESENCIAL (pagamento) */}
        <ConsentModal open={open} onClose={closeModal} checkoutUrl={checkoutUrl} />

        {/* MODAL EAD (lista de interesse) */}
        <EadInterestModal
          open={openEad}
          onClose={() => setOpenEad(false)}
          titulo="Entre na lista VIP e garanta 10% OFF no lançamento do EAD"
          onSubmit={(data) => {
            // depois plugamos no backend/CRM/planilha.
            console.log("Lead EAD:", data);
          }}
        />
      </div>
    </SectionWrapper>
  );
}
