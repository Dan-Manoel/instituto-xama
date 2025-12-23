export const metadata = {
  title: "Escola de Xamanismo | Instituto Xamã",
  description: "Formação em Xamanismo, vivências e saberes ancestrais.",
};

export default function EscolaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      {children}
    </div>
  );
}
