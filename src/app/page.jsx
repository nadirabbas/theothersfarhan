import { Header, Footer } from "@/components/common";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Graphics } from "@/components/sections/Graphics";
import { SocialLinks } from "@/components/sections/SocialLinks";
import {FAQ} from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#111]">
        <Hero />
        <Services />
        <Graphics />
        <About />
        <SocialLinks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
