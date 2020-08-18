---
title: Modèle de lettres en LaTeX
date: 2020-08-18
draft: false
tags: [latex]
---

Plusieurs personnes m'ont demandé mon modèle LaTeX pour les lettres que j'écris, donc au cas où je le mets aussi sur mon site web.
J'utilise le paquet [`scrlttr2`](https://www.ctan.org/pkg/scrlttr2).
Je pense que le code est plutôt clair, les paramètres ont des noms explicatifs.
Vous pouvez télécharger [le fichier `letter.tex` ici](letter.tex), et regarder à quoi [le résultat final `letter.pdf` ressemble](letter.pdf).
<!--more-->

Pour utiliser ce modèle, il faut une copie de votre signature et le logo de votre université dans le même dossier, dans des images nommées `signature.(png|jpg|...)` et `logo.(png|jpg|...)` ; bien sûr, cela peut être paramétré.

Si vous voulez que votre lettre soit aux normes françaises (destinataire à droite, expéditeur à gauche, compatible avec les enveloppes à fenêtre standards), ajoutez l'option `NF` à la commande `\documentclass`.
N'oubliez pas de changer aussi le paramètre de la command `\setmainlanguage`.
D'autres options sont disponibles : vous les trouverez dans la section "Letter Class Option Files" du manuel du paquet `scrlttr2`.

```tex
\documentclass[foldmarks=false, backaddress=false, fromemail, fromlogo, fromrule]{scrlttr2}

\usepackage{polyglossia}
\setmainlanguage{english}

\usepackage[babel]{microtype}
\usepackage{unicode-math}
% Fonts can be customized here.
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}[Scale=MatchLowercase]

\usepackage{xspace}
\usepackage{graphicx}
\usepackage{hyperref}

\begin{document}

% Your information.
\setkomavar{fromname}{Your Name}
\setkomavar{fromemail}{your@email.com}
\setkomavar{fromaddress}{University of Somewhere\\12345 Main Road\\Pallet Town}
\setkomavar{fromlogo}{\includegraphics[height=2cm]{logo}}
\setkomavar{place}{Your Location} % The city in which you write the letter.
% \setkomavar{date}{...} % default: current date.

% If you wish to sign your letter by hand, remove the following two commands.
\setplength{sigbeforevskip}{0pt}                                           % removes the space reserved for a handwritten signature
\setkomavar{signature}{\includegraphics[height=2cm]{signature}\\Your Name} % inserts the picture of the signature and your name

% The recipient's information.
\begin{letter}{Prof. Recipient\\University of Elsewhere\\...more address info...}
  \setkomavar{subject}{Subject of the letter} % optional
  \opening{Dear ...,}

  This is an extremely interesting letter. Please read it!

  \closing{Best regards,}
\end{letter}

% You can include multiple \begin{letter} ... \end{letter} blocks in a single file.
% This will produce multiple letters with the same sender information.
\end{document}
```

Comme j'utilise [`polyglossia`](https://www.ctan.org/pkg/polyglossia) (pour les paramètres liés à la langue) et [`unicode-math`](https://www.ctan.org/pkg/unicode-math) (pour les polices), le fichier doit être compilé avec XeLaTeX ou LuaLaTeX.
Si vous souhaitez utiliser PDFLaTeX à la place, enlevez ces deux paquets et les commandes `\setmainfont` et `\setmathfont`, puis rajoutez ces deux lignes au début du préambule :

```tex
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
```
