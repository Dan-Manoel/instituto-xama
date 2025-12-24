"use client";

const WHATSAPP_NUMBER_E164 = "5511965897744"; // DDI+DDD+número (sem + e sem espaços)
const DEFAULT_MESSAGE =
    "Olá! Tenho interesse na Escola de Saberes Ancestrais. Pode me ajudar?";

export default function WhatsappFloat({
    message = DEFAULT_MESSAGE,
}: {
    message?: string;
}) {
    const url = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="
                fixed z-50
                right-4 bottom-4
                md:right-6 md:bottom-6
                inline-flex items-center
                gap-2 md:gap-3
                rounded-full
                px-4 py-3 md:px-6 md:py-4
                bg-[--verde-mata] text-white
                shadow-[0_12px_35px_rgba(0,0,0,0.45)]
                border border-white/15
                backdrop-blur
                hover:opacity-95 hover:-translate-y-[1px]
                active:translate-y-0
                transition
                "

            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
            {/* Ícone WhatsApp (SVG leve, sem libs) */}
            <svg width="22" height="22" className="md:w-5 md:h-5">
                <path
                    d="M20.5 11.9c0 4.7-3.8 8.5-8.5 8.5-1.4 0-2.8-.3-4-.9L3.5 20.5l1-3.9c-.7-1.2-1-2.6-1-4.1C3.5 7.8 7.3 4 12 4c4.7 0 8.5 3.8 8.5 7.9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.2 9.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.3l.7 1.7c.1.2.1.5 0 .7l-.3.5c-.1.2-.1.4 0 .6.3.6 1.1 1.4 1.7 1.7.2.1.4.1.6 0l.5-.3c.2-.1.5-.1.7 0l1.7.7c.2.1.3.3.3.5v.5c0 .3 0 .5-.5.7-.7.3-2.1.5-4-.3-1.9-.9-3.6-2.8-4.3-4.7-.6-1.6-.3-2.8-.1-3.4Z"
                    fill="currentColor"
                />
            </svg>

            <span className="text-sm md:text-base font-semibold">
                WhatsApp
            </span>

        </a>
    );
}
