---
title: Modèle de lettres en LaTeX
date: 2020-08-18
draft: false
tags: [code]
urls:
  source: https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00
---

Plusieurs personnes m'ont demandé mon modèle LaTeX pour les lettres que j'écris, donc au cas où je le mets aussi sur mon site web.
J'utilise le paquet [`scrlttr2`](https://www.ctan.org/pkg/scrlttr2).
Je pense que le code est plutôt clair, les paramètres ont des noms explicatifs.
Vous pouvez télécharger [le fichier `letter.tex` ici](), et regarder à quoi [le résultat final `letter.pdf` ressemble](letter.pdf).

<!--more-->

Pour utiliser ce modèle, il faut une copie de votre signature et le logo de votre université dans le même dossier, dans des images nommées `signature.(png|jpg|...)` et `logo.(png|jpg|...)` ; bien sûr, cela peut être paramétré.

Si vous voulez que votre lettre soit aux normes françaises (destinataire à droite, expéditeur à gauche, compatible avec les enveloppes à fenêtre standards), ajoutez l'option `NF` à la commande `\documentclass`.
N'oubliez pas de changer aussi le paramètre de la command `\setmainlanguage`.
D'autres options sont disponibles : vous les trouverez dans la section "Letter Class Option Files" du manuel du paquet `scrlttr2`.

**[Le code est sur GitHub.](https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00)**
Vous pouvez aussi <a href="#" data-toggle="collapse" data-target="#gist-collapse" aria-expanded="false" aria-controls="gist-collapse">le trouver ici</a>.
Le résultat final [ressemble à ce PDF](letter.pdf).

<div class="collapse" id="gist-collapse">
<script src="https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00.js"></script>
</div>

Comme j'utilise [`polyglossia`](https://www.ctan.org/pkg/polyglossia) (pour les paramètres liés à la langue) et [`unicode-math`](https://www.ctan.org/pkg/unicode-math) (pour les polices), le fichier doit être compilé avec XeLaTeX ou LuaLaTeX.
Si vous souhaitez utiliser PDFLaTeX à la place, enlevez ces deux paquets et les commandes `\setmainfont` et `\setmathfont`, puis rajoutez ces deux lignes au début du préambule :

```tex
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
```
