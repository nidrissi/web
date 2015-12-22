---
title: "The Eckmann–Hilton argument"
draft: 1
---

As promised, this post is about the famous
[Eckmann--Hilton argument](https://en.wikipedia.org/wiki/Eckmann%E2%80%93Hilton_argument). This
argument, on the surface, looks like a simple algebraic trick; but it
has deep consequences, which I will now try to explain. This post is
an expanded version of a
[math.SE answer](http://math.stackexchange.com/a/1203969/10014) I
wrote some time ago.

## Some background

When I was a first-year student at the ENS, we had to write a
"*Mémoire de première année*" ("First-year essay") on a topic. I wrote
mine together with Maxence Novel, with Grégory Ginot as advisor, about
the Eckmann--Hilton argument. You can find it
[here](/files/memoire-eckmann-hilton.pdf) (it's in French; bear in
mind that we were undergrads when we wrote this).

This was my first exposure to many topics: algebraic topology,
operads, $\infty$-categories... And it definitely shaped up my current
mathematical interests. I still remember trying to read Lurie's
*Higher Algebra* armed only with point-set topology and basic category
theory! Needless to say I didn't get very far. I very much enjoyed the
experience anyway.

## The argument

Without further ado, here is the theorem:

> **Theorem (Eckmann--Hilton argument).** Let $M$ be a set equipped
> with two [monoid](https://en.wikipedia.org/wiki/Monoid) structures
> $$(M,*)$$ and $$(M, \cdot)$$ sharing the same unit $1 \in M$. Assume
> that they satisfy the *interchange law*:
> \\[ (a \cdot b) * (c \cdot d) = (a * c) \cdot (b * d), \; \forall a,b,c,d \in M. \\]
> Then both structures are equal ($a * b = a \cdot b$) and moreover
> they are commutative ($a * b = b * a$).

Basically, what this means is that if you have a set with two
"compatible" laws on it, then they are equal *and commutative*. It's
rather powerful. This theorem can be further refined: you don't need
to assume that both laws have the same unit, and you don't even have
to assume that they are commutative. It all follows from the
interchange law. But for the sack of simplicity I'll stick with these
assumptions.

The proof is amazingly concise:

$$\begin{align}
a * b
& = (a \cdot 1) * (1 \cdot b) \\
& = (a * 1) \cdot (1 * b) \\
a * b & = a \cdot b \\
& = (1 * a) \cdot (b * 1) \\
& = (1 \cdot b) * (a \cdot 1) \\
a * b & = b * a.
\end{align}$$

Pretty nifty!

### Interpretation

One can reformulate the interchange law: it is equivalent to the fact
that $$* : (M, \cdot)^2 \to (M, \cdot)$$ is a morphism of monoids, and
also equivalently, $$\cdot : (M, *)^2 \to (M, *)$$ is a morphism of
monoids. Thus we get a reformulation of the Eckmann--Hilton argument
(sorry folks, this blog will contain a lot of category theory):

> **Reformulation.** A
> [monoid object](https://en.wikipedia.org/wiki/Monoid_(category_theory))
> in the category of monoids is an abelian monoid.

Reformulated in this way, the argument immediately generalizes. Let
$(\mathsf{C}, \otimes)$ be a monoidal category. The category
$\mathsf{Mon}(\mathsf{C})$ is the category of monoid objects in
$\mathsf{C}$: its objects are triplet $(M, \mu, \eta)$, where $M$ is
an object of $\mathsf{C}$, $\mu : M^2 \to M$ and $\eta :
1_{\mathsf{C}} \to M$ satisfy the axioms of a monoid (associativity,
unitality).

If $\mathsf{C}$ is symmetric monoidal, then $\mathsf{Mon}(C)$ can be
equipped with a tensor product. If $(M, \mu, \eta)$ and $(M', \mu',
\eta')$ are two monoids, their tensor product is defined to be $(M
\otimes M', \tilde{\mu}, \eta \otimes \eta')$, where $\tilde{\mu}$ is
the composite (I'm forgetting about associativity constraints):

$$M \otimes M' \otimes M \otimes M' \xrightarrow{\operatorname{id}
\otimes \sigma_{M, M'} \otimes \operatorname{id}} M \otimes M \otimes
M' \otimes M' \xrightarrow{\mu \otimes \mu'} M \otimes M'.$$

So one can speak about monoid objects inside
$\mathsf{Mon}(\mathsf{CC})$. Then the Eckmann--Hilton argument says:

> **Theorem.** Let $(\mathsf{C}, \otimes)$ be a symmetric monoidal
> category. Then the category of monoid objects in
> $\mathsf{Mon}(\mathsf{C})$ is equivalent to the category
> $\mathsf{Mon}_{ab}(\mathsf{C})$ of abelian monoids in $\mathsf{C}$.

The proof is exactly the same as before, except that you need to
translate it into commutative diagrams.

## First applications

### Fundamental groups of H-spaces

An *H-space* is a space $X$ equipped with a "multiplication" $\mu :
X^2 \to X$ which is unital up to homotopy: there exists $e \in X$ such
that both $\mu(e, -)$ and $\mu(-,e)$ are homotopic to the identity of
$X$. Topological monoids are examples of H-spaces.

Then the Eckmann--Hilton argument can be used to show that the
[fundamental group](https://en.wikipedia.org/wiki/Fundamental_group)
$\pi_1(X,e)$ is commutative. Indeed, this fundamental group has two
multiplications: the usual concatenation of loops $*$, and the
multiplication of loops $\cdot$ induced by $\mu$, given by:

$$(\gamma \cdot \gamma')(t) = \mu(\gamma(t), \gamma'(t)).$$

These two laws are unital (the unit being the class of the constant
loop equal to $e$), and they are compatible in the sense of
Eckmann--Hilton. It thus follows:

1. That these laws are equal, meaning that the concatenation of two
loops is homotopic to their product with $\mu$;
2. And commutative, meaning that the concatenation of two loops is
   homotopic to their concatenation in the reverse order!
