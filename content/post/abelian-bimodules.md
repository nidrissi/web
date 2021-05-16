---
date: 2016-01-06T00:00:00Z
tags: ["math", "algtop", "operads"]
title: About Abelian Bimodules
---

This post is about something somewhat weird I noticed about infinitesimal bimodules over operads and their relationships with some $E_n$ operads. I don't know if it's something significant, and I'd definitely be interested to hear more about it.


## Context: abelian bimodules

As I said, this post is about abelian bimodules, sometimes also called infinitesimal or weak bimodules. They are a "linearized" version of usual bimodules over operads. Let me now recall their definition.

**Definition.** Let $\mathtt{P}$, $\mathtt{Q}$ be two operads in a symmetric monoidal category $\mathsf{C}$. An _abelian $(\mathtt{P}, \mathtt{Q})$-bimodule_ is a symmetric collection $M = \{ M(n) \}_{n \ge 0}$ equipped with composition morphisms:

$$M(k) \otimes \mathtt{Q}(l) \xrightarrow{\circ_i} M(k+l-1), \\ \mathtt{P}(k) \otimes M(l) \xrightarrow{\circ_i} M(k+l-1),$$

satisfying obvious equivariance and associativity properties.

By composing multiple times elements of $M$ with elements of $\mathtt{Q}$, one can give $M$ the structure of a full right module over $\mathtt{Q}$. However, $M$ is not a left module (AKA algebra) over $\mathtt{P}$, as only one element of $M$ can appear in successive compositions. Similarly a full bimodule is not necessarily an abelian bimodule. An operad $\mathtt{P}$ is always an abelian $(\mathtt{P}, \mathtt{P})$-bimodule.

Morally, an abelian bimodule over an operad is exactly the data required to "infinitesimally" extend the operad: if $M$ is an abelian bimodule over $\mathtt{P}$, then there's an operad $\mathtt{P} \ltimes M$ defined by $(\mathtt{P} \ltimes M)(r) = \mathtt{P}(r) \oplus M(r)$, and where the composition maps are defined using the composition maps of $\mathtt{P}$ and the bimodule structure of $M$. See §II.2.1 of [Fresse] for more details.

## Modules as diagrams

Various categories of (bi)modules over operads can be represented as diagrams over categories associated to these operads. I'll now explain how, using the notations from [Arone--Turchin]. Let $\mathtt{P}$ be an operad in a symmetric monoidal category $\mathsf{C}$.

### Left modules

**Definition.** The _PROP associated to $\mathtt{P}$_ is the symmetric monoidal category $\mathcal{F}(\mathtt{P})$ whose objects are finite sets and whose morphisms are given by:

$$\operatorname{Hom}_{\mathcal{F}(\mathtt{P})}(A,B) = \coprod_{f : A \to B} \bigotimes_{b \in B} \mathtt{P}(f^{-1}(b)).$$

In this definition, we implicitly use the fact that operads can equivalently be defined as functors $\mathsf{Bij}^{op} \to \mathsf{C}$ instead of as symmetric collections. The composition of $\mathcal{F}(\mathtt{P})$ is explicit and better understood with a graphical calculus (see [Arone--Turchin, §4] or [Loday--Vallette, §5.4]). It is a symmetric monoidal category, with tensor product given on objects by disjoint union.

**Proposition.** [Loday--Vallette, Prop. 5.4.2] The category of $\mathtt{P}$-algebras (_left modules_) is equivalent to the category of symmetric monoidal functors $\mathcal{F}(\mathtt{P}) \to \mathsf{C}$.

Roughly speaking, a symmetric monoidal functor $\mathcal{F}(\mathtt{P}) \to \mathsf{C}$ is determined on objects by its value on a singleton, say $A$; then its value on a set with $n$ elements is $A^{\otimes n}$. The functor then maps elements of $\mathtt{P}(n)$ to morphisms $A^{\otimes n} \to A$, and then everything fits nicely together to produce an algebra.

### Right modules

**Proposition.** [Arone--Turchin, Lemma 4.3] The category of right modules over $\mathtt{P}$ is equivalent to the category of contravariant functors $\mathcal{F}(\mathtt{P})^{op} \to \mathsf{C}$.

Note here that functors are no longer assumed to be monoidal. To get an idea of the proof, note that if $M$ is a right module over $\mathtt{P}$, then one gets maps $M(B) \otimes \bigotimes_{b \in B} \mathtt{P}(f^{-1}(b)) \to M(A)$, and again everything fits together. Drawing pictures of trees is immensely helpful here.

_Example._ The category $\mathcal{F}(\mathtt{Com})$ is the category of finite sets [exercise]. Thus a right $\mathtt{Com}$-module is the same thing as a functor $\mathsf{Fin} \to \mathsf{C}$.

