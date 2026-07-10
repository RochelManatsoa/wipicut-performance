# Déploiement — o2switch (Passenger)

Workflow GitHub Actions : `.github/workflows/deploy.yml`.
Déclenchement : push sur `main`, ou manuel via l'onglet Actions (`workflow_dispatch`).

## 1. Secrets GitHub à configurer

Repo → Settings → Secrets and variables → Actions → **New repository secret**.

| Nom | Valeur | Notes |
|-----|--------|-------|
| `SSH_HOST` | hôte SSH o2switch | ex. `nodeXX.o2switch.net` — visible dans cPanel → SSH Access |
| `SSH_USER` | login cPanel | ton nom d'utilisateur cPanel |
| `SSH_PORT` | port SSH | o2switch utilise souvent un port custom, à vérifier dans cPanel |
| `SSH_KEY` | clé privée SSH (PEM) | voir §2 |
| `DEPLOY_PATH` | chemin absolu de l'app Node | ex. `/home/USER/apps/wipicut-performance` — c'est **l'Application root** de ton app cPanel |

## 2. Générer la paire SSH

Sur ta machine (ou dans un shell éphémère) :

```bash
ssh-keygen -t ed25519 -f ~/.ssh/o2switch_wipicut -C "gh-actions-wipicut" -N ""
```

- Ajouter le **contenu de `~/.ssh/o2switch_wipicut.pub`** dans cPanel → SSH Access → Manage SSH Keys → *Import* (nom libre, puis *Manage → Authorize*).
- Copier le **contenu de `~/.ssh/o2switch_wipicut`** (la clé privée, en-têtes comprises) dans le secret GitHub `SSH_KEY`.

## 3. Vérifier l'app Node.js cPanel

Puisque l'app est déjà en place, valider :

- **Node.js version** : `20.20.2` (ou branche 20 récente).
- **Application root** : identique à `DEPLOY_PATH`.
- **Application startup file** : `server.js` — c'est celui qu'`output: "standalone"` génère et que le workflow uploade.
- **Environment variable** `NODE_ENV=production` (recommandé).

Sur o2switch, Passenger reste actif en permanence ; le redémarrage se fait via `touch tmp/restart.txt` (le workflow le fait à chaque déploiement).

## 4. Ce que fait le workflow

1. Checkout + setup Node depuis `.nvmrc` (20.20.2) + cache npm.
2. `npm ci` puis `npm run lint` puis `npm run build`.
3. Prépare `deploy/` avec la structure attendue par Passenger :
   - `deploy/server.js`, `deploy/node_modules/`, `deploy/package.json`, `deploy/.next/server/` — depuis `.next/standalone/`
   - `deploy/.next/static/` — depuis `.next/static/`
   - `deploy/public/` — depuis `public/`
4. `rsync -avz --delete` vers `DEPLOY_PATH` (protège `tmp/` et `.env.local` du serveur).
5. `touch tmp/restart.txt` → Passenger recycle le worker.

Grâce à `output: "standalone"`, **aucun `npm install` n'est nécessaire côté serveur** : Next embarque uniquement les deps runtime dans le bundle.

## 5. Variables d'environnement runtime

À placer dans `<DEPLOY_PATH>/.env.local` **directement sur le serveur** (le workflow exclut ce fichier du rsync). Exemples :

```
NODE_ENV=production
# BREVO_API_KEY=xxx
# AIRTABLE_API_KEY=xxx
```

Ne jamais committer ce fichier — il est déjà dans `.gitignore`.

## 6. Debug

- **Le workflow échoue au `ssh-keyscan`** : port SSH incorrect, ou hôte pas accessible depuis GitHub → tester `ssh -p PORT USER@HOST` depuis un poste externe.
- **`rsync: … Permission denied`** : la clé publique n'a pas été autorisée dans cPanel (Manage SSH Keys → Authorize).
- **Le site sert l'ancienne version** : vérifier que `tmp/restart.txt` a bien été touché après le rsync et que l'app cPanel est en `Started`.
- **502 après déploiement** : consulter les logs de l'app dans cPanel → Node.js Selector → Open Logs. Souvent une variable d'env manquante ou un chemin `DEPLOY_PATH` mal aligné.
