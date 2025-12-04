export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 opacity-90">
        <p>Instituto Xamã. Escola de Xamanismo.</p>

        <div className="flex gap-4">
          <a
            href="https://instagram.com/institutoxama"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5511965897744"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
