---
title: "Little cubes operad"
tags: math algtop operads
draft: 1
---

The little cubes operads (and their variants: little disks operads, Fulton--MacPherson operads...) are fundamental objects in some parts algebraic topology. Initially used to study iterated loop spaces, they have proven to be very interesting objects.

Detailed accounts about these operads can be found online and in books, so I won't try to write one. The main goal of this post is to tie in with the [previous post]({% post_url 2015-12-23-eckmann-hilton %}) about the Eckmann--Hilton argument and give a few references.

<!--more-->

## Link with the Eckmann--Hilton argument

Do you remember this picture which showed that $$\pi_2(X)$$ was abelian?

![homotopy between fg and gf](/images/eh-arg-htpy.png){:.img-responsive width="550px"}

What's going here is that there are two kinds of multiplication: "horizontal" $$a \mid b$$ and "vertical" $$\frac{a}{b}$$. The Eckmann--Hilton argument provides a path from $$a \mid b$$ to $$b \mid a$$ going through $$\frac{a}{b}$$. And if you apply the argument again, you get a path from $$b \mid a$$ to $$a \mid b$$... but which goes through $$\frac{b}{a}$$ this time! There's something nontrivial going on.
