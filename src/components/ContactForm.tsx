"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, eventTypes, musicStyles, type ContactInput } from "@/lib/schema";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setErrorMsg(null);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error(
          "Clé Web3Forms manquante. Définissez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
        );
      }

      const fd = new FormData();
      fd.append("access_key", accessKey);
      fd.append(
        "subject",
        `Nouvelle demande de booking — ${data.organization} (${data.eventType})`,
      );
      fd.append("from_name", `${data.firstName} ${data.lastName}`);
      fd.append("email", data.email);
      fd.append("replyto", data.email);
      fd.append("Prénom", data.firstName);
      fd.append("Nom", data.lastName);
      fd.append("Téléphone", data.phone);
      fd.append("Organisation", data.organization);
      fd.append("Type d'événement", data.eventType);
      fd.append("Ville", data.city);
      fd.append("Date", data.date);
      fd.append("Budget", data.budget);
      fd.append("Style recherché", data.style);
      fd.append(
        "message",
        [
          `Prénom : ${data.firstName}`,
          `Nom : ${data.lastName}`,
          `Email : ${data.email}`,
          `Téléphone : ${data.phone}`,
          `Organisation : ${data.organization}`,
          `Type d'événement : ${data.eventType}`,
          `Ville : ${data.city}`,
          `Date : ${data.date}`,
          `Budget : ${data.budget}`,
          `Style : ${data.style}`,
          `Message : ${data.message || "(vide)"}`,
        ].join("\n"),
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result?.success === false) {
        throw new Error(result?.message || "Erreur lors de l’envoi");
      }
      setStatus("success");
      reset();
    } catch (e: unknown) {
      setStatus("error");
      const msg = e instanceof Error ? e.message : "Une erreur est survenue.";
      setErrorMsg(msg);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title="Parlez-nous de votre événement."
          description="Décrivez votre lieu, votre date, votre budget et le type d’artiste recherché. L’équipe Stars On Stage vous répond rapidement avec des pistes adaptées."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Side info */}
          <div className="glass hairline relative flex flex-col justify-between overflow-hidden rounded-3xl p-8">
            <div>
              <span className="eyebrow">Directement</span>
              <h3 className="mt-3 font-display text-3xl uppercase tracking-tight text-bone">
                Une équipe, une réponse rapide.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-chrome/75">
                Chaque demande est étudiée individuellement. Nous revenons vers
                vous sous 24h avec une première sélection cohérente avec votre
                événement.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:nicolas@starsonstage.fr"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-pink-neon/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-neon/30 to-pink-neon/20 text-bone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-chrome/60">
                    Email
                  </div>
                  <div className="font-semibold text-bone group-hover:text-pink-neon">
                    nicolas@starsonstage.fr
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <Stat label="Réponse" value="< 24h" />
                <Stat label="Zones" value="FR / INT" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass-strong hairline relative overflow-hidden rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Prénom" error={errors.firstName?.message}>
                <input
                  type="text"
                  autoComplete="given-name"
                  className={inputCls(!!errors.firstName)}
                  {...register("firstName")}
                />
              </Field>
              <Field label="Nom" error={errors.lastName?.message}>
                <input
                  type="text"
                  autoComplete="family-name"
                  className={inputCls(!!errors.lastName)}
                  {...register("lastName")}
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  className={inputCls(!!errors.email)}
                  {...register("email")}
                />
              </Field>
              <Field label="Téléphone" error={errors.phone?.message}>
                <input
                  type="tel"
                  autoComplete="tel"
                  className={inputCls(!!errors.phone)}
                  {...register("phone")}
                />
              </Field>

              <Field
                label="Établissement / organisation"
                className="sm:col-span-2"
                error={errors.organization?.message}
              >
                <input
                  type="text"
                  className={inputCls(!!errors.organization)}
                  {...register("organization")}
                />
              </Field>

              <Field label="Type d’événement" error={errors.eventType?.message}>
                <select
                  className={inputCls(!!errors.eventType)}
                  defaultValue=""
                  {...register("eventType")}
                >
                  <option value="" disabled>
                    Sélectionnez
                  </option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Ville" error={errors.city?.message}>
                <input
                  type="text"
                  autoComplete="address-level2"
                  className={inputCls(!!errors.city)}
                  {...register("city")}
                />
              </Field>

              <Field label="Date souhaitée" error={errors.date?.message}>
                <input
                  type="date"
                  className={inputCls(!!errors.date)}
                  {...register("date")}
                />
              </Field>

              <Field label="Budget approximatif" error={errors.budget?.message}>
                <input
                  type="text"
                  placeholder="Ex : 3000 — 8000 €"
                  className={inputCls(!!errors.budget)}
                  {...register("budget")}
                />
              </Field>

              <Field
                label="Style recherché"
                className="sm:col-span-2"
                error={errors.style?.message}
              >
                <select
                  className={inputCls(!!errors.style)}
                  defaultValue=""
                  {...register("style")}
                >
                  <option value="" disabled>
                    Sélectionnez
                  </option>
                  {musicStyles.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Informations supplémentaires"
                className="sm:col-span-2"
                error={errors.message?.message}
              >
                <textarea
                  rows={4}
                  placeholder="Capacité du lieu, horaires, artistes envisagés, références…"
                  className={cn(inputCls(!!errors.message), "min-h-[120px] resize-y")}
                  {...register("message")}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-chrome/60">
                En envoyant, vous acceptez que nous vous recontactions au sujet
                de votre demande.
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary min-w-[180px] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Spinner />
                    Envoi…
                  </>
                ) : (
                  <>
                    Envoyer la demande
                    <Arrow />
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 flex items-center gap-3 rounded-2xl border border-pink-neon/30 bg-pink-neon/5 px-5 py-4 text-sm text-bone"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-neon to-pink-neon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2 7.5l3 3 7-7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Demande envoyée. Nous revenons vers vous sous 24h.
                </motion.div>
              ) : null}
              {status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/5 px-5 py-4 text-sm text-red-200"
                >
                  {errorMsg ?? "Erreur lors de l’envoi. Réessayez ou écrivez-nous directement."}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "block w-full rounded-2xl border bg-ink-900/60 px-4 py-3 text-sm text-bone outline-none transition placeholder:text-chrome/40",
    "border-white/10 focus:border-pink-neon/60 focus:ring-2 focus:ring-pink-neon/20",
    hasError && "border-red-400/60 focus:border-red-400 focus:ring-red-400/20",
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="text-xs uppercase tracking-[0.2em] text-chrome/60">
        {label}
      </span>
      {children}
      {error ? (
        <span className="text-xs text-red-300/90">{error}</span>
      ) : null}
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <div className="text-xs uppercase tracking-[0.2em] text-chrome/60">
        {label}
      </div>
      <div className="mt-1 font-display text-xl text-bone">{value}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
