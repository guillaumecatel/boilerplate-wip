# 🚀 Monorepo Boilerplate

**Template de Monorepo Prêt pour la Production pour un Développement Rapide**

[English version](./README.md)

Un boilerplate de monorepo complet conçu pour accélérer le développement de projets grâce à des packages réutilisables et des applications exemples. Ce dépôt sert de fondation centralisée pour construire divers types d'applications tout en maintenant cohérence, qualité et bonnes pratiques à travers tous les projets.

## 🎯 Vision & Philosophie

Ce monorepo est construit sur le principe du **"Cloner, Personnaliser, Déployer"** - fournissant une base solide qui peut être rapidement adaptée aux besoins spécifiques d'un projet.

## ✨ Fonctionnalités

- 🏗️ **Turborepo** - Système de build haute performance pour les monorepos JavaScript/TypeScript
- 📦 **pnpm** - Gestionnaire de paquets rapide et économe en espace disque avec support des workspaces
- 🎨 **Tailwind CSS 4** - Configuration CSS partagée entre tous les projets
- 🌍 **i18n Ready** - Intégration de Paraglide.js pour l'internationalisation type-safe
- 🧪 **Tests** - Configuration Vitest avec couverture de test complète
- 🔧 **Générateurs** - Générateurs Turbo pour créer des packages, apps et composants
- 📝 **TypeScript** - Sécurité des types complète dans tout le monorepo
- ♿ **Accessibilité** - Construit avec la conformité WCAG à l'esprit
- 🚀 **CI/CD Ready** - Workflows GitHub Actions inclus

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** >= 24.0.0
- **pnpm** >= 10.0.0 (gestionnaire de paquets)
- **nvm** (Node Version Manager) - recommandé pour gérer les versions de Node.js

### Configuration Initiale

```bash
# Installer la bonne version de Node.js
nvm use

# Installer les dépendances
pnpm install

# Build tous les packages
pnpm build
```

## 📦 Contenu

### Applications (`apps/`)

#### astro-website

Site web Astro prêt pour la production avec SSR, support i18n et score Lighthouse à 100%.

**Fonctionnalités :**

- ⚡ Astro 5 avec adaptateur Node.js
- 🌍 i18n Français/Anglais avec Paraglide.js
- 🎨 Tailwind CSS 4
- 🔒 En-têtes de sécurité et compression
- 📊 Score Lighthouse parfait
- 🧪 Configuration de tests Vitest

**[Voir la Documentation →](./apps/astro-website/README_FR.md)**

#### storybook-react

Environnement de développement de bibliothèque de composants avec support i18n.

**Fonctionnalités :**

- 📖 Storybook 10 avec React 19
- 🌍 Stories multilingues (FR/EN)
- ♿ Tests d'accessibilité
- 🧪 Tests de composants avec Vitest
- 🎨 Intégration Tailwind CSS 4

**[Voir la Documentation →](./apps/storybook-react/README_FR.md)**

### Packages (`packages/`)

#### @myorg/react-package

Bibliothèque de composants React avec TypeScript et tests.

**Fonctionnalités :**

- ⚛️ Composants React 19
- 📦 Exports ESM/CJS
- 🧪 Vitest + Testing Library
- 🔄 Exports auto-générés

**[Voir la Documentation →](./packages/react-package/README_FR.md)**

#### @myorg/typescript-package

Utilitaires TypeScript et type guards.

**Fonctionnalités :**

- 🎯 Utilitaires TypeScript purs
- 🛡️ Type guards inclus
- 🔄 Utilitaires de transformation de chaînes
- 🧪 Couverture de test complète

**[Voir la Documentation →](./packages/typescript-package/README_FR.md)**

#### @myorg/font-package

Package de distribution de polices web.

**Fonctionnalités :**

- 🔤 Multiples formats de polices (WOFF, WOFF2, TTF, OTF, EOT)
- 📦 Distribution simple d'assets de polices
- 🎯 Déclarations TypeScript
- 🔄 Mode watch pour le développement

**[Voir la Documentation →](./packages/font-package/README_FR.md)**

### Configurations (`configs/`)

#### tailwind-config

Configuration Tailwind CSS 4 partagée.

**Fonctionnalités :**

- 🎨 Configuration CSS-first
- 📦 Partage à l'échelle du workspace
- 🎯 Support TypeScript
- 🔄 Pas besoin de config JS

**[Voir la Documentation →](./configs/tailwind-config/README_FR.md)**

## 🚀 Démarrage Rapide

### Démarrage

```bash
# Cloner le dépôt avec degit (sans l'historique git)
pnpm dlx degit https://github.com/guillaumecatel/boilerplate-wip mon-projet
cd mon-projet

# Copier les variables d'environnement
cp .env.example .env

# Installer la version de Node.js
nvm use

# Installer les dépendances
pnpm install

# Démarrer le développement
pnpm dev
```

### Workflow de Développement

