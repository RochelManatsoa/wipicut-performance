#!/usr/bin/env bash
# À exécuter sur le serveur o2switch, depuis la racine du repo cloné,
# après un `npm ci && npm run build` réussi.
#
# Rôle : copier le bundle standalone Next.js dans le répertoire de l'app
# cPanel (Application root), puis déclencher un redémarrage Passenger.
set -euo pipefail

APP_ROOT="${APP_ROOT:-/home/mast9834/apps/wipicut-performance}"
SRC_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [ ! -d "$SRC_ROOT/.next/standalone" ]; then
  echo "❌  $SRC_ROOT/.next/standalone introuvable."
  echo "    Lance d'abord: npm ci && npm run build"
  exit 1
fi

if [ ! -d "$APP_ROOT" ]; then
  echo "❌  APP_ROOT introuvable: $APP_ROOT"
  echo "    Vérifie que l'app Node.js cPanel est bien créée."
  exit 1
fi

echo "→ Nettoyage de $APP_ROOT (préserve tmp/, .env*, .htaccess)..."
find "$APP_ROOT" -mindepth 1 -maxdepth 1 \
  -not -name 'tmp' \
  -not -name '.env' \
  -not -name '.env.local' \
  -not -name '.env.production' \
  -not -name '.htaccess' \
  -exec rm -rf {} +

echo "→ Copie standalone (server.js + node_modules + .next/server)..."
cp -a "$SRC_ROOT/.next/standalone/." "$APP_ROOT/"

echo "→ Copie .next/static..."
mkdir -p "$APP_ROOT/.next"
cp -a "$SRC_ROOT/.next/static" "$APP_ROOT/.next/static"

if [ -d "$SRC_ROOT/public" ]; then
  echo "→ Copie public..."
  cp -a "$SRC_ROOT/public" "$APP_ROOT/public"
fi

echo "→ Restart Passenger..."
mkdir -p "$APP_ROOT/tmp"
touch "$APP_ROOT/tmp/restart.txt"

echo
echo "✓ Déployé sur $APP_ROOT"
echo "  Vérifier ensuite l'URL de l'app dans cPanel > Setup Node.js App."
