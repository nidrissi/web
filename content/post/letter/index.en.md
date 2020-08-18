---
title: Template for letters in LaTeX
date: 2020-08-18
draft: false
tags: [latex]
---

Several people have asked me for my LaTeX template to write letters, so I guess I might as well put it up on my webpage.
It uses the [`scrlttr2`](https://www.ctan.org/pkg/scrlttr2) package.
I think the markup is relatively self-explanatory.
You can download the [`letter.tex` file here](letter.tex), and the [preview `letter.pdf` here](letter.pdf).
<!--more-->

It expects a copy of your signature and the logo of your university in the same folder, in images named `signature.(png|jpg|...)` and `logo.(png|jpg|...)`; this can of course be customized.

If you would like to your letter to be formatted with French norms (recipient on the right, sender on the left, compatible with standard windowed letters), add the `NF` option to the `\documentclass` command.
Remember to also change the parameter of the `\setmainlanguage` command.
Other options are available, see "Letter Class Option Files" in the `scrlttr2` manual.

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

Since I use [`polyglossia`](https://www.ctan.org/pkg/polyglossia) (for language-specific settings) and [`unicode-math`](https://www.ctan.org/pkg/unicode-math) (for the fonts), the file needs to be compiled with either XeLaTeX or LuaLaTeX.
If you do not want this, then remove these two packages, the `\setmainfont` and `\setmathfont` commands, and add the following lines at the beginning of the preamble:

```tex
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
```

