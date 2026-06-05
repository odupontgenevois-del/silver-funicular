import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ParallaxScroll } from "@/components/sections/ParallaxScroll";
import { Diff } from "@/components/sections/Bento";
import { Apropos } from "@/components/sections/Apropos";
import { Systeme } from "@/components/sections/Systeme";
import { Offres } from "@/components/sections/Offres";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParallaxScroll />
        <Diff />
        <Apropos />
        <Systeme />
        <Offres />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
