import BackgroundSwitcher from "./components/BackgroundSwitcher";
import HeroVideo from "./components/HeroVideo";

import QuemSomos from "./sections/QuemSomos";
import Beneficios from "./sections/Beneficios";
import Programa from "./sections/Programa";
import Modalidades from "./sections/Modalidades";
import Investimento from "./sections/Investimento";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

export default function EscolaPage() {
  return (
    <main className="relative">
      <BackgroundSwitcher />

      <section data-bg="0">
        <HeroVideo />
      </section>

      <section data-bg="0">
        <QuemSomos />
      </section>

      <section data-bg="1">
        <Beneficios />
      </section>

      <section data-bg="1">
        <Programa />
      </section>

      <section data-bg="2">
        <Modalidades />
      </section>

      <section data-bg="2">
        <Investimento />
      </section>

      <section data-bg="3">
        <FAQ />
      </section>

      <Footer />

      <WhatsappFloat message="Olá! Quero saber sobre o ESA 2026 (presencial e EAD)." />
      
    </main>
  );
}
