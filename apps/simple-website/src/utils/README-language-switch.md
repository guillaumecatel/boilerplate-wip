# Switch de Langue dans le Header

Cette documentation explique comment le switch de langue dans le header n'affiche que les langues pour lesquelles le contenu est disponible.

## 🎯 Principe

Au lieu de toujours afficher toutes les langues disponibles, le header ne montre que les langues pour lesquelles la page courante a une traduction.

## 🔧 Architecture

### 1. Props du Header

Le composant `Header.astro` accepte maintenant une prop `availableLanguages` :

```typescript
export interface Props {
  availableLanguages?: Array<{ lang: string; href: string }>
}
```

### 2. Layout.astro comme Intermédiaire

Le `Layout.astro` utilise les `alternates` des metadata pour les deux composants :

```typescript
export interface Props {
  metadata: HeadProps
}
```

```astro
<Head {...metadata} />
<Header availableLanguages={metadata.alternates} />
```

### 3. Pages qui Fournissent les Langues

Chaque page génère et passe les langues disponibles.

## 📄 Exemples d'Utilisation

### Page de Post (Contenu Dynamique)

```astro
---
// [slug].astro
import { getPostGroups, findGroupBySlugAndLang } from '@/utils/multilang'

const post = await getEntry('posts', Astro.params.slug!)
const postGroups = await getPostGroups(siteUrl, 'fr')
const currentGroup = findGroupBySlugAndLang(
  postGroups,
  post.data.slug,
  post.data.lang,
)
const alternates = currentGroup ? currentGroup.getAlternateLinks() : []

const metadata = {
  title: post.data.title,
  description: post.data.description,
  alternates, // Utilisé à la fois pour Head et Header
}
---

<Layout metadata={metadata}>
  <!-- Contenu -->
</Layout>
```

### Page Statique (Homepage)

```astro
---
// index.astro
import { generateStaticPageAlternates } from '@/utils/multilang'

const alternates = generateStaticPageAlternates(
  locales,
  (locale) => localizeHref('/', { locale }),
  siteUrl,
)

const metadata = {
  description: 'Description',
  alternates, // Utilisé à la fois pour Head et Header
}
---
```

## 🎨 Rendu du Header

### Avec Traductions Disponibles

Si une page de post a 4 traductions (fr, en, de, ar) et que l'utilisateur est sur la version française :

```html
<div>
  <a
    href="/en/posts/sample-1"
    class="me-4"
    >EN</a
  >
  <a
    href="/de/artikel/beispiel-1"
    class="me-4"
    >DE</a
  >
  <a
    href="/ar/مقالات/نموذج-1"
    class="me-4"
    >AR</a
  >
</div>
```

### Sans Traductions

Si une page n'a pas de traductions ou si `availableLanguages` n'est pas fourni, aucun lien de langue n'est affiché.

## ✅ Avantages

- **UX améliorée** : Pas de liens vers des pages 404
- **Cohérent** : Même approche que pour les liens alternatifs
- **Simple** : Pas de logique complexe dans le composant Header
- **Flexible** : Fonctionne pour tous types de contenus
- **Maintenable** : Une seule source de vérité par page

## 🔄 Workflow

1. **Page** → Génère `alternates`
2. **Layout** → Transmet `alternates` aux deux composants
3. **Head** → Utilise `alternates` pour `<link rel="alternate">`
4. **Header** → Utilise `alternates` pour le switch de langue

Cette approche garantit que le switch de langue et les liens alternatifs sont toujours cohérents ! 🌐
