import Link from "next/link";
import { Logo } from "./ui/Logo";

const footerLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#artistes", label: "Artistes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06] bg-ink-900/60 backdrop-blur">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-md text-sm leading-relaxed text-chrome/70">
              Booking d’artistes pour clubs, bars, événements privés et scènes
              premium.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Clubs</span>
              <span className="chip">Bars</span>
              <span className="chip">Plages</span>
              <span className="chip">BDE</span>
              <span className="chip">Privés</span>
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Navigation</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-chrome/80 transition hover:text-bone"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:nicolas@starsonstage.fr"
                  className="text-bone transition hover:text-pink-neon"
                >
                  nicolas@starsonstage.fr
                </a>
              </li>
              <li className="text-chrome/70">France & international</li>
              <li className="text-chrome/70">Réponse sous 24h</li>
            </ul>
            <Link href="#contact" className="btn-primary mt-6">
              Demander un booking
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-chrome/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Stars On Stage. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-bone">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-bone">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
