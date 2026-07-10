"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { expertSchema, type ExpertFormValues } from "@/lib/schemas";
import { TextField } from "@/components/ui/form/TextField";
import { TextareaField } from "@/components/ui/form/TextareaField";
import { SelectField } from "@/components/ui/form/SelectField";
import { CheckboxField } from "@/components/ui/form/CheckboxField";
import { FormSection } from "@/components/ui/form/FormSection";

const CATEGORIES = [
  { value: "ancien-pro", label: "Ancien joueur professionnel" },
  { value: "international", label: "Ancien international" },
  { value: "coach", label: "Coach expérimenté" },
  { value: "prepa-physique", label: "Préparateur physique" },
  { value: "coach-mental", label: "Coach mental" },
  { value: "analyste-video", label: "Analyste vidéo" },
  { value: "agent-fifa", label: "Agent licencié FIFA" },
  { value: "avocat", label: "Avocat du sport" },
  { value: "finance", label: "Expert finance / reconversion" },
  { value: "autre", label: "Autre expertise" },
] as const;

export function ExpertForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExpertFormValues>({
    resolver: zodResolver(expertSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      email: "",
      phone: "",
      languages: "",
      category: "",
      background: "",
      clubs: "",
      diplomas: "",
      linkedin: "",
      website: "",
      fifaLicense: "",
      barAssociation: "",
      services: "",
      pricing: "",
      availability: "",
      audience: "",
      zones: "",
      motivation: "",
      founderCircle: false,
    },
  });

  const onSubmit = async (data: ExpertFormValues) => {
    // TODO: brancher POST /api/expert (Brevo / Airtable / CRM)
    await new Promise((r) => setTimeout(r, 800));
    console.log("expert submission", data);
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
      <FormSection number="01" title="Informations personnelles">
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
            label="Pays"
            error={errors.country?.message}
            {...register("country")}
          />
          <TextField
            label="Ville"
            hint="Optionnel"
            error={errors.city?.message}
            {...register("city")}
          />
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
            label="Langues parlées"
            placeholder="Français, Anglais, Espagnol…"
            error={errors.languages?.message}
            {...register("languages")}
            className="md:col-span-2"
          />
        </div>
      </FormSection>

      <FormSection
        number="02"
        title="Profil expert"
        description="Ces éléments permettent à l'équipe Olona d'évaluer votre expertise et de valoriser votre parcours."
      >
        <SelectField
          label="Catégorie d'expertise"
          placeholder="Sélectionnez une catégorie"
          options={CATEGORIES}
          error={errors.category?.message}
          {...register("category")}
        />
        <TextareaField
          label="Parcours football"
          placeholder="Clubs, années, rôles, moments clés…"
          rows={5}
          error={errors.background?.message}
          {...register("background")}
        />
        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Clubs / structures"
            hint="Optionnel"
            error={errors.clubs?.message}
            {...register("clubs")}
          />
          <TextField
            label="Diplômes"
            hint="Optionnel"
            error={errors.diplomas?.message}
            {...register("diplomas")}
          />
          <TextField
            label="Profil LinkedIn"
            type="url"
            placeholder="https://linkedin.com/in/…"
            error={errors.linkedin?.message}
            {...register("linkedin")}
          />
          <TextField
            label="Site web"
            type="url"
            hint="Optionnel"
            error={errors.website?.message}
            {...register("website")}
          />
          <TextField
            label="Licence FIFA"
            hint="Si agent"
            error={errors.fifaLicense?.message}
            {...register("fifaLicense")}
          />
          <TextField
            label="Barreau"
            hint="Si avocat"
            error={errors.barAssociation?.message}
            {...register("barAssociation")}
          />
        </div>
      </FormSection>

      <FormSection
        number="03"
        title="Offre proposée"
        description="Vous fixez vos prix, vos disponibilités et vos missions. Olona Sport n'intervient pas dessus."
      >
        <TextareaField
          label="Type de prestations"
          placeholder="Analyse vidéo, session à distance, préparation ciblée…"
          error={errors.services?.message}
          {...register("services")}
        />
        <div className="grid gap-5 md:grid-cols-2">
          <TextField
            label="Tarifs souhaités"
            placeholder="Ex : 150 € / heure, 400 € / analyse…"
            error={errors.pricing?.message}
            {...register("pricing")}
          />
          <TextField
            label="Disponibilités"
            placeholder="Ex : 4 h / semaine"
            error={errors.availability?.message}
            {...register("availability")}
          />
          <TextField
            label="Public accompagné"
            hint="U15, U19, semi-pro, pros…"
            error={errors.audience?.message}
            {...register("audience")}
          />
          <TextField
            label="Zones d'intervention"
            hint="Pays, régions, à distance…"
            error={errors.zones?.message}
            {...register("zones")}
          />
        </div>
      </FormSection>

      <FormSection number="04" title="Positionnement">
        <TextareaField
          label="Pourquoi rejoindre Olona Sport Experts ?"
          placeholder="Motivation, valeur ajoutée, vision de l'accompagnement…"
          rows={5}
          error={errors.motivation?.message}
          {...register("motivation")}
        />
        <CheckboxField
          label="Je souhaite intégrer le cercle des Experts Fondateurs Olona Sport."
          {...register("founderCircle")}
        />
      </FormSection>

      <div className="flex flex-col items-start gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-widest text-surface-200/70">
          Réponse sous 5 jours ouvrés
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-ink-950 shadow-[0_10px_30px_-15px_rgba(214,168,90,0.6)] transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting && (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          )}
          {isSubmitting
            ? "Envoi en cours…"
            : "Envoyer ma candidature expert"}
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
        Candidature reçue.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-surface-200 md:text-base">
        L'équipe Olona Sport étudie votre profil et revient vers vous sous 5
        jours ouvrés pour planifier un échange.
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
