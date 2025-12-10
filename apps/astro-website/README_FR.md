# Template de Site Web Astro

**[🇬🇧 English version](./README.md)**

Un template de site web Astro prêt pour la production avec SSR (Server-Side Rendering), internationalisation et optimisé pour obtenir un score Lighthouse de 100%.

## ✨ Fonctionnalités

### Stack Technique

- ⚡ **Astro 5** - Framework web moderne avec support SSR
- 🚀 **Adaptateur Node.js** - Rendu côté serveur via Express.js
- 🎨 **Tailwind CSS 4** - Dernière version avec fonctionnalités CSS modernes
- 🌍 **Paraglide.js** - Routing i18n et traductions type-safe
- 📦 **TypeScript** - Sécurité des types dans tout le projet

### Prêt pour la Production

- 🔒 **En-têtes de Sécurité** - Helmet.js avec CSP et Permissions Policy
- ⚡ **Compression** - Compression Gzip pour des performances optimales
- 🎯 **Optimisé SEO** - Meta tags, Open Graph et génération de sitemap
- 📊 **Score Lighthouse 100%** - Optimisé pour les performances, l'accessibilité, le SEO et les bonnes pratiques
- 🧪 **Tests** - Configuration Vitest avec tests de conteneur Astro

### Expérience Développeur

- 🔥 **Hot Module Replacement** - Développement rapide avec Vite
- 📝 **Content Collections** - Gestion de contenu markdown type-safe
- 🎭 **Layouts Multiples** - Système de layouts flexible avec partials
- 🧩 **Bibliothèque de Composants** - Composants accessibles pré-construits

## 📦 Contenu Inclus

### Pages

- Page d'accueil avec design moderne
- Page à propos
- Déclaration d'accessibilité
- Pages légales (Politique de confidentialité, CGU, Politique de cookies)
- Page d'erreur 404 personnalisée
- sitemap.xml dynamique
- robots.txt dynamique
- Web manifest pour le support PWA

### Composants

- En-tête responsive avec sélecteur de langue
- Pied de page avec liens légaux
- Navigation de raccourcis d'accessibilité
- Layouts optimisés SEO avec support Open Graph

### Support i18n

- Français (langue par défaut)
- Anglais
- Extensible à d'autres langues via la configuration du monorepo
- Clés de traduction type-safe
- Localisation automatique des routes

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- pnpm (ou npm/yarn)

### Installation

```bash
# Cloner ou générer depuis le template
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Le serveur de développement démarrera sur `http://localhost:4321`

## 📜 Scripts Disponibles

```bash
# Développement
pnpm dev          # Démarrer le serveur dev avec HMR

# Production
pnpm build        # Build pour la production
pnpm start        # Démarrer le serveur de production (port 4321)

# Qualité
pnpm typecheck    # Vérification des types avec Astro
pnpm test         # Lancer les tests avec Vitest

# Maintenance
pnpm clean        # Supprimer node_modules, dist, .astro, etc.
```

## 📂 Structure du Projet

```bash
├── public/
│   ├── icons/              # Favicon et icônes d'application
│   └── images/             # Images statiques
├── src/
│   ├── components/         # Composants Astro réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── AccessibilityShortcuts.astro
│   ├── content/            # Collections de contenu
│   │   ├── config.ts       # Définitions des schémas de contenu
│   │   └── pages/          # Pages markdown (fr/en)
│   ├── i18n/               # Traductions générées (Paraglide)
│   ├── layouts/            # Layouts de page
│   │   ├── Layout.astro
│   │   └── partials/       # Composants de layout
│   ├── middleware/         # Middleware Astro
│   │   ├── index.ts
│   │   └── paraglide.ts    # Routing i18n
│   ├── pages/              # Routing basé sur les fichiers
│   │   ├── index.astro     # Accueil (Français)
│   │   ├── about.astro
│   │   ├── [...].astro     # Catch-all pour routes localisées
│   │   └── manifest.webmanifest.ts
│   ├── schemas/            # Schémas TypeScript
│   ├── styles/             # Styles globaux
│   │   └── global.css      # Imports Tailwind
│   ├── types/              # Types TypeScript
│   ├── utils/              # Fonctions utilitaires
│   │   ├── opengraph.ts    # Génération d'images OG
│   │   └── sitemap.ts      # Helpers pour sitemap
│   └── config.ts           # Configuration de l'application
├── tests/                  # Fichiers de test
├── astro.config.ts         # Configuration Astro
├── routes.ts               # Mappings de routes i18n
├── server.ts               # Serveur Express de production
└── vitest.config.ts        # Configuration Vitest
```

