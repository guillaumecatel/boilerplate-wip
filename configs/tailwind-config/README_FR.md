# tailwind-config

Configuration Tailwind CSS 4 partagée pour le monorepo.

[English version](./README.md)

## Fonctionnalités

- 🎨 Configuration de base Tailwind CSS 4
- 📦 Partageable entre les packages et apps du workspace
- 🎯 Définitions de types TypeScript incluses
- 🔄 Configuration basée sur CSS (pas besoin de fichier de config JS)

## Installation

Ceci est un package interne du workspace. Installez-le dans vos packages workspace :

```json
{
  "dependencies": {
    "tailwind-config": "workspace:*"
  },
  "peerDependencies": {
    "tailwindcss": ">=4.0.0"
  }
}
```

## Utilisation

### Dans les Projets Vite

```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

Puis importez la configuration de base dans votre CSS :

```css
/* src/index.css */
@import 'tailwind-config';

/* Vos styles personnalisés */
@layer components {
  .btn {
    @apply rounded px-4 py-2;
  }
}
```

### Dans les Projets Astro

```css
/* src/styles/global.css */
@import 'tailwind-config';
```

```typescript
// astro.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
})
```

### Dans Storybook

```css
/* .storybook/style.css */
@import 'tailwind-config';
```

## Configuration

La configuration de base (`index.css`) inclut :

```css
@import 'tailwindcss';

/* Directives Tailwind de base */
@layer base {
  /* Styles de base personnalisés */
}

@layer components {
  /* Styles de composants personnalisés */
}

@layer utilities {
  /* Classes utilitaires personnalisées */
}
```

## Personnalisation

Vous pouvez étendre ou surcharger la configuration dans votre projet :

```css
@import 'tailwind-config';

/* Surcharge ou extension */
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

## Fonctionnalités de Tailwind CSS 4

Cette configuration utilise Tailwind CSS 4, qui inclut :

- **Configuration CSS-first** - Pas besoin de `tailwind.config.js`
- **Cascade layers natives** - Meilleur contrôle de la spécificité CSS
- **Performance améliorée** - Builds plus rapides
- **Fonctionnalités CSS modernes** - Container queries, `has()`, etc.
- **Meilleur IntelliSense** - Support éditeur amélioré

## Structure du Projet

```text
tailwind-config/
├── index.css           # Configuration Tailwind principale
├── index.d.ts          # Déclarations TypeScript
├── package.json
├── CHANGELOG.md
├── LICENCE.md
└── README.md
```

## Support TypeScript

Le package inclut des déclarations de types pour les imports CSS :

```typescript
declare module 'tailwind-config' {
  const content: string
  export default content
}
```

## Versioning

Ce package suit le versioning sémantique. Consultez `CHANGELOG.md` pour les notes de version.

## Scripts Disponibles

```bash
# Nettoyer node_modules
pnpm clean
```

## Licence

MIT
