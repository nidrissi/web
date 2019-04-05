---
title: Miscellaneous
lastmod: 2019-03-15
date: 2018-01-01
menu:
  main:
    weight: 40
    name: Misc
    pre: <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" class="svg-inline--fa fa-project-diagram fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg>
---

From January to June 2019, I organize a [reading seminar on homological stability]({{< ref path="gdt-stabilite" lang="fr" >}}) with Mario Gonçalves Lamas following an idea of Muriel Livernet.

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

I am active on [MathOverflow](https://mathoverflow.net/users/36146/najib-idrissi) and [Math StackExchange](https://math.stackexchange.com/users/10014/najib-idrissi).
