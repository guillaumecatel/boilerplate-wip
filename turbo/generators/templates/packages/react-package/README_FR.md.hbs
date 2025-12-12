# @myorg/react-package

Un package de composants React avec support TypeScript, tests et builds automatisés.

[English version](./README.md)

## Fonctionnalités

- ⚛️ Composants React 19
- 📦 Exports ESM et CJS
- 🎯 TypeScript avec définitions de types complètes
- 🧪 Tests avec Vitest et Testing Library
- 🔄 Exports auto-générés depuis les fichiers source
- 🛠️ Construit avec tsdown pour une taille de bundle optimale

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
pnpm add @myorg/react-package
```

## Utilisation

```tsx
import { Button } from '@myorg/react-package'
// ou
import { Button } from '@myorg/react-package/button'

function App() {
  return <Button>Cliquez-moi</Button>
}
```

## Scripts Disponibles

### Développement

```bash
# Mode watch avec reconstruction automatique
pnpm dev

# Vérification des types
pnpm typecheck

# Lancer les tests
pnpm test

# Lancer les tests en mode watch
pnpm test --watch
```

### Build

```bash
# Build pour la production
pnpm build
```

### Maintenance

```bash
# Nettoyer les fichiers générés
pnpm clean
```

## Commandes de Génération

Ce package inclut des générateurs Turbo pour créer de nouveaux composants et hooks :

### Créer un Composant

```bash
# Depuis la racine du workspace
pnpm turbo gen @myorg/react-package create component

# Ou depuis le dossier du package
pnpm gen
```

Cela va :

- Créer `src/VotreComposant.tsx`
- Créer `tests/VotreComposant.test.tsx`
- Mettre à jour les exports dans `package.json`
- Mettre à jour `src/index.ts`

### Créer un Hook

```bash
# Depuis la racine du workspace
pnpm turbo gen @myorg/react-package create hook

# Ou depuis le dossier du package
pnpm gen
```

Cela va :

- Créer `src/useVotreHook.ts`
- Créer `tests/useVotreHook.test.ts`
- Mettre à jour les exports dans `package.json`
- Mettre à jour `src/index.ts`

### Synchroniser les Exports

Synchronise automatiquement les exports de `package.json` et `src/index.ts` avec tous les fichiers dans `src/` :

```bash
# Depuis la racine du workspace
pnpm turbo gen @myorg/react-package sync exports

# Ou depuis le dossier du package
pnpm gen
```

Cela scanne le dossier `src/` et met à jour :

- Toutes les déclarations d'export dans `src/index.ts`
- Tous les exports dans `package.json`
- Tous les exports de publishConfig dans `package.json`

## Structure du Projet

```text
react-package/
├── src/
│   ├── Button.tsx          # Composant exemple
│   └── index.ts            # Point d'entrée principal
├── tests/
│   └── Button.test.tsx     # Tests du composant
├── turbo/
│   ├── package.json        # Config générateur Turbo
│   └── generators/
│       ├── config.ts       # Définitions des générateurs
│       └── templates/      # (Utilise les templates partagés du monorepo)
├── package.json
├── tsconfig.json
├── tsconfig.test.json
├── tsdown.config.ts        # Configuration de build
└── vitest.config.ts        # Configuration des tests
```

## Exports

Ce package utilise des exports conditionnels pour une compatibilité optimale :

```json
{
  "exports": {
    "./button": "./src/Button.tsx",
    ".": "./src/index.ts"
  },
  "publishConfig": {
    "exports": {
      "./button": {
        "import": "./dist/Button.js",
        "require": "./dist/Button.cjs",
        "types": "./dist/Button.d.ts"
      },
      ".": {
        "import": "./dist/*.js",
        "require": "./dist/*.cjs",
        "types": "./dist/*.d.ts"
      }
    }
  }
}
```

## Tests

Les tests sont écrits avec Vitest et React Testing Library :

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Cliquez-moi</Button>)
    expect(screen.getByText('Cliquez-moi')).toBeInTheDocument()
  })
})
```

## Workflow de Développement

1. **Créer un composant** : `pnpm gen` → Choisir "create component"
2. **Développer avec rechargement à chaud** : `pnpm dev`
3. **Écrire des tests** : Ajouter des tests dans le dossier `tests/`
4. **Lancer les tests** : `pnpm test`
5. **Build pour la production** : `pnpm build`
6. **Synchroniser les exports** (si nécessaire) : `pnpm gen` → Choisir "sync exports"

## Licence

MIT
