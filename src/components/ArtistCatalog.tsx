"use client";

import { motion } from "framer-motion";
import { genres } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticCTA } from "./ui/MagneticCTA";

const palettes = [
  "from-violet-neon/40 via-violet-neon/10",
  "from-pink-neon/40 via-pink-neon/10",
  "from-champagne/35 via-champagne/10",
  "from-ink-night/80 via-violet-neon/15",
  "from-pink-neon/35 via-champagne/10",
  "from-violet-neon/35 via-pink-neon/10",
  "from-champagne/30 via-violet-neon/10",
  "from-pink-neon/40 via-ink-night/40",
];

export function ArtistCatalog() {
  return (
    <section id="artistes" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Catalogue"
          title="Un réseau d’artistes pensé pour votre public."
          description="Urbain, afro, drill, trap, house, DJ sets, showcases club ou formats privés : nous sélectionnons les artistes selon votre lieu, votre audience, votre budget et votre objectif de remplissage."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {genres.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateX: -4, rotateY: 4, scale: 1.02 }}
              style={{ transformPerspective: 900 }}
              className="group relative"
            >
              <div className="hairline hairline-rotate relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink-900">
                {/* gradient backdrop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${palettes[i % palettes.length]} to-ink-950`}
                />
                {/* poster grain */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "3px 3px",
                  }}
                />
                {/* spotlight bar */}
                <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-bone/70">
                  <span>{String(i + 1).padStart(2, "0")} / {String(genres.length).padStart(2, "0")}</span>
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5">
                    {g.tag}
                  </span>
                </div>

                {/* center mark */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative">
                    <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-violet-neon/30 to-pink-neon/30 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
                    <span className="relative font-display text-3xl uppercase tracking-tight text-bone drop-shadow sm:text-4xl">
                      {g.name}
                    </span>
                  </div>
                </div>

                {/* bottom info */}
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-xs text-bone/80">
                  <span className="font-semibold uppercase tracking-[0.18em]">
                    Booking
                  </span>
                  <span className="opacity-70 transition group-hover:opacity-100">
                    Sur demande →
                  </span>
                </div>

                {/* hover glow border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition group-hover:ring-pink-neon/40" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <MagneticCTA href="#contact">
            Recevoir une sélection d’artistes
            <ArrowRight />
          </MagneticCTA>
          <p className="text-xs text-chrome/60">
            Le catalogue complet est communiqué sur demande, après brief de votre événement.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
