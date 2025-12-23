"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type ConsentModalProps = {
    open: boolean;
    onClose: () => void;
    checkoutUrl: string;
    titulo?: string;
};

export default function ConsentModal({
    open,
    onClose,
    checkoutUrl,
    titulo = "Termos de Participação e Consentimento",
}: ConsentModalProps) {
    const [mounted, setMounted] = useState(false);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [checked, setChecked] = useState(false);

    const nomeOk = nome.trim().length >= 3;
    const telOk = telefone.replace(/\D/g, "").length >= 10;

    const canContinue = useMemo(() => nomeOk && telOk && checked, [nomeOk, telOk, checked]);

    // garante Portal no client
    useEffect(() => setMounted(true), []);

    // trava o scroll do body quando abrir
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // reset quando abrir
    useEffect(() => {
        if (!open) return;
        setNome("");
        setTelefone("");
        setChecked(false);
    }, [open]);

    // ESC fecha
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open || !mounted) return null;

    const handleContinue = () => {
        if (!canContinue) return;
        window.open(checkoutUrl, "_blank", "noopener,noreferrer");
        onClose();
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
            {/* overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* modal */}
            <div
                className="
          relative w-full
          max-w-[44rem]  /* menor (~20%) */
          rounded-[26px]
          border border-black/10
          bg-[rgba(254,250,224,0.96)]
          shadow-2xl
          overflow-hidden
          flex flex-col
          max-h-[88vh] md:max-h-[84vh]
        "
            >
                {/* header */}
                <div className="px-5 md:px-8 pt-6 md:pt-7 pb-3">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--texto)]">
                        {titulo}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-[var(--texto-fraco)]">
                        Leia com atenção. Para continuar, preencha os dados e confirme o consentimento.
                    </p>
                </div>

                {/* conteúdo rolável (inclui texto + form) */}
                <div className="px-5 md:px-8 pb-5 overflow-y-auto flex-1">
                    <div className="rounded-2xl bg-black/5 border border-black/10 p-4 md:p-5 text-[var(--texto)]">
                        <p className="leading-relaxed">
                            A Escola de Xamanismo – Formação 2026 é um caminho formativo, vivencial e espiritual,
                            voltado ao estudo dos Saberes Ancestrais, do xamanismo e dos processos de
                            autoconhecimento, integração e expansão da consciência.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            As vivências propostas possuem caráter educacional e experiencial, não substituindo
                            tratamentos médicos, psicológicos ou psiquiátricos. A formação não realiza diagnósticos
                            nem prescrições, respeitando os limites éticos entre espiritualidade, cuidado e ciência.
                        </p>

                        <h3 className="mt-6 font-semibold">Rituais e Medicinas da Floresta</h3>
                        <p className="leading-relaxed">
                            Alguns módulos poderão incluir vivências rituais com medicinas da floresta, sempre
                            conduzidas com respeito, ética, responsabilidade e critérios de segurança.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            A participação nessas vivências é opcional e acontece somente após o preenchimento
                            de uma anamnese cuidadosa, analisada pela equipe responsável.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            Em alguns casos, por cuidado e segurança, o aluno poderá ser orientado a não participar
                            de determinada vivência, mantendo-se plenamente integrado à formação nos demais conteúdos.
                        </p>

                        <h3 className="mt-6 font-semibold">Caminho com Consciência</h3>
                        <p className="leading-relaxed">
                            Cada aluno é convidado a caminhar com autonomia, escuta interna e responsabilidade,
                            respeitando seus limites físicos, emocionais e espirituais.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            A Escola de Xamanismo oferece condução, suporte e presença ao longo da jornada,
                            reconhecendo que o verdadeiro processo de transformação acontece na relação íntima
                            de cada pessoa consigo mesma.
                        </p>

                        <h3 className="mt-6 font-semibold">Comunidade, Bônus e Acompanhamento</h3>
                        <p className="leading-relaxed">
                            Ao ingressar na Formação 2026, o aluno passa a fazer parte da Família ESA.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            Como aluno da Escola de Xamanismo, você terá acesso ao Portal ESA e à Comunidade,
                            um espaço vivo de troca, apoio e crescimento contínuo, além de participação no grupo
                            fechado de WhatsApp da turma ESA 2026.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            O aluno também poderá participar de encontros online exclusivos, mentorias,
                            acompanhamentos e aprofundamentos oferecidos ao longo da jornada formativa.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            Como bônus especial, o aluno terá acesso à mentoria com Thaty Tambor para a criação
                            do Oráculo Pessoal, a partir de um processo intuitivo e autoral, inspirado em sua
                            experiência de criação e nos fundamentos que sustentam essa construção.
                        </p>

                        <h3 className="mt-6 font-semibold">Política de Cancelamento e Reembolso</h3>
                        <p className="leading-relaxed">
                            Ao realizar a matrícula, o aluno declara estar ciente de que a Formação da Escola de
                            Xamanismo possui caráter anual, com metodologia progressiva e conteúdos interdependentes.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            O aluno poderá desistir da formação em até 7 (sete) dias após a realização do pagamento
                            inicial, conforme previsto em lei, podendo optar por reembolso integral ou crédito para
                            turma futura.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            Após esse prazo, não haverá reembolso dos valores pagos. O cancelamento após o início
                            da formação não gera direito a reembolso nem à suspensão das parcelas vincendas.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            O aluno poderá transferir sua vaga para outra pessoa, desde que não haja fins comerciais,
                            permanecendo o vínculo contratual com o titular original.
                        </p>

                        <h3 className="mt-6 font-semibold">Ausência em Módulos ou Aulas</h3>
                        <p className="leading-relaxed">
                            No formato presencial, a ausência deverá ser comunicada com antecedência mínima de
                            7 dias, podendo haver reposição conforme disponibilidade. No formato EAD, o aluno
                            mantém acesso às aulas gravadas pelo período contratado.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            A ausência em aulas ou módulos não isenta o aluno do pagamento integral da formação,
                            por se tratar de um percurso anual e não de módulos avulsos.
                        </p>

                        <h3 className="mt-6 font-semibold">Consentimento</h3>
                        <p className="leading-relaxed">
                            Ao realizar sua matrícula, o aluno declara estar ciente da proposta da formação e
                            participa de forma livre, consciente e responsável, acolhendo a jornada como um
                            caminho de aprendizado, integração e crescimento.
                        </p>
                    </div>


                    {/* formulário */}
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="text-sm font-medium text-[var(--texto)]">
                                Nome completo <span className="text-red-600">*</span>
                            </label>
                            <input
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite seu nome"
                                className="mt-2 w-full rounded-2xl bg-white/60 border border-black/15 px-4 py-3 text-[var(--texto)]
                           placeholder:text-[var(--texto-fraco)] focus:outline-none focus:ring-2 focus:ring-black/20"
                            />
                            {!nomeOk && nome.length > 0 && (
                                <p className="mt-2 text-xs text-red-600">Informe seu nome completo.</p>
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
                            id="consent"
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-black/30"
                        />
                        <label htmlFor="consent" className="text-sm text-[var(--texto)] leading-relaxed">
                            Declaro que li e estou ciente dos Termos de Participação e Responsabilidade.
                            <span className="text-red-600"> *</span>
                        </label>
                    </div>

                    <p className="mt-5 text-xs text-[var(--texto-fraco)]">
                        * Consulte taxas do parcelamento. Pagamento em ambiente seguro. Você será redirecionado para concluir a inscrição.
                    </p>
                </div>

                {/* footer (sempre visível) */}
                <div className="px-5 md:px-8 py-4 bg-[rgba(254,250,224,0.96)] border-t border-black/10">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:justify-end">
                        <button
                            onClick={onClose}
                            className="w-full md:w-auto rounded-full px-8 py-3 font-semibold border border-black/20
                         bg-black/5 hover:bg-black/10 transition text-[var(--texto)] cursor-pointer"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={handleContinue}
                            disabled={!canContinue}
                            className="w-full md:w-auto rounded-full px-8 py-3 font-semibold text-[var(--texto)]
                         bg-[rgba(95,111,82,0.22)] border border-[rgba(95,111,82,0.35)]
                         hover:bg-[rgba(95,111,82,0.28)] transition cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[rgba(95,111,82,0.22)]"
                        >
                            Continuar para pagamento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}