```bash
# Build tous les packages
pnpm build

# Lancer tous les tests
pnpm test

# Vérifier les types de tous les packages
pnpm typecheck

# Formater le code
pnpm format

# Linter le code
pnpm lint

# Nettoyer tous les artefacts de build
pnpm clean
```

## 🎨 Générateurs

Ce monorepo inclut de puissants générateurs Turbo pour créer :

### Créer une Nouvelle Application

```bash
pnpm gen
# Choisir "app" → Sélectionner template → Entrer le nom
```

**Templates disponibles :**

- `astro-website` - Site web Astro multilingue avec SSR
- `storybook-react` - Bibliothèque de composants avec Storybook

### Créer un Nouveau Package

```bash
pnpm gen
# Choisir "package" → Sélectionner template → Entrer le nom
```

**Templates disponibles :**

- `react-package` - Bibliothèque de composants React
- `typescript-package` - Bibliothèque d'utilitaires TypeScript
- `font-package` - Package de distribution de polices

### Générateurs de Composants/Hooks

Chaque package inclut des sous-générateurs :

```bash
# Depuis le dossier du package
cd packages/react-package
pnpm gen
# Choisir : "create component", "create hook", ou "sync exports"

cd packages/typescript-package
pnpm gen
# Choisir : "create typescript file" ou "sync exports"
```

### Générateurs de Stories

```bash
# Depuis le dossier storybook-react
cd apps/storybook-react
pnpm gen
# Choisir : "create stories"
```

## 📜 Scripts Disponibles

### Racine du Workspace

```bash
pnpm build           # Build tous les packages et apps
pnpm dev             # Démarrer toutes les apps en mode développement
pnpm test            # Lancer tous les tests
pnpm typecheck       # Vérifier les types de tous les packages
pnpm lint            # Linter tout le code
pnpm format          # Formater tout le code avec Prettier
pnpm clean           # Nettoyer tous les artefacts de build
pnpm gen             # Lancer les générateurs Turbo
pnpm check-updates   # Vérifier les mises à jour de dépendances
```

### Régénérer Tous les Packages/Apps

```bash
pnpm gen:all         # Régénérer tous les packages et apps depuis les templates
pnpm gen:packages    # Régénérer tous les packages
pnpm gen:apps        # Régénérer toutes les apps
```

## 🏗️ Structure du Projet

```text
boilerplate-wip/
├── apps/                    # Applications
│   ├── astro-website/      # Site web Astro SSR
│   └── storybook-react/    # Bibliothèque de composants Storybook
├── packages/                # Packages partagés
│   ├── react-package/      # Composants React
│   ├── typescript-package/ # Utilitaires TypeScript
│   └── font-package/       # Assets de polices
├── configs/                 # Configurations partagées
│   └── tailwind-config/    # Config Tailwind CSS
├── turbo/                   # Configuration Turbo
│   └── generators/         # Générateurs de code
│       ├── actions.ts      # Actions de générateur personnalisées
│       ├── config.ts       # Configuration des générateurs
│       ├── helpers.ts      # Helpers de générateur
│       ├── validators.ts   # Validateurs d'entrée
│       └── templates/      # Templates de générateur
│           ├── apps/       # Templates d'apps
│           ├── packages/   # Templates de packages
│           └── internal/   # Templates partagés
├── translations/            # Fichiers de traduction i18n
│   ├── en.json
│   └── fr.json
├── .nvmrc                  # Version de Node.js
├── package.json            # package.json racine
├── pnpm-workspace.yaml     # Config workspace pnpm
├── turbo.json              # Config Turborepo
├── vitest.config.ts        # Config Vitest
├── eslint.config.ts        # Config ESLint
└── prettier.config.ts      # Config Prettier
```

## 🔧 Stack Technologique

### Core

- **[Turborepo](https://turbo.build/repo)** - Système de build
- **[pnpm](https://pnpm.io/)** - Gestionnaire de paquets
- **[TypeScript](https://www.typescriptlang.org/)** - Sécurité des types
- **[Vitest](https://vitest.dev/)** - Framework de tests
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Formatage du code

### Frontend

- **[Astro](https://astro.build/)** - Framework web
- **[React](https://react.dev/)** - Bibliothèque UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Storybook](https://storybook.js.org/)** - Développement de composants

### Outils de Build

- **[tsdown](https://tsdown.vercel.app/)** - Bundler TypeScript
- **[Vite](https://vitejs.dev/)** - Outil de build
- **[Paraglide.js](https://inlang.com/m/gerre34r/paraglide-js)** - i18n

## 🤝 Contribuer

1. Fork le dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/fonctionnalite-incroyable`)
3. Committez vos changements (`git commit -m 'feat: ajouter fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/fonctionnalite-incroyable`)
5. Ouvrez une Pull Request

## 📝 Licence

MIT

## 🙋 Support

Pour les questions et le support, veuillez ouvrir une issue dans le dépôt GitHub.
