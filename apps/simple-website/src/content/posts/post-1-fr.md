---
title: 'Mon article de blog'
description: 'Mon premier article de blog'
slug: 'article-1'
locale: 'fr'
alternates:
  - locale: 'en'
    slug: 'post-1'
  - locale: 'fr'
    slug: 'article-1'
  - locale: 'de'
    slug: 'beispiel-1'
  - locale: 'ar'
    slug: 'نموذج1'
---

# Mon article de blog

Mon premier article de blog

## Syntaxe de base

Markdown est une syntaxe légère et facile à utiliser pour styliser vos écrits.

### En-têtes

Lorsque le contenu de l'article est important, vous pouvez utiliser des en-têtes pour segmenter :

```markdown
# En-tête 1

## En-tête 2

## Grand en-tête

### Petit en-tête
```

Les aperçus d'en-têtes perturberaient la structure de l'article, ils ne sont donc pas affichés ici.

### Gras et italique

```markdown
_Texte en italique_ et **Texte en gras**, ensemble donneront **_Texte en gras italique_**
```

Aperçu :

_Texte en italique_ et **Texte en gras**, ensemble donneront **_Texte en gras italique_**

### Liens

```markdown
Lien texte [Nom du lien](http://url-du-lien)
```

Aperçu :

Lien texte [Nom du lien](http://url-du-lien)

### Code en ligne

```markdown
Ceci est un `code en ligne`
```

Aperçu :

Ceci est un `code en ligne`

### Blocs de code

````markdown
```js
// calculer fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [\!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [\!code ++]
}
```
````

Aperçu :

```js
// calculer fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [!code ++]
}
```

Utilise actuellement shiki comme plugin de coloration syntaxique. Pour les langages supportés, consultez [Shiki: Languages](https://shiki.matsu.io/languages.html).

### Formule en ligne

```markdown
Ceci est une formule en ligne $e^{i\pi} + 1 = 0$
```

Aperçu :

Ceci est une formule en ligne $e^{i\pi} + 1 = 0$

### Blocs de formules

```markdown
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

Aperçu :

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

Utilise actuellement KaTeX comme plugin de formules mathématiques. Pour la syntaxe supportée, consultez [KaTeX Supported Functions](https://katex.org/docs/supported.html).

#### Images

```markdown
![Image](https://picsum.photos/200)
```

Aperçu :

![Image](https://picsum.photos/200)

#### Texte barré

```markdown
~~Texte barré~~
```

Aperçu :

~~Texte barré~~

### Listes

Liste non ordonnée régulière

```markdown
- 1
- 2
- 3
```

Aperçu :

- 1
- 2
- 3

Liste ordonnée régulière

```markdown
1. GPT-4
2. Claude Opus
3. LLaMa
```

Aperçu :

1. GPT-4
2. Claude Opus
3. LLaMa

Vous pouvez continuer à imbriquer la syntaxe dans les listes.

### Citations

```markdown
> Coup de feu, tonnerre, épée levée. Une scène de fleurs et de sang.
```

Aperçu :

> Coup de feu, tonnerre, épée levée. Une scène de fleurs et de sang.

Vous pouvez continuer à imbriquer la syntaxe dans les citations.

### Sauts de ligne

Markdown nécessite une ligne vide pour séparer les paragraphes.

```markdown
Si vous ne laissez pas de ligne vide
ce sera dans un seul paragraphe

Premier paragraphe

Deuxième paragraphe
```

Aperçu :

Si vous ne laissez pas de ligne vide
ce sera dans un seul paragraphe

Premier paragraphe

Deuxième paragraphe

### Séparateurs

Si vous avez l'habitude d'écrire des séparateurs, vous pouvez commencer une nouvelle ligne et saisir trois tirets `---` ou astérisques `***`. Laissez une ligne vide avant et après quand il y a des paragraphes :

```markdown
---
```

Aperçu :

---

## Techniques avancées

### Éléments HTML en ligne

Actuellement, seuls certains éléments HTML en ligne sont supportés, incluant `<kdb> <b> <i> <em> <sup> <sub> <br>`, tels que

#### Affichage de touches

```markdown
Utilisez <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Suppr</kbd> pour redémarrer l'ordinateur
```

Aperçu :

Utilisez <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Suppr</kbd> pour redémarrer l'ordinateur

#### Gras italique

```markdown
<b> Markdown s'applique également ici, comme _gras_ </b>
```

Aperçu :

<b> Markdown s'applique également ici, comme _gras_ </b>

### Autres écritures HTML

#### Blocs pliables

```markdown
<details><summary>Cliquez pour développer</summary>C'est caché</details>
```

Aperçu :

<details><summary>Cliquez pour développer</summary>C'est caché</details>

### Tableaux

```markdown
| En-tête1 | En-tête2 |
| -------- | -------- |
| Contenu1 | Contenu2 |
```

Aperçu :

| En-tête1 | En-tête2 |
| -------- | -------- |
| Contenu1 | Contenu2 |

### Notes de bas de page

```markdown
Utilisez [^note] pour ajouter une note de bas de page au point de référence.

Ensuite, à la fin du document, ajoutez le contenu de la note de bas de page (elle sera rendue à la fin de l'article par défaut).

[^note]: Voici le contenu de la note de bas de page
```

Aperçu :

Utilisez [^note] pour ajouter une note de bas de page au point de référence.

Ensuite, à la fin du document, ajoutez le contenu de la note de bas de page (elle sera rendue à la fin de l'article par défaut).

[^note]: Voici le contenu de la note de bas de page

### Listes de tâches

```markdown
- [ ] Tâche incomplète
- [x] Tâche terminée
```

Aperçu :

- [ ] Tâche incomplète
- [x] Tâche terminée

### Échappement de symboles

Si vous devez utiliser des symboles markdown comme \_ # \* dans votre description mais ne voulez pas qu'ils soient échappés, vous pouvez ajouter une barre oblique inversée avant ces symboles, comme `\_` `\#` `\*` pour l'éviter.

```markdown
\_Ne veut pas que le texte ici soit en italique\_

\*\*Ne veut pas que le texte ici soit en gras\*\*
```

Aperçu :

\_Ne veut pas que le texte ici soit en italique\_

\*\*Ne veut pas que le texte ici soit en gras\*\*

---

## Intégration de composants Astro et React

Utilisez la syntaxe MDX
