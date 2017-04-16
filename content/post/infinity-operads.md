---
date: 2016-05-06T00:00:00Z
tags: ['math', 'algtop', 'operads', 'higher-cat']
title: Infinity-Operads Demystified
---

The purpose of this post is to record the definition of $\infty$-operads and explain why it works like that. For this I'm using Lurie's definition of $\infty$-operads; there is also a definition by Cisinski--Moerdijk--Weiss using dendroidal sets, about which I might talk later.

Indeed, the definition on an $\infty$-operad is a bit mysterious taken "as-is" -- see [HA, §2.1.1.10]. My goal is to explain how to reach this definition, mostly for my own sake. Most of what follows is taken either from the book *Higher Algebra*, the $n$Lab, or the semester-long workshop about hgiher category theory in Lille in 2015.
<!--more-->

## Cartesian morphisms

### Grothendieck fibrations

The first thing to explain would be Cartesian (and coCartesian) morphisms. They are generalizations of [Grothendieck fibrations](https://ncatlab.org/nlab/show/Grothendieck+fibration) from ordinary category theory. The basic idea of a Grothendieck fibration $p : E \to B$ is that the fibers $E\_b = p^{-1}(b)$ depend contravariantly on $b$, i.e. given a morphism $f : b \to b'$, there exists a lift (a functor) $\bar{f} : E\_{b'} \to E\_b$. The definition of a Grothendieck fibration is exactly what's needed for all this to work correctly.

Following the $n$Lab, a morphism $\phi : e' \to e$ is said to be **$p$-Cartesian lift $\phi : e' \to e$. Then $\hat{p}(f)(b) := e' \in E\_{b'}$. The unique factorizations in the definition of a fibration makes this into a functor $\hat{p}(f)$, and this becomes a (pseudo)functor $B \to \mathsf{Cat}^{\rm op}$.

### Quasi-categories

The study of $\infty$-operads obviously involves higher category theory, and in Lurie's setting higher categories are quasi-categories (I think some people call them quategories). There are plenty of explanations of quasi-categories online, so I will just record the bare definitions here.

A **quasi-category** is a simplicial set $C\_\bullet \Delta^{\rm op} \to \mathsf{Set}$ such that all inner horns can be filled, i.e. every morphism $\Lambda\_k^n \to C$ can be extended to $\Delta^n$ for $1 < k < n$ (compare with Kan complexes, where outer horns can be filled too).

The set $C\_0$ is to be understood as the set of objects of the quasi-categories; the set $C\_1$ is to be understood as the set of morphisms. Faces $d\_0, d\_1 : C\_1 \to C\_0$ give the target and the source of a morphism, and the degeneracy $s\_0 : C\_0 \to C\_1$ gives the identity of an object. The set $C\_2$ gives information about composition: a composable pair of arrows is the same thing as a morphism $\sigma : \Lambda\_1^2 \to C$, which extends to $\tilde\sigma \in C\_2$; then $d\_1\tilde\sigma$ is "a composite" of the pair of composable morphisms. Higher $C\_n$ give coherence conditions for composition, and everything works out (the space of possible compositions for a pair of composable morphisms is contractible, $- \circ \operatorname{id}\_x$ is homotopic to the identity and so on).

The nerve of a plain category is an example of a quasi-category.

### (co)Cartesian morphisms

The definition of a Cartesian morphism essentially mimics the definition of a Grothendieck fibration, except that the categories are replaced with quasi-categories. I won't dwell too much on this (see [the $n$Lab article](https://ncatlab.org/nlab/show/Cartesian+morphism)), since as far as I can tell there's no hidden surprise here, the most difficult thing being to determine how to translate the axioms in terms of quasi-categories. Let's just note that a morphism $p : E \to B$ is said to be a **coCartesian morphism** (AKA opfibration) if $p^{\rm op} : E^{\rm op} \to B^{\rm op}$ is Cartesian. This means that the fibers $E\_b$ depends covariantly instead of contravariantly on $b$. I am not 100% sure why a different name is used for plain categories and for quasi-categories; maybe it's just a historical artefact?

## Symmetric monoidal $\infty$-categories

Rather than plain operads, $\infty$-operads are a generalization of *colored* operads, AKA multicategories. As such, they have multiple objects, and behave more like a $\infty$-category where morphisms can have multiple inputs instead of just one. Let's first define symmetric monoidal $\infty$-categories, where a morphism $c\_1 \otimes \dots \otimes c\_n \to d$ can be thought of as a morphism with multiple inputs. (This section is taken straight from the introduction of Chapter 2 of *Higher Algebra* and adapted to my notations).

Given a symmetric monoidal category $\mathsf{C}$, one can construct its **category of operators** $\mathsf{C}^\otimes$. This is a category over $\Gamma$, the category of finite pointed sets with objects $n\_+ = \{ *, 1, \dots, n \}$.

