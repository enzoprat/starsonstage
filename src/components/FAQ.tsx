"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";
import { SectionHeader } from "./ui/SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          title="Vos questions, nos réponses."
          description="Tout ce qu’il faut savoir avant de lancer votre demande de booking."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="glass hairline relative overflow-hidden rounded-3xl">
            <ul className="divide-y divide-white/[0.06]">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-white/[0.02] sm:px-7 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg uppercase tracking-tight text-bone sm:text-xl">
                        {item.q}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-chrome/80 sm:px-7 sm:pb-7 sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
