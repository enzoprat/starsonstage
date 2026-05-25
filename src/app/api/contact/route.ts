import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Route API de fallback.
 *
 * Le formulaire envoie actuellement **directement** vers Web3Forms côté client
 * (cf. src/components/ContactForm.tsx) — c'est la manière nominale d'utiliser
 * Web3Forms et cela évite les blocages Cloudflare anti-bot sur les appels
 * server-to-server.
 *
 * Cette route reste disponible si vous souhaitez basculer vers un provider
 * côté serveur (ex: Resend). Voir le commit history pour l'ancien wiring.
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

    // eslint-disable-next-line no-console
    console.log("[contact] payload reçu:", parsed.data);

    return NextResponse.json({
      ok: true,
      note: "Le formulaire envoie directement vers Web3Forms côté client. Cette route est en mode fallback.",
    });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
