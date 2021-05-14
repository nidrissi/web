---
title: Exam Template for Pandoc
date: 2020-11-20
draft: false
tags: [code, teaching]
urls:
  source: https://github.com/nidrissi/exam-template
---

Like many people, I have been teaching online for some time now.
In order to help students get an idea of how well they understand the material, I have been giving them and grading weekly homework (keep in mind that it is not common in French universities to give homework in math bachelors).

I have been using the very nice [`exam`](https://www.ctan.org/pkg/exam) LaTeX class for some time.
It works well, but I found it annoying to copy/paste my template each time I want to create a new exam.
I decided to write a small template to be used with [Pandoc](https://pandoc.org/), so that I can also write my exams in Markdown rather than LaTeX.
It was not completely trivial since the `exam` class requires bullet items to use the `questions` and `parts` environment, and the `\question` and `\part` commands, which I did not want to retype manually all the time.
I thus wrote a little Pandoc filter to save some time.

_Update: This template is now [**available on GitHub**](https://github.com/nidrissi/exam-template). The GitHub version may be more up-to-date._

<!--more-->

Here is it [(`exam-template.tex`)](https://github.com/nidrissi/exam-template/blob/master/exam-template.tex):

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

The filter is here [(`exam-filter.lua`)](https://github.com/nidrissi/exam-template/blob/master/exam-filter.lua):

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

Here is an example exam [(`example.md`)](https://github.com/nidrissi/exam-template/blob/master/example.md):

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

To compile the file, [install Pandoc](https://pandoc.org/installing.html) (and LaTeX, obviously) then run the following command:

```
pandoc --pdf-engine lualatex --template exam-template.tex --lua-filter exam-filter.lua example.md --output example.pdf
```

Then you should get something like [`example.pdf`](https://github.com/nidrissi/exam-template/blob/master/example.pdf).
I recently started using [Visual Studio Code](https://code.visualstudio.com/) (after years of using Emacs), and here is a [`tasks.json`](https://github.com/nidrissi/exam-template/blob/master/tasks.json) that should work (assuming `exam-template.tex` and `exam-filter.lua` are at the root of your project):

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