### Abelian bimodules

Now we define a new category, $\Gamma(\mathtt{P})$, to model abelian bimodules.

**Definition.** [Arone--Turchin, Def. 4.5] The category $\Gamma(\mathtt{P})$ has as objects _pointed_ finite sets and morphisms are given by:

$$\operatorname{Hom}_{\Gamma(\mathtt{P})}(S, T) = \bigoplus_{f : S \to T} \bigotimes_{t \in T} \mathtt{P}(f^{-1}(t)).$$

The definition of $\Gamma(\mathtt{P})$ is suspiciously similar to the definition of $\mathcal{F}(\mathtt{P})$, but instead of finite sets one uses finite _pointed_ sets, and the map $f : S \to T$ appearing in the definition is a pointed map. Composition is defined just like the composition of $\mathcal{F}(\mathtt{P})$.

Arone--Turchin then define a certain "twisted" version $\tilde{\Gamma}(\mathtt{P})$, with the same objects and morphisms as $\Gamma(\mathtt{P})$, but with a modified composition: if $S \xrightarrow{f} T \xrightarrow{g} U$ are pointed sets and maps, one must define a composition of the type:

$$\bigotimes_{u \in U} \mathtt{P}(g^{-1}(u)) \otimes \bigotimes_{t \in T} \mathtt{P}(f^{-1}(t) \to \bigotimes_{u \in U} \mathtt{P}((gf)^{-1}(u)).$$

In $\Gamma(\mathtt{P})$, this is defined in a straightforward way using partial composition operations $\circ_t$ of $\mathtt{P}$. In $\tilde{\Gamma}(\mathtt{P})$, for the composition along the base point $* \in T$, the orders of $\mathtt{P}(g^{-1}(*)) \otimes \mathtt{P}(f^{-1}(*))$ are first switched, and only then is the partial composition $\circ_*$ used. The rest of the compositions aren't changed.

**Proposition.** [Arone--Turchin, Prop. 4.9] The category of abelian $(\mathtt{P}, \mathtt{P})$-bimodules is equivalent to the category of functors $\tilde{\Gamma}(\mathtt{P})^{op} \to \mathsf{C}$.

Now that everything is defined correctly, this is now a matter of not getting confused with indices. The base point represents morally the action on the left (which explains why the order of the composition had to be changed), while the rest of the points represents the action on the right (using that $\mathsf{Fin} \hookrightarrow \Gamma$).

_Example._ The category $\Gamma(\mathtt{Com})$ is clearly $\Gamma$; but moreover, $\tilde{\Gamma}(\mathtt{Com})$ is also equivalent to $\Gamma$ (Arone--Turchin conjecture that this is true for any cyclic operad). Thus an abelian bimodule over $\mathtt{Com}$ is the same thing as a contravariant functor from $\Gamma$.

## $\Gamma$-spaces

Now here's what I find a bit weird. According to Segal, a "fibrant" (for some right notion of fibrant) functor $\Gamma \to \mathsf{Top}$ yield an infinite loop space, i.e. an $E_\infty$-space. Morally, an $E_\infty$-space is an algebra over a cofibrant resolution of the topological operad $\mathtt{Com}$. But as we just saw, a contravariant functor $\Gamma^{op} \to \mathsf{C}$, in the algebraic setting, is the same thing as an abelian bimodule over $\mathtt{Com}$. My question is, are these two things related? Or am I grasping at straws?

## References

- Gregory Arone and Victor Turchin. “On the rational homology of high dimensional analogues of spaces of long knots”. In: _Geom. Topol._ 18.3 (2014), pp. 1261–1322. ISSN: 1465-3060. DOI: [10.2140/gt.2014.18.1261](http://dx.doi.org/10.2140/gt.2014.18.1261). arXiv: [1105.1576 [math.AT]](http://arxiv.org/abs/1105.1576). [MR3228453](http://www.ams.org/mathscinet-getitem?mr=3228453).
- Benoit Fresse. [_Homotopy of Operads and Grothendieck–Teichmüller Groups_](http://math.univ-lille1.fr/~fresse/OperadHomotopyBook/). Preprint.
- Jean-Louis Loday and Bruno Vallette. _Algebraic operads._ Grundlehren der Mathematischen Wissenschaften [Fundamental Principles of Mathematical Sciences] 346. Heidelberg: Springer, 2012, pp. xxiv+634. ISBN: 978-3-642-30361-6. DOI: [10.1007/978-3-642-30362-3](http://dx.doi.org/10.1007/978-3-642-30362-3). [MR2954392](http://www.ams.org/mathscinet-getitem?mr=2954392).
