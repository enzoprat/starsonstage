import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/ui/BackgroundFX";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Stars On Stage",
  description: "Politique de confidentialité de Stars On Stage.",
};

export default function PolitiqueConfidentialite() {
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
          Politique de confidentialité
        </h1>

        <div className="prose prose-invert mt-10 max-w-3xl space-y-6 text-chrome/80">
          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Données collectées</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Lorsque vous remplissez le formulaire de contact, nous collectons
              les informations strictement nécessaires au traitement de votre
              demande de booking : identité, coordonnées, informations relatives
              à votre événement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Utilisation</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Vos données sont utilisées uniquement pour vous répondre, vous
              proposer des artistes adaptés et organiser votre événement. Elles
              ne sont jamais revendues à des tiers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Conservation</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Les données sont conservées le temps nécessaire au traitement de
              votre demande et au suivi de la relation, puis archivées ou
              supprimées conformément aux durées légales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Vos droits</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification, d’opposition et de suppression. Pour exercer ces
              droits, écrivez-nous à{" "}
              <a href="mailto:nicolas@starsonstage.fr" className="text-bone underline">
                nicolas@starsonstage.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase text-bone">Cookies</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Ce site n’utilise pas de cookies de tracking publicitaire. Seuls
              des cookies techniques nécessaires au fonctionnement peuvent être
              déposés.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
