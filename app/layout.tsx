import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instituto Xamã — Portal em construção",
  description: "Novo portal do Instituto Xamã em preparação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header className="topbar">
          <div className="wrap">
            <div className="brand">
              {/* Ajuste o caminho do logo conforme o arquivo que você tiver em /public */}
              <img
                src="/logo.png"
                alt="Logo Instituto Xamã"
                className="brand-logo"
              />
              <span className="brand-name">INSTITUTO XAMÃ</span>
            </div>

            <span className="topbar-pill">SITE EM CONSTRUÇÃO</span>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
