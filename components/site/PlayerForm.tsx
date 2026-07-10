"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { playerSchema, type PlayerFormValues } from "@/lib/schemas";
import { TextField } from "@/components/ui/form/TextField";
import { TextareaField } from "@/components/ui/form/TextareaField";
import { CheckboxField } from "@/components/ui/form/CheckboxField";
import { CheckboxGroupField } from "@/components/ui/form/CheckboxGroupField";
import { RadioGroupField } from "@/components/ui/form/RadioGroupField";
import { FormSection } from "@/components/ui/form/FormSection";

const OBJECTIVES = [
  { value: "avis", label: "Obtenir un premier avis" },
  { value: "video", label: "Faire analyser une vidéo" },
  { value: "detection", label: "Préparer une détection" },
  { value: "mental", label: "Être accompagné mentalement" },
  { value: "physique", label: "Améliorer ma préparation physique" },
  { value: "carriere", label: "Structurer mon projet carrière" },
  { value: "juridique", label: "Avis juridique / agent / contrat" },
  { value: "autre", label: "Autre" },
] as const;

const BUDGETS = [
  { value: "<100", label: "Moins de 100 €" },
  { value: "100-300", label: "100 à 300 €" },
  { value: "300-700", label: "300 à 700 €" },
  { value: "700-1500", label: "700 à 1500 €" },
  { value: ">1500", label: "Plus de 1500 €" },
  { value: "unknown", label: "Je ne sais pas encore" },
] as const;

export function PlayerForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PlayerFormValues>({
    resolver: zodResolver(playerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      country: "",
      city: "",
      position: "",
      currentClub: "",
      level: "",
      objectives: [],
      videoLink: "",
      videoDescription: "",
      email: "",
      phone: "",
      parentContact: "",
      budget: "",
      consent: undefined as unknown as true,
    },
  });

  const onSubmit = async (data: PlayerFormValues) => {
    // TODO: brancher POST /api/player (Brevo / Airtable / CRM)
    await new Promise((r) => setTimeout(r, 800));
    console.log("player submission", data);
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmittedPanel />;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 rounded-2xl border border-white/10 bg-ink-900/40 p-6 backdrop-blur-sm md:p-10"
    >
      <FormSection
        number="01"
        title="Le joueur"
        description="Ces informations permettent à l'équipe Olona de contextualiser le profil."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Prénom"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
          <TextField
            label="Nom"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
          <TextField
            label="Date de naissance"
            type="date"
            error={errors.birthDate?.message}
            {...register("birthDate")}
          />
          <TextField
            label="Pays"
            placeholder="France, Maroc, Sénégal…"
            error={errors.country?.message}
            {...register("country")}
          />
          <TextField
            label="Ville"
            error={errors.city?.message}
            {...register("city")}
          />
          <TextField
            label="Poste principal"
            placeholder="Milieu offensif, ailier gauche…"
            error={errors.position?.message}
            {...register("position")}
          />
          <TextField
            label="Club actuel"
            hint="Optionnel"
            error={errors.currentClub?.message}
            {...register("currentClub")}
          />
          <TextField
            label="Niveau actuel"
            placeholder="U17, National 3, semi-pro…"
            error={errors.level?.message}
            {...register("level")}
          />
        </div>
      </FormSection>

      <FormSection
        number="02"
        title="Votre objectif"
        description="Sélectionnez tous les besoins prioritaires. Un ou plusieurs choix possibles."
      >
        <CheckboxGroupField
          name="objectives"
          control={control}
          label="Objectifs"
          options={OBJECTIVES}
          error={errors.objectives?.message}
        />
      </FormSection>

      <FormSection
        number="03"
        title="La vidéo"
        description="Un lien vidéo aide beaucoup l'équipe Olona et les experts à évaluer objectivement."
      >
        <TextField
          label="Lien vidéo"
          type="url"
          placeholder="https://youtube.com/…"
          hint="YouTube, Vimeo, Google Drive, WeTransfer…"
          error={errors.videoLink?.message}
          {...register("videoLink")}
        />
        <TextareaField
          label="Description du match"
          placeholder="Contexte, poste joué sur la vidéo, numéro de maillot, temps de jeu…"
          error={errors.videoDescription?.message}
          {...register("videoDescription")}
        />
      </FormSection>

      <FormSection number="04" title="Contact">
        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <TextField
            label="Téléphone"
            type="tel"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <TextField
            label="Contact parent / représentant légal"
            hint="Obligatoire si le joueur est mineur"
            error={errors.parentContact?.message}
            {...register("parentContact")}
            className="md:col-span-2"
          />
        </div>
      </FormSection>

      <FormSection
        number="05"
        title="Budget indicatif"
        description="Cette indication oriente le format d'accompagnement proposé — elle n'est pas contractuelle."
      >
        <RadioGroupField
          name="budget"
          control={control}
          label="Budget"
          options={BUDGETS}
          error={errors.budget?.message}
        />
      </FormSection>

      <FormSection number="06" title="Consentement">
        <CheckboxField
          label="Je comprends qu'Olona Sport Experts ne garantit ni contrat, ni club, ni recrutement. La plateforme propose un accompagnement, de l'analyse et une mise en relation avec des experts qualifiés."
          error={errors.consent?.message}
          {...register("consent")}
        />
      </FormSection>

      <div className="flex flex-col items-start gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-widest text-surface-200/70">
          Traitement en 48 h ouvrées
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_30px_-15px_rgba(214,168,90,0.6)] transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting && (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          )}
          {isSubmitting ? "Envoi en cours…" : "Envoyer mon profil"}
        </button>
      </div>
    </form>
  );
}

function SubmittedPanel() {
  return (
    <div className="rounded-2xl border border-gold-500/25 bg-gradient-to-b from-gold-500/[0.06] to-transparent p-10 text-center md:p-14">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-400">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <h2 className="mt-6 font-display text-2xl font-semibold text-surface-50 md:text-3xl">
        Profil transmis à l'équipe Olona Sport.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-surface-200 md:text-base">
        Nous qualifions la demande, identifions le type d'expert adapté et
        revenons vers vous sous 48 h ouvrées avec une orientation claire.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-surface-50 transition hover:border-gold-500/60 hover:text-gold-400"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
