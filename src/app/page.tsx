import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ForWho } from "@/components/ForWho";
import { ArtistCatalog } from "@/components/ArtistCatalog";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Formats } from "@/components/Formats";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { CursorSpotlight } from "@/components/ui/Spotlight";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden text-bone">
      <BackgroundFX />
      <CursorSpotlight />
      <Header />
      <Hero />
      <SocialProof />
      <ForWho />
      <ArtistCatalog />
      <WhyUs />
      <Process />
      <Formats />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