The objects of $\mathsf{C}^\otimes$ are finite sequences $[c\_1, \dots, c\_n]$ of objects of $\mathsf{C}$. The morphisms $[c\_1, \dots, c\_n] \to [d\_1, \dots, d\_m]$ consist of:

* a morphism $\alpha : n\_+ \to m\_+$ in $\Gamma$;
* morphisms $\bigotimes\_{\alpha(i) = j} c\_i \to d\_j$ for $1 \le j \le m$.

Then $p[c\_1, \dots, c\_n]$ is $n\_+$, and the image of a morphism by $p$ is the "$\alpha$" part. Consistenly with the previous notation for fibers, let $\mathsf{C}^\otimes\_n := p^{-1}(n\_+)$. Note that $\Gamma$ is the category of operators of the terminal category (equipped with its unique symmetric monoidal structure).

Then $\mathsf{C}^\otimes \xrightarrow{p} \Gamma$ satisfies the two fundamental properties:

* **(M1)** $p$ is a coCartesian morphism (opfibration).

If we unroll the definition, this means that for every $[c\_1, \dots, c\_n] \in \mathsf{C}^\otimes$ and for every $f : n\_+ \to m\_+$, there is some morphism $\bar{f} : [c\_1, \dots, c\_n] \to [d\_1, \dots, d\_m]$ that covers $f$ and such that for all morphism $\bar{g} : [c\_1, \dots, c\_n] \to [d\_1, \dots, d\_k]$ and every factorization of $f$ through $g = p(\bar{g})$, there is a factorization of $\bar{f}$ through $\bar{g}$ inducing it. Indeed, we can choose $d\_j$ to be $\bigotimes\_{f(i) = j} c\_i$ and see that everything works. Recall that this means the fibers $\mathsf{C}^\otimes\_n$ depend covariantly on $n$.

* **(M2)** The fiber $\mathsf{C}^\otimes\_n$ is isomorphic to $\mathsf{C}^{\times n}$ via the product of the functors induced by $\rho^i : n\_+ \to 1\_+$ given by $\rho^i(i) = 1$ and $\rho^i(j \neq i) = *$.

Indeed, a morphism $[c\_1, \dots, c\_n] \to [d\_1, \dots, d\_n]$ in $\mathsf{C}^\otimes$ which covers the identity of $n\_+$ is uniquely determined by morphism $c\_i \to d\_i$; one just has to see that this morphism is given by $\hat{p}(\rho^i) = \rho^i\_*$.

Conversely, if $\mathsf{D} \xrightarrow{p} \Gamma$ is a functor that satisfies (M1) and (M2), let $\mathsf{C} = \mathsf{D}\_1 = p^{-1}(1\_+)$. Then $\mathsf{C}$ becomes a symmetric monoidal category.

* The fold map $\alpha : 2\_+ \to 1\_+$ ($\alpha(1) = \alpha(2) = 1$) induces, by (M1) and (M2), a functor (well defined up to equivalence) $\otimes : \mathsf{C}^{\times 2} \xleftarrow{\sim} \mathsf{D}\_2 \xrightarrow{\alpha\_*} \mathsf{C}$.
* By (M2), $\mathsf{D}\_0 = \*$ is the terminal category, and the unique morphism $0\_+ \to 1\_+$ induces $\* \to \mathsf{C}$, which gives the unit object of $\mathsf{C}$.
* Since $\alpha$ is "symmetric" (meaning $\alpha(1) = \alpha(2)$), "unital" (meaning $\rho^1 \alpha = \rho^2 \alpha = \operatorname{id}\_{1\_+}$) and "associative", then so are the corresponding functors, always up to isomorphism.

So axioms (M1) and (M2) capture exactly what it means to be a symmetric monoidal category. There are many possible equivalent definitions of monoidal categories, but Lurie's insight was to find one that could be adapted to quasi-categories. Indeed, he defines:

**Definition. [HA, 2.0.0.7]** A symmetric monoidal $\infty$-category is a coCartesian fibration $p : \mathsf{C}^\otimes \to N\Gamma$ such that the maps $\rho^i : n\_+ \to 1\_+$ induce an equivalence $\mathsf{C}^\otimes\_n \to (\mathsf{C}^\otimes\_1)^{\times n}$.

In this definition, $\mathsf{C}^\otimes$ should be thought of as the $\infty$-category of operators, and the underlying $\infty$-category is really $\mathsf{C}^\otimes\_1 = p^{-1}(1\_+)$. The monoidal product and the unit are induced as above.

## $\infty$-operads

Following the same pattern, Lurie defines the category of operators of a colored operad. This satisfies a bunch of axioms, which allow one to recover the colored operad from the category of operators. The axioms are also laid out in such a way that generalizing them to $\infty$-categories is possible, thus giving the definition of $\infty$-operads.

Let $\mathtt{P}$ be a colored operad. Its category of operators $\mathsf{C}\_\mathtt{P}$ is given by:

