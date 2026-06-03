import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Probleme } from "@/components/sections/Probleme";
import { Bento } from "@/components/sections/Bento";
import { Systeme } from "@/components/sections/Systeme";
import { Offres } from "@/components/sections/Offres";
import { Apropos } from "@/components/sections/Apropos";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Bento />
        <Systeme />
        <Offres />
        <Apropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
