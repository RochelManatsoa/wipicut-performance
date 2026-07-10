# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site vitrine premium pour **Olona Sport Experts** — **cabinet international de développement des sportifs** (PAS marketplace, PAS simple plateforme). Réseau international d'experts sportifs vérifiables (anciens pros, internationaux, coachs, préparateurs physiques, coachs mentaux, analystes vidéo, agents FIFA, avocats du sport, experts finance/reconversion), soutenu par la techno propriétaire d'analyse vidéo **Wipicut (multisports)** et une équipe interne avec 20+ ans d'expérience.

**Signature à graver** — « Vous apportez votre expertise. Nous développons votre activité. »

**Vocabulaire imposé** : « cabinet international », « réseau international », « partenaire de développement », « écosystème de croissance », « infrastructure ». **Bannir** : « marketplace ». **Minimiser** : « plateforme » (uniquement dans la mention légale du footer, qui est du wording juridique figé).

## Stack

- **Next.js 15.5.19** (App Router) + **TypeScript 5** + **React 18.3**
- **Tailwind CSS 3.4** avec palette Olona (voir `tailwind.config.ts`)
- **next/font/google** : `Inter` (`--font-sans`) + `Sora` (`--font-display`)
- **Framer Motion**, **react-hook-form** + **zod**, **lucide-react**, **clsx**
- Formulaires côté client avec validation, connectés à une API interne (à défaut : Brevo / Airtable / Notion / CRM)
- Prévoir intégration future : paiement sécurisé, upload vidéo, dashboard expert, espace client, tracking (GA / Meta Pixel / LinkedIn Insight Tag)

## Déploiement — cible o2switch

- **Runtime Node.js 20.20.2** (voir `.nvmrc` + `engines` dans `package.json`).
- Hébergement o2switch (cPanel / Passenger). **Ne pas** réintroduire les patterns OVH (`output: "export"`, `server.js` custom Express, `package.deploy.json`).
- `next.config.ts` utilise `output: "standalone"` — Next génère `.next/standalone/server.js` + node_modules minimal, à copier dans l'Application root cPanel.
- **Flow manuel git-based** : repo cloné côté serveur dans `~/src/wipicut-performance`, build via SSH avec la venv Node activée, puis `scripts/deploy-to-app.sh` copie le bundle vers `/home/mast9834/apps/wipicut-performance` et touche `tmp/restart.txt`.
- Pas de CI/CD : chaque déploiement est déclenché à la main en SSH. Détail complet dans **`DEPLOY.md`**.

## Commandes

```bash
npm run dev        # dev server
npm run build      # build production
npm run start      # next start (prod)
npm run lint       # ESLint
```

## Architecture

### Pages (routes)

1. `/` — Accueil
2. `/joueurs-parents` — Joueurs & Parents
3. `/experts` — Experts
4. `/accompagnements` — Offres détaillées
5. `/deposer-profil` — Formulaire joueur
6. `/devenir-expert-fondateur` — Formulaire expert
7. `/contact`

**MVP V1 prioritaire** : Accueil, Déposer un profil joueur, Devenir Expert Fondateur.

### Composants réutilisables

`Header`, `Footer`, `Hero`, `CTAButton`, `ExpertCategoryCard`, `ProcessSteps`, `OfferCard`, `TrustBlock`, `FAQAccordion`, `PlayerForm`, `ExpertForm`, `VideoAnalysisSection`, `ParentSection`, `ExpertRecruitmentSection`, `TestimonialBlock` (placeholder), `PartnerLogos` (placeholder).

Structurer en `components/` (UI réutilisable) + `sections/` (sections de page composées).

### Deux parcours principaux

1. **Parcours client** : déposer un profil joueur / faire analyser un match.
2. **Parcours expert** : devenir Expert Fondateur.

Chaque page doit converger vers un CTA de l'un de ces deux parcours.

## Direction artistique

Palette (Tailwind config à générer à partir de ces tokens) :

| Token | Hex |
|-------|-----|
| Noir profond | `#0B0F14` |
| Bleu nuit | `#101A2B` |
| Blanc cassé | `#F5F7FA` |
| Gris clair | `#AAB2C0` |
| Or premium | `#D6A85A` |
| Vert terrain | `#1E7A46` |

