"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type EadInterestModalProps = {
  open: boolean;
  onClose: () => void;
  titulo?: string;
  onSubmit?: (data: {
    nome: string;
    email: string;
    telefone: string;
    optIn: boolean;
  }) => Promise<void> | void;
};

export default function EadInterestModal({
  open,
  onClose,
  titulo = "Entre na lista VIP do EAD",
  onSubmit,
}: EadInterestModalProps) {
  const [mounted, setMounted] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [optIn, setOptIn] = useState(true);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nomeOk = nome.trim().length >= 3;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const telOk = telefone.replace(/\D/g, "").length >= 10;
  const canSubmit = useMemo(
    () => nomeOk && emailOk && telOk && optIn && !loading,
    [nomeOk, emailOk, telOk, optIn, loading]
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setNome("");
    setEmail("");
    setTelefone("");
    setOptIn(true);
    setLoading(false);
    setSuccess(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    try {
      setLoading(true);

      await onSubmit?.({ nome, email, telefone, optIn });

      // se você ainda não tem backend, pelo menos já "funciona" visualmente
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const modal = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="
          relative w-full max-w-[44rem]
          rounded-[26px] border border-black/10
          bg-[rgba(254,250,224,0.96)]
          shadow-2xl overflow-hidden
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="px-5 md:px-8 pt-6 md:pt-7 pb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--texto)]">
            {success ? "Você está na lista" : titulo}
          </h2>

          <p className="mt-2 text-sm md:text-base text-[var(--texto-fraco)]">
            {success
              ? "Assim que o EAD abrir, você recebe o aviso primeiro — e com vantagem."
              : "Garanta prioridade e desconto de lançamento no EAD. Sem spam, só aviso importante."}
          </p>
        </div>

        {/* BODY */}
        <div className="px-5 md:px-8 pb-6">
          {success ? (
            <div className="rounded-2xl bg-black/5 border border-black/10 p-4 md:p-5 text-[var(--texto)]">
              <p className="leading-relaxed">
                Perfeito. Quando a Escola de Xamanismo EAD estiver disponível, você vai ser avisado.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[var(--texto)]">
                    Nome <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    className="mt-2 w-full rounded-2xl bg-white/60 border border-black/15 px-4 py-3 text-[var(--texto)]
                               placeholder:text-[var(--texto-fraco)] focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                  {!nomeOk && nome.length > 0 && (
                    <p className="mt-2 text-xs text-red-600">Informe seu nome.</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--texto)]">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@dominio.com"
                    className="mt-2 w-full rounded-2xl bg-white/60 border border-black/15 px-4 py-3 text-[var(--texto)]
                               placeholder:text-[var(--texto-fraco)] focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                  {!emailOk && email.length > 0 && (
                    <p className="mt-2 text-xs text-red-600">Informe um email válido.</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--texto)]">
                    Telefone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(DD) 00000-0000"
                    className="mt-2 w-full rounded-2xl bg-white/60 border border-black/15 px-4 py-3 text-[var(--texto)]
                               placeholder:text-[var(--texto-fraco)] focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                  {!telOk && telefone.length > 0 && (
                    <p className="mt-2 text-xs text-red-600">Informe um telefone válido (com DDD).</p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <input
                  id="ead-optin"
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-black/30"
                />
                <label htmlFor="ead-optin" className="text-sm text-[var(--texto)] leading-relaxed">
                  Avise-me assim que a Escola de Xamanismo EAD estiver disponível.
                  <span className="text-red-600"> *</span>
                </label>
              </div>

              <p className="mt-4 text-xs text-[var(--texto-fraco)]">
                Ao enviar, você autoriza contato por email e WhatsApp sobre a abertura do EAD.
              </p>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="px-5 md:px-8 py-4 bg-[rgba(254,250,224,0.96)] border-t border-black/10">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:justify-end">
            <button
              onClick={onClose}
              className="w-full md:w-auto rounded-full px-8 py-3 font-semibold border border-black/20
                         bg-black/5 hover:bg-black/10 transition text-[var(--texto)] cursor-pointer"
            >
              {success ? "Fechar" : "Cancelar"}
            </button>

            {!success && (
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="w-full md:w-auto rounded-full px-8 py-3 font-semibold text-[var(--texto)]
                         bg-[rgba(95,111,82,0.22)] border border-[rgba(95,111,82,0.35)]
                         hover:bg-[rgba(95,111,82,0.28)] transition cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[rgba(95,111,82,0.22)]"
              >
                {loading ? "Enviando..." : "Quero o desconto do lançamento"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
