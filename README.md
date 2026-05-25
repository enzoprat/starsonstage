# Stars On Stage

Landing page premium pour Stars On Stage, agence de booking d'artistes (rap, afro, drill, trap, house, DJ, showcases) pour clubs, bars, plages, BDE, événements privés, festivals et corporate.

Stack : **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod**.

---

## Démarrer

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev

# 3. Build production
npm run build

# 4. Démarrer en production
npm start
```

Le site est servi sur [http://localhost:3000](http://localhost:3000).

---

## Architecture

```
starsonstage/
├── public/
│   ├── og-starsonstage.svg     ← image Open Graph (à remplacer par .jpg si besoin)
│   └── assets/                  ← placez ici vos visuels (artistes, partenaires…)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← fonts, métadonnées globales, SEO
│   │   ├── page.tsx             ← landing page (assemblage des sections)
│   │   ├── globals.css          ← Tailwind + tokens visuels (glow, glass, hairline…)
│   │   ├── mentions-legales/
│   │   ├── politique-confidentialite/
│   │   └── api/contact/route.ts ← API route formulaire (à brancher Resend/Web3Forms)
│   │
│   ├── components/
│   │   ├── Header.tsx           ← sticky, glassmorphism au scroll
│   │   ├── Hero.tsx             ← H1, CTAs, badges, cards flottantes
│   │   ├── SocialProof.tsx      ← stats + marquee partenaires
│   │   ├── ForWho.tsx           ← cards "Pour qui ?"
│   │   ├── ArtistCatalog.tsx    ← grille genres style "artist wall"
│   │   ├── WhyUs.tsx            ← 4 blocs valeur
│   │   ├── Process.tsx          ← timeline 4 étapes
│   │   ├── Formats.tsx          ← 4 formats avec visuels abstraits
│   │   ├── FAQ.tsx              ← accordéon animé
│   │   ├── ContactForm.tsx      ← formulaire RHF + Zod
│   │   ├── Footer.tsx
│   │   └── ui/                  ← Logo, Reveal, SectionHeader, Spotlight, BackgroundFX, Icons
│   │
│   ├── data/content.ts          ← contenu structuré (FAQ, partenaires, valeurs…)
│   └── lib/
│       ├── schema.ts            ← schéma Zod du formulaire
│       └── utils.ts             ← helper cn() pour classNames
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Formulaire de contact (Web3Forms)

Le formulaire envoie **directement** vers l'API Web3Forms côté client (c'est la manière nominale d'utiliser Web3Forms et cela évite les blocages Cloudflare sur les appels server-to-server).

### Variable d'env requise

```bash
# .env.local (local) — et également dans Vercel → Settings → Environment Variables
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=votre-cle-web3forms
```

Le préfixe `NEXT_PUBLIC_` est **obligatoire** pour que la clé soit accessible côté navigateur. La clé Web3Forms est conçue pour être publique — elle identifie l'inbox de destination, pas un compte sensible.

L'inbox de destination est configurée directement dans le dashboard Web3Forms (email : **nicolas@starsonstage.fr**).

### Basculer vers un provider serveur (Resend, SMTP…)

Si vous préférez envoyer les emails depuis le serveur (ex: pour ajouter un anti-spam custom), la route [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) est laissée en place comme point d'entrée prêt à brancher Resend ou similaire. Voir les commits précédents pour un exemple de wiring server-side.

---

## Déploiement Vercel

1. Push le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), cliquer **Add New → Project** et importer le repo.
3. Framework détecté automatiquement : **Next.js**. Aucune variable obligatoire pour la première mise en ligne.
4. Ajouter les variables d'env (`RESEND_API_KEY` ou `WEB3FORMS_ACCESS_KEY`) si vous activez l'envoi email.
5. **Deploy**.

Le domaine `starsonstage.fr` peut être branché ensuite dans **Settings → Domains**.

---

## Direction artistique

- Fond `#050505`, dégradés `violet #8B5CF6 → rose néon #EC4899 → champagne #D6B56D`.
- Typographies : **Bebas Neue** (display) + **Inter** (texte), chargées via `next/font`.
- Effets : glassmorphism, hairline gradient, halos de scène, spotlight curseur, marquee logos, scroll reveal, hover 3D, accordéon FAQ.

---

## À personnaliser

- Remplacer `public/og-starsonstage.svg` par une image `.jpg` 1200×630 finalisée si besoin (et ajuster les chemins dans `src/app/layout.tsx`).
- Ajouter les vrais logos partenaires dans `src/data/content.ts` (et leurs visuels dans `public/assets/`).
- Brancher le provider email dans `src/app/api/contact/route.ts`.
- Ajouter un favicon personnalisé : `public/favicon.ico`.

---

© Stars On Stage. Tous droits réservés.
