---
title: "About abelian bimodules"
tags: math algtop operads
draft: 1
---

This post is about something somewhat weird I noticed about infinitesimal bimodules over operads and their relationships with some $$E_n$$ operads. I don't know if it's something significant, and I'd definitely be interested to hear more about it.

## Context: abelian bimodules

As I said, this post is about abelian bimodules, sometimes also called infinitesimal or weak bimodules. They are a "linearized" version of usual bimodules over operads. Let me now recall their definition.
<!--more-->

**Definition.** Let $$\mathtt{P}$$, $$\mathtt{Q}$$ be two operads in a symmetric monoidal category $$\mathsf{C}$$. An *abelian $$(\mathtt{P}, \mathtt{Q})$$-bimodule* is a symmetric collection $$M = \{ M(n) \}_{n \ge 0}$$ equipped with composition morphisms:

$$M(k) \otimes \mathtt{Q}(l) \xrightarrow{\circ_i} M(k+l-1), \\ \mathtt{P}(k) \otimes M(l) \xrightarrow{\circ_i} M(k+l-1),$$

satisfying obvious equivariance and associativity properties.

By composing multiple times elements of $$M$$ with elements of $$\mathtt{Q}$$, one can give $$M$$ the structure of a full right module over $$\mathtt{Q}$$. However, $$M$$ is not a left module (AKA algebra) over $$\mathtt{P}$$, as only one element of $$M$$ can appear in successive compositions. Similarly a full bimodule is not necessarily an abelian bimodule. An operad $$\mathtt{P}$$ is always an abelian $$(\mathtt{P}, \mathtt{P})$$-bimodule.

Morally, an abelian bimodule over an operad is exactly the data required to "infinitesimally" extend the operad: if $$M$$ is an abelian bimodule over $$\mathtt{P}$$, then there's an operad $$\mathtt{P} \ltimes M$$ defined by $$(\mathtt{P} \ltimes M)(r) = \mathtt{P}(r) \oplus M(r)$$, and where the composition maps are defined using the composition maps of $$\mathtt{P}$$ and the bimodule structure of $$M$$. See §II.2.1 of [Fresse] for more details.

## Modules as diagrams

Various categories of (bi)modules over operads can be represented as diagrams over categories associated to these operads. I'll now explain how.

## References

* Gregory Arone and Victor Turchin. “On the rational homology of high dimensional analogues of spaces of long knots”. In: *Geom. Topol.* 18.3 (2014), pp. 1261–1322. ISSN: 1465-3060. DOI: [10.2140/gt.2014.18.1261](http://dx.doi.org/10.2140/gt.2014.18.1261). arXiv: [1105.1576 [math.AT]](http://arxiv.org/abs/1105.1576). [MR3228453](http://www.ams.org/mathscinet-getitem?mr=3228453).
* Benoit Fresse. [*Homotopy of Operads and Grothendieck–Teichmüller Groups*](http://math.univ-lille1.fr/~fresse/OperadHomotopyBook/). Preprint.
* Jean-Louis Loday and Bruno Vallette. *Algebraic operads.* Grundlehren der Mathematischen Wissenschaften [Fundamental Principles of Mathematical Sciences] 346. Heidelberg: Springer, 2012, pp. xxiv+634. ISBN: 978-3-642-30361-6. DOI: [10.1007/978-3-642-30362-3](http://dx.doi.org/10.1007/978-3-642-30362-3). [MR2954392](http://www.ams.org/mathscinet-getitem?mr=2954392).