## 🌍 Internationalisation

### Langues Supportées

- **Français** (fr) - Langue par défaut, accessible à `/`
- **Anglais** (en) - Accessible à `/en/*`

### Ajouter des Traductions

1. Les traductions sont gérées au niveau du monorepo dans `../../.inlang/`
2. Les messages sont générés automatiquement dans `src/i18n/`
3. Utilisez le fichier `routes.ts` pour définir les patterns de routes localisées

### Configuration des Routes

```typescript
// routes.ts
export default [
  {
    pattern: '/about',
    localized: [
      ['fr', '/a-propos'],
      ['en', '/en/about'],
    ],
  },
  // ...
]
```

## 🎨 Style

Ce template utilise **Tailwind CSS 4** avec la configuration suivante :

- Configuration via le plugin `@tailwindcss/vite`
- Package de configuration personnalisé du monorepo (`tailwind-config`)
- Styles globaux dans `src/styles/global.css`
- Couches CSS pour base, components et utilities

## 🔒 Sécurité

Le serveur de production (`server.ts`) inclut :

- **Helmet.js** - En-têtes de sécurité (CSP, protection XSS, etc.)
- **Permissions Policy** - Contrôles de politique de fonctionnalités
- **CORS** - Protection du partage de ressources cross-origin
- **Compression** - Compression des réponses
- **Encodage forcé** - Encodage UTF-8 sur toutes les réponses

## 📊 SEO & Performance

### Fonctionnalités SEO

- Meta tags dynamiques par page
- Images et métadonnées Open Graph
- Données JSON-LD structurées prêtes
- Génération automatique du sitemap
- Configuration robots.txt
- URLs canoniques
- Alternates de langue

### Optimisations de Performance

- Rendu côté serveur pour un chargement initial rapide
- Optimisation d'images via Astro assets
- Code splitting et lazy loading
- Minification et compression CSS/JS
- Stratégies de cache efficaces
- Resource hints (preload, prefetch)

### Scores Lighthouse

Ce template est optimisé pour atteindre :

- ⚡ Performance : 100
- ♿ Accessibilité : 100
- 🎯 Bonnes Pratiques : 100
- 🔍 SEO : 100

## 🧪 Tests

Les tests sont écrits avec **Vitest** et l'API container expérimentale d'Astro :

```bash
# Lancer les tests
pnpm test

# Lancer les tests en mode watch
pnpm test -- --watch

# Générer la couverture
pnpm test -- --coverage
```

Exemple de test :

```typescript
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, it } from 'vitest'
import Index from '@/pages/index.astro'

describe('Index page', async () => {
  it('should render the index page', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Index)
    expect(result).toContain('Simple Website')
  })
})
```

## 🚢 Déploiement en Production

### Build

```bash
pnpm build
```

Cela génère :

- `dist/client/` - Assets statiques
- `dist/server/` - Bundle du serveur SSR

### Lancer le Serveur de Production

```bash
pnpm start
```

Le serveur Express démarrera sur le port 4321 par défaut.

### Variables d'Environnement

Vous pouvez configurer le serveur de production via des variables d'environnement ou modifier `server.ts` :

```bash
# Exemple : Port personnalisé
PORT=3000 pnpm start
```

## 📝 Gestion du Contenu

Le contenu est géré via les Content Collections d'Astro :

1. Ajoutez des fichiers markdown dans `src/content/pages/`
2. Suivez le pattern de nommage : `{slug}-{lang}.md`
3. Le schéma est défini dans `src/content/config.ts`
4. Accédez au contenu via `getCollection('pages')`

Exemple :

```markdown
---
title: À Propos
description: En savoir plus sur notre entreprise
---

Votre contenu ici...
```

## 🛠️ Configuration

### Configuration de l'Application

Éditez `src/config.ts` pour personnaliser :

```typescript
export const PROJECT_NAME = 'Nom de votre Site'
export const PROJECT_SHORT_NAME = 'NVS'
export const PROJECT_DESCRIPTION = 'Votre description'
export const TWITTER_HANDLE = '@votrecompte'
```

### Configuration Astro

Voir `astro.config.ts` pour :

- Paramètres de l'adaptateur
- Intégrations (compression)
- Plugins Vite (Tailwind, Paraglide)

## 🤝 Contribution

Ceci est un dépôt template. N'hésitez pas à le forker et à le personnaliser selon vos besoins !

## 📄 Licence

Licence MIT - libre d'utiliser ce template pour n'importe quel projet.

---

**Construit avec ❤️ en utilisant Astro, Paraglide.js et Tailwind CSS**
