import { z } from "zod";

export const eventTypes = [
  "Club",
  "Bar",
  "Plage",
  "BDE",
  "Événement privé",
  "Festival",
  "Autre",
] as const;

export const musicStyles = [
  "Rap",
  "Afro",
  "Drill",
  "Trap",
  "House",
  "DJ",
  "Showcase",
  "Je ne sais pas encore",
] as const;

export const contactSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(6, "Téléphone requis")
    .regex(/^[0-9+\s().-]{6,}$/i, "Format invalide"),
  organization: z.string().min(2, "Établissement requis"),
  eventType: z.enum(eventTypes, {
    errorMap: () => ({ message: "Sélectionnez un type" }),
  }),
  city: z.string().min(2, "Ville requise"),
  date: z.string().min(1, "Date requise"),
  budget: z.string().min(1, "Budget requis"),
  style: z.enum(musicStyles, {
    errorMap: () => ({ message: "Sélectionnez un style" }),
  }),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
