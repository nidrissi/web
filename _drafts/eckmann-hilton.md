---
title: "The Eckmann–Hilton argument"
draft: 1
tags: math homotopy operads
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
operads, $$\infty$$-categories... And it definitely shaped up my current
mathematical interests. I still remember trying to read Lurie's
*Higher Algebra* armed only with point-set topology and basic category
theory! Needless to say I didn't get very far. I very much enjoyed the
experience anyway.

## The argument

Without further ado, here is the theorem:

> **Theorem (Eckmann--Hilton argument).** Let $$M$$ be a set equipped
> with two [monoid](https://en.wikipedia.org/wiki/Monoid) structures
> $$(M,*)$$ and $$(M, \cdot)$$ sharing the same unit $$1 \in
> M$$. Assume that they satisfy the *interchange law*:
> \\[ (a \cdot b) * (c \cdot d) = (a * c) \cdot (b * d), \; \forall a,b,c,d \in M. \\]
> Then both structures are equal ($$a * b = a \cdot b$$) and moreover
> they are commutative ($$a * b = b * a$$).

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
$$(\mathsf{C}, \otimes)$$ be a monoidal category. The category
$$\mathsf{Mon}(\mathsf{C})$$ is the category of monoid objects in
$$\mathsf{C}$$: its objects are triplet $$(M, \mu, \eta)$$, where
$$M$$ is an object of $$\mathsf{C}$$, $$\mu : M^2 \to M$$ and $$\eta :
1_{\mathsf{C}} \to M$$ satisfy the axioms of a monoid (associativity,
unitality).

If $$\mathsf{C}$$ is symmetric monoidal, then $$\mathsf{Mon}(C)$$ can be
equipped with a tensor product. If $$(M, \mu, \eta)$$ and $$(M', \mu',
\eta')$$ are two monoids, their tensor product is defined to be $$(M
\otimes M', \tilde{\mu}, \eta \otimes \eta')$$, where $$\tilde{\mu}$$ is
the composite (I'm forgetting about associativity constraints):

$$M \otimes M' \otimes M \otimes M' \xrightarrow{\operatorname{id}
\otimes \sigma_{M, M'} \otimes \operatorname{id}} M \otimes M \otimes
M' \otimes M' \xrightarrow{\mu \otimes \mu'} M \otimes M'.$$

So one can speak about monoid objects inside
$$\mathsf{Mon}(\mathsf{CC})$$. Then the Eckmann--Hilton argument says:

> **Theorem.** Let $$(\mathsf{C}, \otimes)$$ be a symmetric monoidal
> category. Then the category of monoid objects in
> $$\mathsf{Mon}(\mathsf{C})$$ is equivalent to the category
> $$\mathsf{Mon}_{ab}(\mathsf{C})$$ of abelian monoids in $$\mathsf{C}$$.

The proof is exactly the same as before, except that you need to
translate it into commutative diagrams.

## First applications

### Fundamental groups of H-spaces

An *H-space* is a space $$X$ equipped with a "multiplication" $$\mu :
X^2 \to X$$ which is unital up to homotopy: there exists $$e \in X$$ such
that both $$\mu(e, -)$$ and $$\mu(-,e)$$ are homotopic to the identity of
$$X$. Topological monoids are examples of H-spaces.

Then the Eckmann--Hilton argument can be used to show that the
[fundamental group](https://en.wikipedia.org/wiki/Fundamental_group)
$$\pi_1(X,e)$$ is commutative. Indeed, this fundamental group has two
multiplications: the usual concatenation of loops $$*$, and the
multiplication of loops $$\cdot$$ induced by $$\mu$$, given by:

$$(\gamma \cdot \gamma')(t) = \mu(\gamma(t), \gamma'(t)).$$

These two laws are unital (the unit being the class of the constant
loop equal to $$e$), and they are compatible in the sense of
Eckmann--Hilton. It thus follows:

1. That these laws are equal, meaning that the concatenation of two
   loops is homotopic to their product with $$\mu$$;
2. And commutative, meaning that the concatenation of two loops is
   homotopic to their concatenation in the reverse order!

This has immediate consequences: a space like $$S^1 \vee S^1$$ with a
nonabelian fundamental group cannot be given an H-space structure.

### Higher homotopy groups

This section can be summarized by this picture:

![homotopy between fg and gf](/images/eh-arg-htpy.png){:height="130px"}

It is a depiction of the Eckmann--Hilton argument applied to
$$\pi_2(X)$$. To understand it, consider a set $$M$ with two monoid
structures; instead of writing them with two different operators,
represent one of them with horizontal multiplication and the other
with vertical multiplication, like this:

$$a * b = \begin{pmatrix} a & b \end{pmatrix},
\qquad
a \cdot b = \begin{pmatrix} b \\ a \end{pmatrix}.$$

The interchange law then exactly says that this multiplication is not
ambiguous:

$$\begin{pmatrix} c & d \\ a & b \end{pmatrix}$$

One can either multiply first each line horizontally and then
vertically to get $$(a * b) \cdot (c * d)$$, or first each column
vertically and then horizontally to get $$(a \cdot c) * (b \cdot d)$$,
and both are equal by the interchange law. The proof of the
Eckmann--Hilton argument then goes like this:

$$\begin{align}
\begin{pmatrix} a & b \end{pmatrix}
& = \begin{pmatrix} 1 & b \\ a & 1 \end{pmatrix} \\
& = \begin{pmatrix} b \\ a \end{pmatrix} \\
& = \begin{pmatrix} b & 1 \\ 1 & a \end{pmatrix} \\
& = \begin{pmatrix} b & a \end{pmatrix}
\end{align}$$

This is very similar to the picture at the beginning of the section!
To understand it, recall that the second fundamental group
$$\pi_2(X,e)$$ can be defined as the set:

$$\pi_2(X,e) = \{ \gamma : [0,1]^2 \to X \mid \gamma(\partial
[0,1]^2) = \{ x_0 \} \} / \sim$$

quotiented out by homotopy of maps. Since the square $$[0,1]^2$$ is
two-dimensional, $$\pi_2(X,e)$$ has two composition laws:
concatenation in the horizontal direction, and concatenation in the
vertical direction. Both are associative, and they satisfy the
interchange law (the reader is advised to draw a picture), so by the
Eckmann--Hilton argument, both are equal and commutative! And the
proof looks just like the picture at the beginning of the section.

*Remark.* This can be deduced from the fact that the fundamental group
 of an H-space is abelian. Indeed, $$\pi_2(X) \cong \pi_1(\Omega X)$$,
 where $$\Omega X$$ is the loop space of $$X$$; since $$\Omega X$$ is
 an H-space (by concatenation of loops), then its fundamental group is
 abelian. By induction $$\pi_n(X)$$ is abelian for all $$n$.

## More advanced examples

### Monoids and comonoids

Let $$\mathsf{C}$$ be a cartesian closed category. A *comonoid* in
$$\mathsf{C}$$ is a monoid in the opposite category
$$\mathsf{C}^{op}$$, equipped with the tensor product given by the
categorical coproduct. More explicitly, it's an object $$X$$ equipped
with a "comultiplication" $$\Delta : X \to X \sqcup X$$ and a "counit"
$$\epsilon : X \to *$$ satisfying axioms formally dual to that a of a
monoid.

Then if $$M$$ is a monoid in $$\mathsf{C}$$ (with respect to the
tensor product given by the categorical product), the hom-set
$$\hom_{\mathsf{C}}(X,M)$$ is equipped with two different
multiplications: given $$f,g : X \to M$$, one can either consider
$$f*g : X \to M$$ given by $$X \xrightarrow{\Delta} X \sqcup X
\xrightarrow{f \sqcup g} M$$, or $$f \cdot g$$ given by $$X
\xrightarrow{(f,g)} M \times M \xrightarrow{\mu} M$$. 
One can then check that both are compatible in the sense of
Eckmann--Hilton, thus $$\hom_{\mathsf{C}}(X,M)$ is a commutative
monoid.

This is a generalization of the fact about the fundamental groups: let
$$\mathsf{C} = \mathsf{Top}_*$$ be the category of pointed topological
spaces. Then $$S^1$$, equipped with the "pinch map" $$S^1 \to S^1 \vee
S^1$$ that collapses two points, is a comonoid up to homotopy; hence
if $$M$$ is an H-space, then $$[S^1, M] =: \pi_1(M)$$ is abelian.

### Center of a category

Natural transformations between functors can be composed in two
different ways:

1. If $$F,G,H : \mathsf{C} \to \mathsf{D}$$ are functors and
   $$\alpha : F \to G$$ and $$\beta : G \to H$$ are natural
   transformations, then there is a "vertical composite" $$\beta \circ
   \alpha : F \to G$$ given componentwise by $$(\beta \circ \alpha)_X
   = \beta_X \circ \alpha_X$$:
2. If $$F_1, G_1 : \mathsf{C} \to \mathsf{D}$$ and $$F_2, G_2 :
   \mathsf{D} \to \mathsf{E}$$ are functors and $$\beta : F_1 \to
   G_1$$, $$\beta : F_2 \to G_2$$ are natural transformation, there
   is an horizontal composite $$\alpha * \alpha$$.

![vertical composition](/images/eh-arg-vert.png){:height="100px"}
![horizontal composition](/images/eh-arg-horiz.png){:height="100px"}

So if one only considers natural transformations from the identity
functor $$\operatorname{id}_{\mathsf{C}}$$ to itself, one gets two
different composition laws on
$$Z(\mathsf{C}) = \operatorname{End}(\operatorname{id}_{\mathsf{C}})$$. Again these two
laws satisfy the interchange law, and thus $$Z(C)$$, called the
*center* of the category $$\mathsf{C}$$, is abelian.