* objects are sequences of colors $[c\_1, \dots, c\_n]$;
* morphisms $[c\_1, \dots, c\_n] \to [d\_1, \dots, d\_m]$ are given by a morphism $f : n\_+ \to m\_+$, and for all $1 \le j \le m$, an element in $\mathtt{P}((c\_i)\_{f(i) = j}; d\_j)$.

Like before, there's a functor $p : \mathsf{C}\_\mathtt{P} \to \Gamma$ given by $p[c\_1, \dots, c\_n] = n\_+$. This is a Grothendieck opfibration, which allows us the recover $\mathtt{P}$ from $\mathsf{C}\_\mathtt{P}$.

Let $\mathtt{P}\_n := p^{-1}(n\_+)$. In particular, $\mathtt{P}\_1$ is the category of unary operations in $\mathtt{P}$ (also called "underlying category" of $\mathtt{P}$). The colors of $\mathtt{P}$ are given by the objects of $\mathtt{P}\_1$. As before, $\prod\_i \rho^i\_* : \mathtt{P}\_n \to (\mathtt{P}\_1)^{\times n}$ is an isomorphism. The operations of type $\mathtt{P}(c\_1, \dots, c\_n; d)$ are recovered as the morphisms $\mathsf{C}\_\mathtt{P}([c\_1, \dots, c\_n], d)$ which cover $n\_+ \to 1\_i$, $i \mapsto 1$.

Two types of morphisms appear in the previous discussion, which lead to the following definition: a morphism $f : n\_+ \to m\_+$ in $\Gamma$ is

* **inert** if the preimage of every $j \in \underline{m} := m\_+ \setminus \{*\}$ has exactly one element. Such a morphism induces an injection $\underline{m} \hookrightarrow \underline{n}$. Basically, it's a morphism that "forgets" a bunch of points; think "$\rho^i$".
* **active** if $f^{-1}(*) = \{ * \}$. For any $n$, there is a unique active morphism $n\_+ \to 1\_+$; this is the morphism that allows us to recover the $n$-ary operations of $\mathtt{P}$.

**Definition. [HA, 2.1.1.10]** An $\infty$-operad (really, the category of operators of an $\infty$-operad) is a functor of quasi-categories $p : \mathsf{C}^\otimes \to N\Gamma$ such that:

1. For every inert morphism $f : m\_+ \to n\_+$ and every $C \in \mathsf{C}^\otimes\_m$, there is a $p$-coCartesian morphism $\bar{f} : C \to C'$ lifting $f$, which induces a functor $f\_! : \mathsf{C}^\otimes\_m \to \mathsf{C}^\otimes\_n$.  
   Recall that the inert morphisms are those who "forget" points. The functor $f\_!$ is the functor which, given an $m$-uple, forgets some of the factors. The object $C$ is a sequence of colors, and $C'$ is the same sequence with some colors forgotten.
2. For $f : n\_+ \to m\_+$, let $\mathsf{C}^\otimes\_f(-,-) \subset \mathsf{C}^\otimes(-,-)$ be the connected components lying over $f$. Then
   $$\mathsf{C}^\otimes\_f(C, C') \to \prod\_{1 \le k \le m} \mathsf{C}^\otimes\_{\rho^i \circ f}(C, C'\_i)$$
   is a homotopy equivalence. This means that an "operation" $[c\_1, \dots, c\_n] \to [d\_1, \dots, d\_n]$ is "the same" as a collection of operations $\mathtt{P}((c\_i)\_{f(i) = j}, d\_j)$.
3. For every collection of objects $c\_1, \dots, c\_n \in \mathsf{C}^\otimes\_1$, there exists an object $C \in \mathsf{C}^\otimes\_n$ and $p$-Cartesian morphisms $C \to c\_i$ covering $\rho^i$.  
   This means that $\prod \rho^i\_! : \mathsf{C}^\otimes\_n \to (\mathsf{C}^\otimes\_1)^{\times n}$ is an equivalence.
   
From this data, the quategory of unary operations of the $\infty$-operad is given by $\mathsf{C}^\otimes\_1$. The colors of the $\infty$-operad are the object of this quategory. Finally, the operations of type $(c\_1, \dots, c\_n; d)$ are the morphisms $c\_1 \oplus \dots c\_n \to d$ lying over the unique active morphism $n\_+ \to 1\_+$, where $c\_1 \oplus \dots \oplus c\_n$ is "the" object of $\mathsf{C}^\otimes\_n$ corresponding to $(c\_1, \dots, c\_n) \in (\mathsf{C}^\otimes\_1)^{\times n}$ under the equivalence of (3).

And voilà! An $\infty$-operad. I'm not as scared of the definition as I was when I first saw it, and I hope you aren't anymore either.

## References

* [HA] Lurie, Jacob. [*Higher Algebra*](http://www.math.harvard.edu/~lurie/papers/HA.pdf). Version of March 2016.
* [nLab] $n$Lab, [$(\infty,1)$-operad](https://ncatlab.org/nlab/show/(infinity,1\)-operad).
