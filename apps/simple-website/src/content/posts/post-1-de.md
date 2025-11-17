---
title: 'Mein Blog-Beitrag'
description: 'Mein erster Blog-Beitrag'
slug: 'beispiel-1'
locale: 'de'
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

# Mein Blog-Beitrag

Mein erster Blog-Beitrag

## Grundlegende Syntax

Markdown ist eine leichtgewichtige und einfach zu verwendende Syntax zum Gestalten Ihrer Texte.

### Überschriften

Wenn der Inhalt des Artikels umfangreich ist, können Sie Überschriften zur Segmentierung verwenden:

```markdown
# Überschrift 1

## Überschrift 2

## Große Überschrift

### Kleine Überschrift
```

Überschriftsvorschauen würden die Struktur des Artikels stören, daher werden sie hier nicht angezeigt.

### Fett und Kursiv

```markdown
_Kursiver Text_ und **Fetter Text**, zusammen wird es **_Fett-kursiver Text_**
```

Vorschau:

_Kursiver Text_ und **Fetter Text**, zusammen wird es **_Fett-kursiver Text_**

### Links

```markdown
Textlink [Link-Name](http://link-url)
```

Vorschau:

Textlink [Link-Name](http://link-url)

### Inline-Code

```markdown
Dies ist ein `Inline-Code`
```

Vorschau:

Dies ist ein `Inline-Code`

### Code-Blöcke

````markdown
```js
// fibonacci berechnen
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [\!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [\!code ++]
}
```
````

Vorschau:

```js
// fibonacci berechnen
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [!code ++]
}
```

Verwendet derzeit shiki als Code-Hervorhebungs-Plugin. Für unterstützte Sprachen siehe [Shiki: Languages](https://shiki.matsu.io/languages.html).

### Inline-Formel

```markdown
Dies ist eine Inline-Formel $e^{i\pi} + 1 = 0$
```

Vorschau:

Dies ist eine Inline-Formel $e^{i\pi} + 1 = 0$

### Formel-Blöcke

```markdown
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

Vorschau:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

Verwendet derzeit KaTeX als Mathe-Formel-Plugin. Für unterstützte Syntax siehe [KaTeX Supported Functions](https://katex.org/docs/supported.html).

#### Bilder

```markdown
![Bild](https://picsum.photos/200)
```

Vorschau:

![Bild](https://picsum.photos/200)

#### Durchgestrichen

```markdown
~~Durchgestrichen~~
```

Vorschau:

~~Durchgestrichen~~

### Listen

Reguläre ungeordnete Liste

```markdown
- 1
- 2
- 3
```

Vorschau:

- 1
- 2
- 3

Reguläre geordnete Liste

```markdown
1. GPT-4
2. Claude Opus
3. LLaMa
```

Vorschau:

1. GPT-4
2. Claude Opus
3. LLaMa

Sie können die Syntax innerhalb von Listen weiter verschachteln.

### Blockzitate

```markdown
> Schuss, Donner, Schwert erhebt sich. Eine Szene aus Blumen und Blut.
```

Vorschau:

> Schuss, Donner, Schwert erhebt sich. Eine Szene aus Blumen und Blut.

Sie können die Syntax innerhalb von Blockzitaten weiter verschachteln.

### Zeilenumbrüche

Markdown benötigt eine Leerzeile, um Absätze zu trennen.

```markdown
Wenn Sie keine Leerzeile lassen
wird es in einem Absatz sein

Erster Absatz

Zweiter Absatz
```

Vorschau:

Wenn Sie keine Leerzeile lassen
wird es in einem Absatz sein

Erster Absatz

Zweiter Absatz

### Trennzeichen

Wenn Sie die Angewohnheit haben, Trennzeichen zu schreiben, können Sie eine neue Zeile beginnen und drei Bindestriche `---` oder Sternchen `***` eingeben. Lassen Sie eine Leerzeile davor und danach, wenn es Absätze gibt:

```markdown
---
```

Vorschau:

---

## Fortgeschrittene Techniken

### Inline-HTML-Elemente

Derzeit werden nur einige Inline-HTML-Elemente unterstützt, einschließlich `<kdb> <b> <i> <em> <sup> <sub> <br>`, wie zum Beispiel

#### Tastenanzeige

```markdown
Verwenden Sie <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>Entf</kbd> zum Neustarten des Computers
```

Vorschau:

Verwenden Sie <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>Entf</kbd> zum Neustarten des Computers

#### Fett-kursiv

```markdown
<b> Markdown gilt auch hier, wie z.B. _fett_ </b>
```

Vorschau:

<b> Markdown gilt auch hier, wie z.B. _fett_ </b>

### Andere HTML-Schreibweisen

#### Einklappbare Blöcke

```markdown
<details><summary>Klicken zum Erweitern</summary>Es ist versteckt</details>
```

Vorschau:

<details><summary>Klicken zum Erweitern</summary>Es ist versteckt</details>

### Tabellen

```markdown
| Kopfzeile1 | Kopfzeile2 |
| ---------- | ---------- |
| Inhalt1    | Inhalt2    |
```

Vorschau:

| Kopfzeile1 | Kopfzeile2 |
| ---------- | ---------- |
| Inhalt1    | Inhalt2    |

### Fußnoten

```markdown
Verwenden Sie [^fußnote], um eine Fußnote an der Referenzstelle hinzuzufügen.

Fügen Sie dann am Ende des Dokuments den Inhalt der Fußnote hinzu (sie wird standardmäßig am Ende des Artikels gerendert).

[^fußnote]: Hier ist der Inhalt der Fußnote
```

Vorschau:

Verwenden Sie [^fußnote], um eine Fußnote an der Referenzstelle hinzuzufügen.

Fügen Sie dann am Ende des Dokuments den Inhalt der Fußnote hinzu (sie wird standardmäßig am Ende des Artikels gerendert).

[^fußnote]: Hier ist der Inhalt der Fußnote

### Aufgabenlisten

```markdown
- [ ] Unvollständige Aufgabe
- [x] Abgeschlossene Aufgabe
```

Vorschau:

- [ ] Unvollständige Aufgabe
- [x] Abgeschlossene Aufgabe

### Symbol-Escaping

Wenn Sie Markdown-Symbole wie \_ # \* in Ihrer Beschreibung verwenden müssen, aber nicht möchten, dass sie escaped werden, können Sie einen Backslash vor diese Symbole setzen, wie z.B. `\_` `\#` `\*`, um dies zu vermeiden.

```markdown
\_Möchte nicht, dass der Text hier kursiv ist\_

\*\*Möchte nicht, dass der Text hier fett ist\*\*
```

Vorschau:

\_Möchte nicht, dass der Text hier kursiv ist\_

\*\*Möchte nicht, dass der Text hier fett ist\*\*

---

## Einbettung von Astro- und React-Komponenten

Verwenden Sie MDX-Syntax
