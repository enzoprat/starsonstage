import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/ui/BackgroundFX";

export const metadata: Metadata = {
  title: "Mentions légales — Stars On Stage",
  description: "Mentions légales de Stars On Stage.",
};

export default function MentionsLegales() {
  return (
    <main className="relative min-h-screen overflow-hidden text-bone">
      <BackgroundFX />
      <Header />

      <section className="container-page pt-[160px] pb-24">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-chrome/60 hover:text-bone"
        >
          ← Retour
        </Link>
        <h1 className="mt-6 font-display text-5xl uppercase tracking-tight text-gradient-neon sm:text-6xl">
          Mentions légales
        </h1>

        <div className="prose prose-invert mt-10 max-w-3xl space-y-6 text-chrome/80">
          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Éditeur du site</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Le site Stars On Stage est édité par Stars On Stage.
              Pour toute question, vous pouvez nous écrire à{" "}
              <a href="mailto:nicolas@starsonstage.fr" className="text-bone underline">
                nicolas@starsonstage.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Hébergement</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Ce site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Propriété intellectuelle</h2>
            <p className="mt-3 text-sm leading-relaxed">
              L’ensemble des contenus présents sur ce site (textes, visuels,
              identité graphique) est protégé par le droit d’auteur. Toute
              reproduction sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Responsabilité</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Les informations diffusées sur ce site sont fournies à titre
              indicatif. Stars On Stage ne saurait être tenu responsable d’une
              utilisation faite de ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Pour toute demande, écrivez-nous à{" "}
              <a href="mailto:nicolas@starsonstage.fr" className="text-bone underline">
                nicolas@starsonstage.fr
              </a>
              .
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
