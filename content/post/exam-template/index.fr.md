---
title: Modèle Pandoc pour les examens
date: 2020-11-20
draft: false
tags: [teaching, latex]
---

Comme beaucoup, j'enseigne en ligne depuis un petit moment.
Pour aider les étudiants à savoir où ils en sont, je leur donne des DM hebdomadaires.

J'utilise la classe LaTeX [`exam`](https://www.ctan.org/pkg/exam) depuis un moment.
Elle marche bien, mais j'en avais assez de copier/coller mon modèle à chaque fois que je crée un nouvel examen.
J'ai décidé d'écrire un petit modèle [Pandoc](https://pandoc.org/), ce qui me permet également d'écrire mes examens en Markdown.
Ce n'était pas complètement trivial, car la classe `exam` utilise les environnements `questions` et `parts`, et les commandes `\question` et `\part`, que je ne voulais pas réécrire à chaque fois.
J'ai donc écrit un petit filtre Pandoc pour gagner du temps.

_Màj : Ce modèle est désormais [disponible sur GitHub](https://github.com/nidrissi/exam-template)_

<!--more-->

Voici [(`exam-template.tex`)](https://github.com/nidrissi/exam-template/blob/master/exam-template.tex) :

```latex
\documentclass[12pt, a4paper $if(réponses)$, answers $endif$]{exam}

\usepackage{polyglossia}
\setmainlanguage{french} % change to your favorite language

\usepackage[babel]{microtype}
\usepackage{amsmath, amssymb, mathtools, mathrsfs}
\usepackage{enumitem}

% fonts can be customized here
\usepackage{unicode-math}
\defaultfontfeatures{Ligatures=TeX}
\setmainfont{TeX Gyre Pagella}
\setsansfont{Linux Biolinum O}[Scale=MatchLowercase]
\setmonofont{Cascadia Mono}[Scale=MatchLowercase]
\setmathfont{TeX Gyre Pagella Math}[Scale=MatchLowercase]

\usepackage[svgnames]{xcolor}

$if(tikz)$
    \usepackage{tikz}
    \usepackage{pgfplots}
    \pgfplotsset{compat=1.17}
$endif$

% for some reason pandoc uses this
\newcommand{\tightlist}{}

% put your custom macros here
\newcommand{\N}{\mathbb{N}}
\newcommand{\R}{\mathbb{R}}

\shadedsolutions

% change your institution here
\header{$cours.court$}{}{Université de Paris}
\runningheadrule{}

% customize question format here
\renewcommand{\thequestion}{\bfseries \sffamily Exercice \arabic{question}}
\renewcommand{\thepartno}{\arabic{question}\alph{partno}}

\title{\sffamily $titre$}
\author{$cours.long$}
\date{$date$}

\begin{document}
\maketitle
\thispagestyle{headandfoot}

\begin{questions}
    $body$
\end{questions}
\end{document}
```

Et voici le filtre [(`exam-filter.lua`)](https://github.com/nidrissi/exam-template/blob/master/exam-filter.lua) :

```lua
function Div(el)
        return {
          pandoc.RawBlock("latex", "\\begin{" .. el.classes[1] .. "}"),
          el,
          pandoc.RawBlock("latex", "\\end{" .. el.classes[1] .. "}")
        }
end

function Str(e)
  if e.text == "@q" then
    return pandoc.RawInline("latex", "\\question")
  elseif e.text == "@p" then
    return pandoc.RawInline("latex", "\\part")
  else
    return e
  end
end
```

Enfin, voici un examen d'exemple, [(`example.md`)](https://github.com/nidrissi/exam-template/blob/master/example.md) :

```markdown
---
titre: Exam title
cours:
  court: Short course name
  long: Long course name
date: Date / deadline
réponses: false # set to true to show answers
---

@q This is the first question.

:::solution
Solution to the first question.
:::

@q This is the second question.

:::parts
@p This question has parts!

::: solution
And parts can have solutions too.
:::

@p Multiple parts are possible.

::: solution
And each one gets a solution!
:::

<!-- don't forget to close the :::parts -->

:::
```

Pour compiler l'exemple, [installez Pandoc](https://pandoc.org/installing.html) (et LaTeX évidemment), puis lancez la commande :
pandoc --pdf-engine lualatex --template exam-template.tex --lua-filter exam-filter.lua example.md --output example.pdf

Vous devriez obtenir un PDF qui ressemble à [`example.pdf`](https://github.com/nidrissi/exam-template/blob/master/example.pdf).
J'ai récemment commencé à utiliser [Visual Studio Code](https://code.visualstudio.com/) (après des années passées sur Emacs), et voici un [`tasks.json`](https://github.com/nidrissi/exam-template/blob/master/tasks.json) qui devrait marcher (en supposant que `exam-template.tex` et `exam-filter.lua` soient à la racine de votre projet) :

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Pandoc",
      "type": "process",
      "group": {
        "kind": "build"
      },
      "command": "pandoc",
      "args": [
        "--verbose",
        "--pdf-engine",
        "lualatex",
        "--template",
        "exam-template.tex",
        "--lua-filter",
        "exam-filter.lua",
        "${file}",
        "--output",
        "${relativeFileDirname}/${fileBasenameNoExtension}.pdf"
      ],
      "problemMatcher": []
    }
  ]
}
```