- Base **sombre premium**, l'or utilisé **avec modération** (accents, hover, séparateurs fins).
- Typographies candidates : `Inter`, `Manrope`, `Sora`, `Plus Jakarta Sans`. Titres gras et impactants, paragraphes aérés.
- Style : grandes sections aérées, cartes premium, dégradés sombres subtils, bordures fines, pictogrammes simples, hover élégants.
- **Éviter** : icônes cartoon, couleurs criardes, photos génériques, esthétique "startup flashy" ou "coaching amateur".

## Positionnement — règles éditoriales strictes

Olona Sport Experts **ne promet pas** de contrat, de club ou de signature. Le cabinet apporte de l'**analyse**, de l'**expertise humaine** et un **cadre sécurisé** — avec l'infrastructure (marketing, techno Wipicut, support opérationnel) qui développe l'activité des experts et facilite l'accès des sportifs à la bonne expertise.

Différenciateur clé : **cabinet / partenaire de développement**, PAS mise en relation transactionnelle.

Signature client : **« Le bon expert, au bon moment du parcours. »**
Signature expert : **« Vous apportez votre expertise. Nous développons votre activité. »**

### CTA à utiliser

- Déposer un profil joueur
- Faire analyser mon match
- Obtenir un premier avis expert
- Obtenir un avis fiable pour mon enfant
- Devenir Expert Fondateur
- Rejoindre le cercle des experts
- Valoriser mon expertise
- Planifier un échange avec Olona Sport

### CTA / formulations à bannir

- « Contactez-nous », « S'inscrire »
- « Deviens pro », « Trouve un club », « Fais-toi repérer »
- « Booste ta carrière », « Garantie de réussite », « On va te faire signer »

### Ton rédactionnel

Premium, direct, professionnel, rassurant, ambitieux, sobre, crédible. Préférer :
« Structurer votre parcours », « Obtenir un avis expert », « Faire analyser votre match », « Identifier le bon accompagnement », « Accéder à des experts vérifiables », « Sécuriser les décisions importantes ».

## Contraintes formulaires

### Formulaire joueur (`PlayerForm`)

Sections : Informations joueur, Objectif (multi-select), Vidéo (lien + upload + description + poste joué + n° maillot), Contact (+ parent obligatoire si mineur), Budget indicatif, **Consentement obligatoire** :

> « Je comprends qu'Olona Sport Experts ne garantit ni contrat, ni club, ni recrutement. La plateforme propose un accompagnement, de l'analyse et une mise en relation avec des experts qualifiés. »

CTA : **Envoyer mon profil**.

### Formulaire expert (`ExpertForm`)

Sections : Informations personnelles, Profil expert (parcours, clubs, diplômes, LinkedIn, licence FIFA si agent, barreau si avocat, références vérifiables), Offre proposée (prestations, tarifs, dispos, public, zones, missions acceptées/refusées), Positionnement (motivation, valeur apportée, cercle Fondateurs).

CTA : **Envoyer ma candidature expert**.

## Wipicut

Wipicut est le **logiciel propriétaire d'analyse vidéo** d'Olona Sport (préparation de dossiers joueurs : vidéos, séquences, actions clés, stats simples). Toujours le présenter comme un outil interne mis au service des experts, pas comme un produit vendu séparément.

## SEO

- **Title** : *Olona Sport Experts — Experts football, analyse vidéo et accompagnement joueur*
- **Meta description** : *Olona Sport Experts connecte joueurs, parents, clubs et académies avec des experts football vérifiables : anciens pros, coachs, préparateurs, analystes vidéo, agents FIFA, avocats et experts carrière.*
- Mots-clés à intégrer naturellement : expert football, accompagnement joueur football, analyse vidéo football, préparation détection, coach mental football, préparateur physique football, agent FIFA, avocat sport, carrière football, video report football, Wipicut.

## Footer — mention obligatoire

Inclure sur toutes les pages :

> « Olona Sport Experts ne garantit ni contrat, ni signature, ni intégration dans un club. La plateforme propose de l'analyse, de l'accompagnement et de la mise en relation avec des experts qualifiés. »

## Exigences techniques transverses

- Responsive mobile / tablette / desktop.
- Performance : viser bons Core Web Vitals dès la V1.
- Accessibilité : contraste suffisant sur fond sombre, labels de formulaires explicites, focus visibles.
- Composants **réutilisables** et **typés** ; sections de page = compositions de composants, pas de duplication.
- Architecture pensée pour évoluer vers marketplace (paiement, dashboard expert, upload vidéo, espace client).
