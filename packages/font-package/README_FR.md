# @myorg/font-package

Un package de polices pour distribuer des web fonts avec les définitions de types appropriées.

[English version](./README.md)

## Fonctionnalités

- 🔤 Fichiers de polices web (WOFF, WOFF2, TTF, OTF, EOT)
- 📦 Distribution simple des assets de polices
- 🎯 Déclarations TypeScript incluses
- 🔄 Processus de build par copie automatique
- 🛠️ Mode watch pour le développement

## Prérequis

- **Node.js** >= 24.0.0
- **pnpm** >= 10.0.0 (gestionnaire de paquets)
- **nvm** (Node Version Manager) - recommandé

```bash
# Installer la bonne version de Node.js
nvm use

# Installer les dépendances
pnpm install
```

## Installation

```bash
pnpm add @myorg/font-package
```

## Utilisation

### En CSS

```css
@font-face {
  font-family: 'Inter';
  src: url('@myorg/font-package/inter-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

### En TypeScript

```typescript
import '@myorg/font-package/inter-regular.ttf'
```

### Avec Vite/Webpack

```typescript
import interRegular from '@myorg/font-package/inter-regular.ttf'
```

## Scripts Disponibles

### Développement

```bash
# Mode watch - copie automatique des polices lors des changements
pnpm dev

# Vérification des types
pnpm typecheck
```

### Build

```bash
# Build pour la production (copie les polices dans dist/)
pnpm build
```

### Maintenance

```bash
# Nettoyer les fichiers générés
pnpm clean
```

## Structure du Projet

```text
font-package/
├── src/
│   ├── Inter-Regular.ttf   # Fichier de police
│   └── index.d.ts          # Déclarations TypeScript
├── dist/                   # Polices construites (généré)
│   ├── Inter-Regular.ttf
│   └── index.d.ts
├── turbo/
│   └── package.json        # Config Turbo
└── package.json
```

## Ajouter de Nouvelles Polices

1. Ajoutez vos fichiers de polices dans le dossier `src/` :

   ```bash
   cp MaPolice.woff MaPolice.woff2 src/
   ```

2. Mettez à jour les exports dans `package.json` :

   ```json
   {
     "exports": {
       "./ma-police.woff": "./src/MaPolice.woff",
       "./ma-police.woff2": "./src/MaPolice.woff2"
     },
     "publishConfig": {
       "exports": {
         "./ma-police.woff": "./dist/MaPolice.woff",
         "./ma-police.woff2": "./dist/MaPolice.woff2"
       }
     }
   }
   ```

3. Build :
   ```bash
   pnpm build
   ```

## Formats de Police Supportés

- `.woff` - Web Open Font Format
- `.woff2` - Web Open Font Format 2 (compressé)
- `.ttf` - TrueType Font
- `.otf` - OpenType Font
- `.eot` - Embedded OpenType (support ancien IE)

## Processus de Build

Le script de build :

1. Crée le dossier `dist/`
2. Copie tous les fichiers de polices de `src/` vers `dist/`
3. Copie `index.d.ts` pour le support TypeScript

En mode développement avec `pnpm dev`, ce processus s'exécute automatiquement quand les fichiers de polices changent.

## Exports

```json
{
  "exports": {
    "./inter-regular.ttf": "./src/Inter-Regular.ttf",
    "./index.d.ts": "./src/index.d.ts",
    "./*": "./src/*"
  },
  "publishConfig": {
    "exports": {
      "./inter-regular.ttf": "./dist/Inter-Regular.ttf",
      "./index.d.ts": "./dist/index.d.ts",
      "./*": "./dist/*"
    }
  }
}
```

## Support TypeScript

Le package inclut des déclarations de types pour importer les fichiers de polices :

```typescript
declare module '*.woff' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}

declare module '*.ttf' {
  const content: string
  export default content
}

declare module '*.otf' {
  const content: string
  export default content
}

declare module '*.eot' {
  const content: string
  export default content
}
```

## Licence

MIT
