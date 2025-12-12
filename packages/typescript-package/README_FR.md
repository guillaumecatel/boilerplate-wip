# @myorg/typescript-package

Un package d'utilitaires TypeScript avec tests complets et builds automatisés.

[English version](./README.md)

## Fonctionnalités

- 📦 Exports ESM et CJS
- 🎯 TypeScript pur avec définitions de types complètes
- 🧪 Tests avec Vitest
- 🔄 Exports auto-générés depuis les fichiers source
- 🛠️ Construit avec tsdown pour une taille de bundle optimale
- 🛡️ Type guards et utilitaires inclus

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
pnpm add @myorg/typescript-package
```

## Utilisation

```typescript
import { isString, isNumber } from '@myorg/typescript-package'
// ou
import { isString } from '@myorg/typescript-package/guards'
import { kebabCase } from '@myorg/typescript-package/alias'

if (isString(value)) {
  console.log(value.toUpperCase())
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

Ce package inclut des générateurs Turbo pour créer de nouveaux utilitaires :

### Créer un Fichier TypeScript

```bash
# Depuis la racine du workspace
pnpm turbo gen @myorg/typescript-package create typescript file

# Ou depuis le dossier du package
pnpm gen
```

Cela va :

- Créer `src/votreFichier.ts`
- Créer `tests/votreFichier.test.ts`
- Mettre à jour les exports dans `package.json`
- Mettre à jour `src/index.ts`

### Synchroniser les Exports

Synchronise automatiquement les exports de `package.json` et `src/index.ts` avec tous les fichiers dans `src/` :

```bash
# Depuis la racine du workspace
pnpm turbo gen @myorg/typescript-package sync exports

# Ou depuis le dossier du package
pnpm gen
```

Cela scanne le dossier `src/` et met à jour :

- Toutes les déclarations d'export dans `src/index.ts`
- Tous les exports dans `package.json`
- Tous les exports de publishConfig dans `package.json`

## Structure du Projet

```text
typescript-package/
├── src/
│   ├── alias.ts            # Utilitaires de transformation de chaînes
│   ├── guards.ts           # Type guards
│   └── index.ts            # Point d'entrée principal
├── tests/
│   ├── alias.test.ts       # Tests des alias
│   └── guards.test.ts      # Tests des guards
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

## Utilitaires Inclus

### Type Guards (`guards.ts`)

```typescript
import {
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
} from '@myorg/typescript-package/guards'

// Utilitaires de vérification de type complets
if (isString(value)) {
  // TypeScript sait que value est une string ici
}
```

### Utilitaires de Chaînes (`alias.ts`)

```typescript
import {
  kebabCase,
  camelCase,
  pascalCase,
} from '@myorg/typescript-package/alias'

kebabCase('HelloWorld') // 'hello-world'
camelCase('hello-world') // 'helloWorld'
pascalCase('hello-world') // 'HelloWorld'
```

## Exports

Ce package utilise des exports conditionnels pour une compatibilité optimale :

```json
{
  "exports": {
    "./alias": "./src/alias.ts",
    "./guards": "./src/guards.ts",
    ".": "./src/index.ts"
  },
  "publishConfig": {
    "exports": {
      "./alias": {
        "import": "./dist/alias.js",
        "require": "./dist/alias.cjs",
        "types": "./dist/alias.d.ts"
      },
      "./guards": {
        "import": "./dist/guards.js",
        "require": "./dist/guards.cjs",
        "types": "./dist/guards.d.ts"
      },
      ".": {
        "import": "./dist/index.js",
        "require": "./dist/index.cjs",
        "types": "./dist/index.d.ts"
      }
    }
  }
}
```

## Tests

Les tests sont écrits avec Vitest :

```typescript
import { describe, expect, it } from 'vitest'
import { isString } from '@/guards'

describe('isString', () => {
  it('retourne true pour les chaînes', () => {
    expect(isString('hello')).toBe(true)
  })

  it('retourne false pour les non-chaînes', () => {
    expect(isString(123)).toBe(false)
  })
})
```

## Workflow de Développement

1. **Créer un fichier utilitaire** : `pnpm gen` → Choisir "create typescript file"
2. **Développer avec rechargement à chaud** : `pnpm dev`
3. **Écrire des tests** : Ajouter des tests dans le dossier `tests/`
4. **Lancer les tests** : `pnpm test`
5. **Build pour la production** : `pnpm build`
6. **Synchroniser les exports** (si nécessaire) : `pnpm gen` → Choisir "sync exports"

## Licence

MIT
