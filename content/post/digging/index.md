---
title: Digging
date: 2019-03-15
---

I dug up the tiny program I wrote to find [minimal surfaces](https://en.wikipedia.org/wiki/Minimal_surface) with fixed boundary in 2011 for the "grandes écoles" entrance exams.
Ah, the memories...

It's [available here](./minimale.zip), along with some pictures.
It's written in OCaml, of course!
To compile it, install OCaml, OCamlBuild, and the OpenGL libraries for OCaml.
Then run `ocamlbuild main.native`.
Controls are rudimentary: <kbd>SPC</kbd> to start/stop, left-click and scroll to move around, right-click to choose one of the four predefined boundaries, <kbd>s</kbd> to swap between full and hollow.
You then get images like this:

![Catenoid](./catenoide.png)

![Enneper surface](./enneper.png)

![Tetrahedron](./tetrahedron.png)

I absolutely do not guarantee that the program is correct.
The surfaces found do resemble the theoretical ones, but I do not have a mathematical proof that they are the right ones.
