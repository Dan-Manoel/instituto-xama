// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Instituto Xamã — Portal em construção',
  description:
    'Em breve, um novo portal para a escola de saberes ancestrais, tambores xamânicos, terapias integrativas e rituais com medicinas da floresta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
