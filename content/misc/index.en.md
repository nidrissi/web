---
title: Miscellaneous
lastMod: 2021-03-22
date: 2018-01-01
menu:
  main:
    weight: 99
    name: Misc
    pre: '<i class="fas fa-project-diagram"></i>'
---

I am/was a member of:

- The [GDR Algebraic Topology and Applications](http://gdrtop.math.cnrs.fr).
- (2014--2015) The [ANR project "Algebraic Homotopy, Operads and Grothendieck-Teichmüller groups" (HOGT)](http://math.univ-lille1.fr/~operads/) coordinated by Benoit Fresse.
- (2021--2024) The [ANR project "Higher Algebra, Geometry, and Topology" (HighAGT)](https://anr-highagt.pages.math.cnrs.fr/) coordinated by Bruno Vallette.

---

I have written a tool which I called [arXiv2BibLaTeX](https://a2b.idrissi.eu) to produce BibLaTeX entries from arXiv preprints.
It is of course open source: the code is hosted on [GitHub](https://github.com/nidrissi/a2b).

---

From January to June 2019, I organized a [reading seminar on homological stability and the works of Galatius--Kupers--Randal-Williams]({{< ref path="gdt/stabilite" lang="fr" >}}) with Mario Gonçalves Lamas following an idea of Muriel Livernet.

---

For the "Grandes Écoles" competitive entrance exams in 2011, I wrote a tiny program to find [minimal surfaces](https://en.wikipedia.org/wiki/Minimal_surface) with fixed boundary.
It's not very mature, it doesn't work all the time and it's not well-documented, but [it is available here.](minimale.zip)
To compile it, install OCaml, OCamlBuild, and the OpenGL libraries for OCaml.
Then run `ocamlbuild main.native`.
Controls are rudimentary: <kbd>SPC</kbd> to start/stop, left-click and scroll to move around, right-click to choose one of the four predefined boundaries, <kbd>s</kbd> to swap between full and hollow.
You then get images like this:

<div class="row">
<figure class="figure col-md-4">
<img src="catenoide.png" alt="Catenoid" class="figure-img img-fluid">
<figcaption class="figure-caption"><a href="https://fr.wikipedia.org/wiki/Cat%C3%A9no%C3%AFde">Catenoid</a>.</figcaption>
</figure>

<figure class="figure col-md-4">
<img src="enneper.png" alt="Enneper surface" class="figure-img img-fluid">
<figcaption class="figure-caption"><a href="https://en.wikipedia.org/wiki/Enneper_surface">Enneper surface</a>.</figcaption>
</figure>

<figure class="figure col-md-4">
<img src="tetrahedron.png" alt="Weird tetrahedron" class="figure-img img-fluid">
<figcaption class="figure-caption">Weird tetrahedron.</figcaption>
</figure>
</div>

I absolutely do not guarantee that the program is correct.
The surfaces found do resemble the theoretical ones, but I do not have a mathematical proof that they are the right ones.

---

<a href="https://math.stackexchange.com/users/10014/najib-idrissi"><img src="https://math.stackexchange.com/users/flair/10014.png" width="208" height="58" alt="profile for Najib Idrissi at Mathematics Stack Exchange, Q&amp;A for people studying math at any level and professionals in related fields" title="profile for Najib Idrissi at Mathematics Stack Exchange, Q&amp;A for people studying math at any level and professionals in related fields"></a>
<a href="https://mathoverflow.net/users/36146/najib-idrissi"><img src="https://mathoverflow.net/users/flair/36146.png" width="208" height="58" alt="profile for Najib Idrissi at MathOverflow, Q&amp;A for professional mathematicians" title="profile for Najib Idrissi at MathOverflow, Q&amp;A for professional mathematicians"></a>

I am active on [MathOverflow](https://mathoverflow.net/users/36146/najib-idrissi) and [Math StackExchange](https://math.stackexchange.com/users/10014/najib-idrissi).

---

This website is built using the static website generator [Hugo](https://gohugo.io/) and a heavily modified version of the [Academic](https://sourcethemes.com/academic/) theme.
[The source is on GitHub.](https://github.com/nidrissi/nidrissi)
My [dotfiles](https://github.com/nidrissi/dotfiles) are also on GitHub.
