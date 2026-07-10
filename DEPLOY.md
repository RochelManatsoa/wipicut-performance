# Déploiement — o2switch (git + build serveur)

Le repo est cloné directement sur le serveur o2switch. Chaque déploiement =
`git pull` + `npm ci` + `npm run build` + copie de l'output standalone dans
l'Application root cPanel + redémarrage Passenger.

- **Repo GitHub** : https://github.com/RochelManatsoa/wipicut-performance
- **Répertoire source (clone)** : `/home/mast9834/src/wipicut-performance`
- **Application root cPanel** : `/home/mast9834/apps/wipicut-performance`
- **Node venv** : `/home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate`

Les deux répertoires sont **séparés volontairement** : le clone contient les
sources + node_modules dev, l'app root ne contient que le runtime standalone.

---

## Premier déploiement

Toutes les commandes ci-dessous s'exécutent en SSH sur o2switch.

### 1. Cloner le repo

```bash
mkdir -p ~/src
cd ~/src
git clone https://github.com/RochelManatsoa/wipicut-performance.git
cd wipicut-performance
```

> Si le repo devient privé plus tard : `git clone https://<TOKEN>@github.com/RochelManatsoa/wipicut-performance.git` avec un PAT GitHub *fine-grained*.

### 2. Activer la venv Node 20

```bash
source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate
node -v   # doit renvoyer v20.x
```

### 3. Nettoyer l'Application root (placeholder cPanel)

Depuis n'importe où :

```bash
cd /home/mast9834/apps/wipicut-performance
ls -la
rm -rf node_modules server.js public
[ -f package.json ] && rm package.json
[ -f app.js ] && rm app.js
# Ne pas toucher: tmp/, .htaccess (s'il existe), .env* (s'il existe)
```

### 4. Installer les deps + build

```bash
cd ~/src/wipicut-performance
npm ci
npm run build
```

Le build produit `.next/standalone/`, `.next/static/`, tout est prêt.

### 5. Déployer vers l'app root

```bash
bash scripts/deploy-to-app.sh
```

Le script :
- vide `/home/mast9834/apps/wipicut-performance/` (préserve `tmp/`, `.env*`, `.htaccess`)
- copie `.next/standalone/*` → app root
- copie `.next/static` → `app_root/.next/static`
- copie `public` → `app_root/public`
- `touch tmp/restart.txt` → Passenger recycle

### 6. Vérifier

Ouvrir l'URL de l'app (Application URL configurée dans cPanel → *Setup Node.js App*).

Si 502 :

```bash
# Test manuel du server.js standalone
source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate
cd /home/mast9834/apps/wipicut-performance
node server.js
```

Ctrl+C ensuite. Les erreurs de boot s'affichent directement.

Vérifier aussi les logs cPanel → *Setup Node.js App* → **Logs**.

---

## Déploiements suivants

```bash
cd ~/src/wipicut-performance
git pull
source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate
npm ci
npm run build
bash scripts/deploy-to-app.sh
```

Ou tout enchaîné en une ligne :

```bash
cd ~/src/wipicut-performance && \
  git pull && \
  source /home/mast9834/nodevenv/apps/wipicut-performance/20/bin/activate && \
  npm ci && \
  npm run build && \
  bash scripts/deploy-to-app.sh
```

## Config Application Node.js (cPanel)

cPanel → **Setup Node.js App** → l'app *wipicut-performance* → **Edit** :

- **Node.js version** : 20.20.2
- **Application root** : `/home/mast9834/apps/wipicut-performance`
- **Application startup file** : `server.js` (celui généré par standalone)
- **Environment variables** : `NODE_ENV = production`

## Fichiers runtime

- **`.env.local`** — variables API/secrets, à créer manuellement dans
  `/home/mast9834/apps/wipicut-performance/.env.local`. Préservé par
  `deploy-to-app.sh` à chaque redéploiement.
- **`tmp/`** — utilisé par Passenger (`tmp/restart.txt`). Ne pas toucher.

## Debug

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| 502 après restart | server.js crashe au boot | Voir logs cPanel + `node server.js` manuel |
| Assets 404 (CSS/JS) | `.next/static/` pas copié | Relancer `bash scripts/deploy-to-app.sh` |
| Vieille version servie | Restart n'a pas eu lieu | Vérifier `tmp/restart.txt` récent + app *Started* |
| `npm ci` échoue | Node venv pas activée | `source /home/…/20/bin/activate` avant |
| `git pull` demande login | Repo privé sans PAT | Reconfigurer le remote avec `<TOKEN>@github.com/…` |
