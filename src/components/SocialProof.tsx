"use client";

import { partners, stats } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function SocialProof() {
  // duplicate logos for seamless marquee
  const stream = [...partners, ...partners];

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Preuve sociale</span>
          <h2 className="section-title mt-3 text-gradient-neon">
            Déjà présent sur les scènes qui comptent.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="group glass hairline hairline-rotate relative flex flex-col items-center gap-1 overflow-hidden rounded-2xl px-4 py-7 text-center transition-transform duration-500 hover:-translate-y-1">
                {/* hover gradient backdrop */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 -top-10 h-24 rounded-full bg-gradient-to-b from-violet-neon/20 via-pink-neon/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <AnimatedCounter
                  value={s.value}
                  className="relative font-display text-3xl tracking-tight text-bone sm:text-4xl md:text-[2.5rem]"
                />
                <div className="relative text-xs uppercase tracking-[0.2em] text-chrome/70">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Partners marquee */}
      <div className="relative mt-16 overflow-hidden [&:hover_.marquee-track]:[animation-play-state:paused]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

        <div className="marquee-track flex w-max animate-marquee gap-12 px-6">
          {stream.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="group relative shrink-0 select-none"
            >
              <div className="relative flex h-14 items-center gap-2 rounded-full border border-transparent px-4 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/[0.04]">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-widest text-chrome/70 transition-all duration-300 group-hover:border-pink-neon/40 group-hover:text-bone group-hover:shadow-glow-pink">
                  {p.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <span className="text-lg font-semibold uppercase tracking-[0.18em] text-chrome/60 transition-colors duration-300 group-hover:text-bone">
                  {p}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-pink-neon/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
