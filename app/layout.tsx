import "./globals.css";
import type { Metadata } from "next";
import TopbarPill from "./TopbarPill";

export const metadata: Metadata = {
  title: "Instituto Xamã",
  description: "Portal do Instituto Xamã.",
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
              <img
                src="/logo.png"
                alt="Logo Instituto Xamã"
                className="brand-logo"
              />
              <span className="brand-name">INSTITUTO XAMÃ</span>
            </div>

            <TopbarPill />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
