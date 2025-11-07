---
title: 'Mon article de blog 2'
description: ''
slug: 'extrait-2'
lang: 'fr'
---

1. List item one.

- List item one continued with a second paragraph followed by an
  Indented block.
- .................
  $ ls _.sh
  $ mv_.sh ~/tmp
  .................
- List item continued with a third paragraph.

2. List item two continued with an open block.

---

This paragraph is part of the preceding list item.

a. This list is nested and does not require explicit item
continuation.

- This paragraph is part of the preceding list item.

b. List item b.

## This paragraph belongs to item two of the outer list.

And here is the equivalent in Markdown:

1.  List item one.

    List item one continued with a second paragraph followed by an
    Indented block.

        $ ls *.sh
        $ mv *.sh ~/tmp

    List item continued with a third paragraph.

2.  List item two continued with an open block.

    This paragraph is part of the preceding list item.
    1. This list is nested and does not require explicit item continuation.

       This paragraph is part of the preceding list item.

    2. List item b.

    This paragraph belongs to item two of the outer list.
