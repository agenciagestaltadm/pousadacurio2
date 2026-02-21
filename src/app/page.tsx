import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { Hero } from "@/sections/Hero";
import { Posicionamento } from "@/sections/Posicionamento";
import { Acomodacoes } from "@/sections/Acomodacoes";
import { Estrutura } from "@/sections/Estrutura";
import { Galeria } from "@/sections/Galeria";
import { Historia } from "@/sections/Historia";
import { Depoimentos } from "@/sections/Depoimentos";
import { Oferta } from "@/sections/Oferta";
import { Contato } from "@/sections/Contato";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Posicionamento />
      <Acomodacoes />
      <Estrutura />
      <Galeria />
      <Historia />
      <Depoimentos />
      <Oferta />
      <Contato />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </main>
  );
}
