import { z } from "zod";

const optionalString = z.string().optional().or(z.literal(""));
const optionalUrl = z
  .string()
  .url("Lien invalide")
  .optional()
  .or(z.literal(""));

export const playerSchema = z.object({
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().min(1, "Nom requis"),
  birthDate: z.string().min(1, "Date de naissance requise"),
  country: z.string().min(1, "Pays requis"),
  city: z.string().min(1, "Ville requise"),
  position: z.string().min(1, "Poste principal requis"),
  currentClub: optionalString,
  level: z.string().min(1, "Niveau actuel requis"),
  objectives: z
    .array(z.string())
    .min(1, "Sélectionnez au moins un objectif"),
  videoLink: optionalUrl,
  videoDescription: optionalString,
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Téléphone requis"),
  parentContact: optionalString,
  budget: z.string().min(1, "Sélectionnez un budget indicatif"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consentement obligatoire" }),
  }),
});

export type PlayerFormValues = z.infer<typeof playerSchema>;

export const expertSchema = z.object({
  firstName: z.string().min(1, "Prénom requis"),
  lastName: z.string().min(1, "Nom requis"),
  country: z.string().min(1, "Pays requis"),
  city: optionalString,
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Téléphone requis"),
  languages: z.string().min(1, "Langues parlées requises"),
  category: z.string().min(1, "Catégorie d'expertise requise"),
  background: z
    .string()
    .min(50, "Détaillez votre parcours (50 caractères minimum)"),
  clubs: optionalString,
  diplomas: optionalString,
  linkedin: optionalUrl,
  website: optionalUrl,
  fifaLicense: optionalString,
  barAssociation: optionalString,
  services: z.string().min(1, "Type de prestations requis"),
  pricing: z.string().min(1, "Tarifs souhaités requis"),
  availability: z.string().min(1, "Disponibilités requises"),
  audience: optionalString,
  zones: optionalString,
  motivation: z
    .string()
    .min(50, "Décrivez votre motivation (50 caractères minimum)"),
  founderCircle: z.boolean().optional(),
});

export type ExpertFormValues = z.infer<typeof expertSchema>;
