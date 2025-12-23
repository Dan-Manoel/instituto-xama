import SectionWrapper from "../components/SectionWrapper";

type Depoimento = {
  nome: string;
  frase: string;
  youtubeUrl: string;
  foto: string;
  instagramUrl: string;
  instagramHandle?: string;
};

const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Cris Lovis",
    frase:
      "Eu consegui me conectar comigo mesma em um nível que eu não tenho como explicar",
    youtubeUrl: "https://www.youtube.com/watch?v=TDp6EyILq0c",
    instagramUrl: "https://www.instagram.com/cris.lovis/",
    instagramHandle: "@cris.lovis",
    foto: "/escola/depoimentos/aluno-1.jpg",
  },
  {
    nome: "Vanessa Stringher",
    frase:
      "Encontrei novas portas, novas perspectivas e o meu propósito. Então só tenho a agradeçer",
    youtubeUrl: "https://www.youtube.com/watch?v=TrIPIA3fCP8&t=2s",
    instagramUrl: "https://www.instagram.com/vanessa.stringher/",
    instagramHandle: "@vanessa.stringher",
    foto: "/escola/depoimentos/aluno-2.jpg",
  },
  {
    nome: "Lauro Wagnitz",
    frase:
      "O que esse ano me trouxe de acesso a espiritualidade é indescritível.",
    youtubeUrl: "https://www.youtube.com/watch?v=yssOmpZ-XFk",
    instagramUrl: "https://www.instagram.com/laurowag/",
    instagramHandle: "@laurowag",
    foto: "/escola/depoimentos/aluno-3.jpg",
  },
];

export default function Modalidades() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Modalidades
      </h2>

      {/* MODALIDADES */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-sm">
          <h3 className="text-xl font-medium">Presencial</h3>
          <p className="mt-3 opacity-95 leading-relaxed">
            Encontros em grupo, vivências rituais e práticas guiadas, com suporte
            direto da equipe e aprofundamento vivencial em cada módulo.
          </p>
          <ul className="mt-4 space-y-2 opacity-95 list-disc pl-5">
            <li>Vivências ao vivo e práticas em campo</li>
            <li>Condução e acompanhamento de jornada</li>
            <li>Integração em comunidade presencial</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-sm">
          <h3 className="text-xl font-medium">Online (EAD)</h3>
          <p className="mt-3 opacity-95 leading-relaxed">
            Formação estruturada na plataforma <strong>Astron Members</strong>,
            acessada pelo Portal da Escola com usuário e senha. Conteúdos
            liberados por módulo, conforme cronograma.
          </p>
          <ul className="mt-4 space-y-2 opacity-95 list-disc pl-5">
            <li>Aulas majoritariamente gravadas (no seu ritmo)</li>
            <li>No mínimo 5 encontros ao vivo para orientações e aprofundamentos</li>
            <li>Acesso ao conteúdo por 18 meses</li>
            <li>Comunidade e suporte durante a jornada</li>
          </ul>
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Depoimentos
        </h2>
        <p className="mt-4 text-center text-lg opacity-95">
          Histórias reais de quem viveu o caminho. Assista aos depoimentos.
        </p>

        {/* MOBILE: carrossel */}
        <div className="mt-10 md:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {DEPOIMENTOS.map((d, idx) => (
              <div
                key={idx}
                className="min-w-[86%] snap-start rounded-2xl bg-white/10 backdrop-blur-xl p-6 border border-white/20 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={d.foto}
                    alt={`Foto de ${d.nome}`}
                    className="h-14 w-14 rounded-xl object-cover border border-white/20"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{d.nome}</div>
                    <a
                      href={d.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm opacity-85 hover:opacity-100 underline underline-offset-4"
                    >
                      {d.instagramHandle ?? "Instagram"}
                    </a>
                  </div>
                </div>

                <p className="mt-4 opacity-95 leading-relaxed">“{d.frase}”</p>

                <div className="mt-6">
                  <a
                    href={d.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-white text-center
                    bg-white/10 backdrop-blur-xl border border-white/20
                    hover:bg-white/20 hover:-translate-y-[1px]
                    active:translate-y-0 transition w-full inline-block"
                  >
                    Ver depoimento no YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: grid */}
        <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4">
                <img
                  src={d.foto}
                  alt={`Foto de ${d.nome}`}
                  className="h-14 w-14 rounded-xl object-cover border border-white/20"
                />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{d.nome}</div>
                  <a
                    href={d.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm opacity-85 hover:opacity-100 underline underline-offset-4"
                  >
                    {d.instagramHandle ?? "Instagram"}
                  </a>
                </div>
              </div>

              <p className="mt-4 opacity-95 leading-relaxed flex-1">“{d.frase}”</p>

              <div className="mt-6">
                <a
                  href={d.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white text-center
                  bg-white/10 backdrop-blur-xl border border-white/20
                  hover:bg-white/20 hover:-translate-y-[1px]
                  active:translate-y-0 transition w-full inline-block"
                >
                  Ver depoimento no YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-center opacity-80">
          Você será redirecionado para o YouTube para assistir aos depoimentos.
        </p>
      </div>
    </SectionWrapper>
  );
}
