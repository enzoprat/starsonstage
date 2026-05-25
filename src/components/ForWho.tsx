"use client";

import { motion } from "framer-motion";
import { audiences } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { audienceIcons } from "./ui/Icons";

export function ForWho() {
  return (
    <section id="evenements" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pour qui"
          title="Un booking adapté à chaque format d’événement."
          description="Chaque lieu, chaque public, chaque date a sa propre logique. Nous adaptons l’artiste, le format et le moment à votre événement."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[a.icon as keyof typeof audienceIcons];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="glass hairline relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1">
                  {/* Glow hover */}
                  <div className="pointer-events-none absolute -inset-x-10 -top-20 h-40 bg-gradient-to-b from-violet-neon/15 via-pink-neon/8 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-neon/20 to-pink-neon/15 text-bone ring-1 ring-white/10">
                      <Icon />
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-bone">
                      {a.title}
                    </h3>
                  </div>

                  <p className="relative mt-5 text-sm leading-relaxed text-chrome/75">
                    {a.description}
                  </p>

                  <div className="relative mt-7 flex items-center justify-between">
                    <span className="chip border-white/15 bg-white/[0.04] text-bone/90">
                      Booking sur mesure
                    </span>
                    <span className="text-chrome/40 transition group-hover:translate-x-1 group-hover:text-bone">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
