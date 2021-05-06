---
title: Template for letters in LaTeX
date: 2020-08-18
draft: false
tags: [code]
urls:
  source: https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00
---

Several people have asked me for my LaTeX template to write letters, so I guess I might as well put it up on my webpage.
It uses the [`scrlttr2`](https://www.ctan.org/pkg/scrlttr2) package.
I think the markup is relatively self-explanatory.

<!--more-->

The template expects a copy of your signature and the logo of your university in the same folder, in images named `signature.(png|jpg|...)` and `logo.(png|jpg|...)`; this can of course be customized.

If you would like to your letter to be formatted with French norms (recipient on the right, sender on the left, compatible with standard windowed letters), add the `NF` option to the `\documentclass` command.
Remember to also change the parameter of the `\setmainlanguage` command.
Other options are available, see "Letter Class Option Files" in the `scrlttr2` manual.

**[The code is available on GitHub.](https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00)**
You can also <a href="#" data-bs-toggle="collapse" data-bs-target="#gist-collapse" aria-expanded="false" aria-controls="gist-collapse">find it here</a>.
The end result [looks like this PDF](letter.pdf).

<div class="collapse" id="gist-collapse">
<script src="https://gist.github.com/nidrissi/7b9d8f2f1a80837090e84160e68e8f00.js"></script>
</div>

Since I use [`polyglossia`](https://www.ctan.org/pkg/polyglossia) (for language-specific settings) and [`unicode-math`](https://www.ctan.org/pkg/unicode-math) (for the fonts), the file needs to be compiled with either XeLaTeX or LuaLaTeX.
If you do not want this, then remove these two packages, the `\setmainfont` and `\setmathfont` commands, and add the following lines at the beginning of the preamble:

```tex
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
```
