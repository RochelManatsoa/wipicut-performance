# Déploiement — o2switch (repo git directement dans l'app root)

Un seul dossier : le repo Git est cloné **directement** dans
`/home/mast9834/apps/wipicut-performance/`. Chaque déploiement =
`git pull` + `npm ci` + `npm run build` + restart Passenger.

- **Repo GitHub** : https://github.com/RochelManatsoa/wipicut-performance
- **Application root cPanel** : `/home/mast9834/apps/wipicut-performance`
- **Node venv** : `/home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate`
- **Application startup file** : `server.js` (fourni dans le repo)

---

## Premier déploiement

Toutes les commandes en SSH sur o2switch.

### 1. Nettoyer l'app root

```bash
cd /home/mast9834/apps/wipicut-performance
ls -la
# Sauvegarder .htaccess si présent (cPanel le régénère si besoin)
[ -f .htaccess ] && cp .htaccess ~/.htaccess.backup
# Tout vider
find . -mindepth 1 -delete
```

### 2. Cloner le repo dans le dossier courant

```bash
git clone https://github.com/RochelManatsoa/wipicut-performance.git .
```

Le `.` final = clone dans le dossier courant (qui doit être vide → OK grâce à l'étape 1).

### 3. Restaurer .htaccess (si sauvegardé)

```bash
[ -f ~/.htaccess.backup ] && mv ~/.htaccess.backup .htaccess
```

Si tu n'as pas eu de `.htaccess` au départ, saute cette étape — cPanel en
créera un automatiquement au premier restart depuis *Setup Node.js App*.

### 4. Activer la venv Node 20

```bash
source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate
node -v   # doit renvoyer v20.x
```

### 5. Installer + build

```bash
npm ci
npm run build
```

### 6. Restart Passenger

```bash
mkdir -p tmp && touch tmp/restart.txt
```

Ou depuis cPanel → *Setup Node.js App* → bouton **Restart** de l'app.

### 7. Vérifier

Ouvrir l'URL de l'app (Application URL configurée dans cPanel).

En cas de 502 :

```bash
# Test manuel
source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate
cd /home/mast9834/apps/wipicut-performance
node server.js
```

Ctrl+C ensuite. Les erreurs de boot s'affichent directement. Voir aussi cPanel
→ *Setup Node.js App* → **Logs**.

---

## Déploiements suivants

One-liner :

```bash
cd /home/mast9834/apps/wipicut-performance && \
  git pull && \
  source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate && \
  npm ci && npm run build && \
  touch tmp/restart.txt
```

## Config cPanel (à vérifier une fois)

cPanel → **Setup Node.js App** → l'app *wipicut-performance* → **Edit** :

- **Node.js version** : 20.20.2
- **Application root** : `/home/mast9834/apps/wipicut-performance`
- **Application startup file** : `server.js`
- **Environment variables** : `NODE_ENV = production`

**Update** en bas → l'app redémarre automatiquement.

## Fichiers runtime

- **`.env.local`** — variables API/secrets (clé Brevo, Airtable, etc.).
  À créer manuellement dans `/home/mast9834/apps/wipicut-performance/.env.local`.
  Il est dans `.gitignore` du repo donc jamais écrasé par `git pull`.
- **`tmp/`** — utilisé par Passenger (`tmp/restart.txt`). Créé automatiquement
  lors du premier restart.

## Debug

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| 502 après restart | server.js crashe au boot | Voir logs cPanel + `node server.js` manuel |
| Assets 404 (CSS/JS) | Build incomplet | `rm -rf .next && npm run build && touch tmp/restart.txt` |
| Vieille version servie | Restart n'a pas eu lieu | `touch tmp/restart.txt` + vérifier l'app *Started* |
| `git pull` en conflit | Fichiers locaux modifiés en prod | `git stash` puis `git pull` |
| `npm ci` échoue | Venv Node pas activée | `source /home/…/20/bin/activate` avant |
| Repo devient privé | Auth GitHub | Reconfigurer avec un PAT : `git remote set-url origin https://<TOKEN>@github.com/RochelManatsoa/wipicut-performance.git` |
