# Liens Alternatifs dans le Head

Ce guide explique comment passer les liens `rel="alternate"` au composant `Head.astro` via les metadata du layout.

## 🎯 Configuration Head.astro

Le composant `Head.astro` est déjà configuré pour recevoir les liens alternatifs :

```typescript
export interface Props {
  // ... autres props
  alternates?: { lang: string; href: string }[]
}

const { alternates = [] } = Astro.props
```

Et les affiche automatiquement :

```astro
{
  alternates.map((locale) => (
    <link
      rel='alternate'
      hreflang={locale.lang}
      href={locale.href}
    />
  ))
}
```

## 🚀 Utilisation

### 1. Pages de posts dynamiques

```astro
---
// src/pages/posts/[slug].astro
import { getPostGroups, findGroupBySlugAndLang } from '@/utils/multilang'

const post = await getEntry('posts', Astro.params.slug!)
const siteUrl = Astro.site?.href || import.meta.env.SITE
const postGroups = await getPostGroups(siteUrl, 'fr')
const currentGroup = findGroupBySlugAndLang(
  postGroups,
  post.data.slug,
  post.data.lang,
)

const metadata = {
  title: post.data.title,
  description: post.data.description,
  alternates: currentGroup ? currentGroup.getAlternateLinks() : [],
}
---

<Layout metadata={metadata}>
  <!-- Contenu de la page -->
</Layout>
```

### 2. Pages statiques (Homepage)

```astro
---
// src/pages/index.astro
import { generateStaticPageAlternates } from '@/utils/multilang'
import { locales, localizeHref } from '@/i18n/runtime'

const siteUrl = Astro.site?.href || import.meta.env.SITE

const alternates = generateStaticPageAlternates(
  locales,
  (locale) => localizeHref('/', { locale }),
  siteUrl,
)

const metadata = {
  description: 'Description de la page',
  alternates,
}
---

<Layout metadata={metadata}>
  <!-- Contenu de la page -->
</Layout>
```

### 3. Autres pages statiques

```astro
---
// src/pages/about.astro
import { generateStaticPageAlternates } from '@/utils/multilang'

const siteUrl = Astro.site?.href || import.meta.env.SITE

const alternates = generateStaticPageAlternates(
  locales,
  (locale) => {
    const paths = {
      fr: '/a-propos',
      en: '/en/about',
      ar: '/ar/حول',
      de: '/de/uber-uns',
    } as const
    return paths[locale as keyof typeof paths] || '/about'
  },
  siteUrl,
)

const metadata = {
  title: 'À propos',
  description: 'Description',
  alternates,
}
---
```

## 📊 Résultat HTML

Pour un post avec 4 traductions, le head contiendra :

```html
<link
  rel="alternate"
  hreflang="fr"
  href="https://example.com/articles/extrait-1" />
<link
  rel="alternate"
  hreflang="en"
  href="https://example.com/en/posts/sample-1" />
<link
  rel="alternate"
  hreflang="de"
  href="https://example.com/de/artikel/beispiel-1" />
<link
  rel="alternate"
  hreflang="ar"
  href="https://example.com/ar/مقالات/نموذج-1" />
```

## ✅ Avantages

- **Automatique** : Les liens sont générés automatiquement
- **Type-safe** : TypeScript vérifie les types
- **Réutilisable** : Fonctionne pour tous types de pages
- **SEO optimisé** : Conforme aux standards hreflang
- **Centralisé** : Gestion dans les metadata du layout

## 🔧 Interface Metadata

Votre interface `Props` du layout doit inclure :

```typescript
export interface Props {
  title?: string
  description?: string
  alternates?: { lang: string; href: string }[]
  // ... autres props
}
```

Les liens alternatifs sont maintenant automatiquement inclus dans le head de toutes vos pages ! 🌐
