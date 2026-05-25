import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact API route.
 *
 * To wire to a real email provider, choose one:
 *
 *  1) Resend (https://resend.com)
 *     - Install: `npm i resend`
 *     - Set env var RESEND_API_KEY
 *     - Replace the TODO section below with:
 *
 *     import { Resend } from "resend";
 *     const resend = new Resend(process.env.RESEND_API_KEY!);
 *     await resend.emails.send({
 *       from: "Stars On Stage <booking@starsonstage.fr>",
 *       to: ["nicolas@starsonstage.fr"],
 *       subject: `Nouvelle demande — ${data.organization}`,
 *       replyTo: data.email,
 *       text: emailBody(data),
 *     });
 *
 *  2) Web3Forms (no SDK)
 *     - Set env var WEB3FORMS_ACCESS_KEY
 *     - Replace the TODO section with:
 *
 *     await fetch("https://api.web3forms.com/submit", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({
 *         access_key: process.env.WEB3FORMS_ACCESS_KEY,
 *         subject: `Nouvelle demande — ${data.organization}`,
 *         from_name: `${data.firstName} ${data.lastName}`,
 *         email: data.email,
 *         message: emailBody(data),
 *       }),
 *     });
 *
 *  3) Any SMTP / API of your choice — same idea.
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // TODO: brancher ici votre provider d’envoi (Resend, Web3Forms, SMTP…).
    // Pour le moment, on log côté serveur en attendant la connexion.
    // eslint-disable-next-line no-console
    console.log("[contact] nouvelle demande:", {
      from: `${data.firstName} ${data.lastName} <${data.email}>`,
      organization: data.organization,
      eventType: data.eventType,
      city: data.city,
      date: data.date,
      budget: data.budget,
      style: data.style,
      message: data.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 },
    );
  }
}

// Utilitaire prêt à l’emploi pour formater le corps de l’email
// quand vous brancherez Resend / Web3Forms / SMTP.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function emailBody(d: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  eventType: string;
  city: string;
  date: string;
  budget: string;
  style: string;
  message?: string;
}) {
  return [
    `Prénom : ${d.firstName}`,
    `Nom : ${d.lastName}`,
    `Email : ${d.email}`,
    `Téléphone : ${d.phone}`,
    `Organisation : ${d.organization}`,
    `Type d'événement : ${d.eventType}`,
    `Ville : ${d.city}`,
    `Date : ${d.date}`,
    `Budget : ${d.budget}`,
    `Style : ${d.style}`,
    `Message : ${d.message || "(vide)"}`,
  ].join("\n");
}
