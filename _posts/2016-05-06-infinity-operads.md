---
title: "Infinity-operads demystified"
tags: math algtop operads higher-cat
---

The purpose of this post is to record the definition of $$\infty$$-operads and explain why it works like that. For this I'm using Lurie's definition of $$\infty$$-operads; there is also a definition by Cisinski--Moerdijk--Weiss using dendroidal sets, about which I might talk later.

Indeed, the definition on an $$\infty$$-operad is a bit mysterious taken "as-is" -- see [HA, §2.1.1.10]. My goal is to explain how to reach this definition, mostly for my own sake. Most of what follows is taken either from the book *Higher Algebra*, the $$n$$Lab, or the semester-long workshop about hgiher category theory in Lille in 2015.

## Cartesian morphisms

### Grothendieck fibrations

The first thing to explain would be Cartesian (and coCartesian) morphisms. They are generalizations of [Grothendieck fibrations](https://ncatlab.org/nlab/show/Grothendieck+fibration) from ordinary category theory. The basic idea of a Grothendieck fibration $$p : E \to B$$ is that the fibers $$E_b = p^{-1}(b)$$ depend contravariantly on $$b$$, i.e. given a morphism $$f : b \to b'$$, there exists a lift (a functor) $$\bar{f} : E_{b'} \to E_b$$. The definition of a Grothendieck fibration is exactly what's needed for all this to work correctly.
<!--more-->

Following the $$n$$Lab, a morphism $$\phi : e' \to e$$ is said to be **$$p$$-Cartesian lift $$\phi : e' \to e$$. Then $$\hat{p}(f)(b) := e' \in E_{b'}$$. The unique factorizations in the definition of a fibration makes this into a functor $$\hat{p}(f)$$, and this becomes a (pseudo)functor $$B \to \mathsf{Cat}^{\rm op}$$.

### Quasi-categories

The study of $$\infty$$-operads obviously involves higher category theory, and in Lurie's setting higher categories are quasi-categories (I think some people call them quategories). There are plenty of explanations of quasi-categories online, so I will just record the bare definitions here.

A **quasi-category** is a simplicial set $$C_\bullet \Delta^{\rm op} \to \mathsf{Set}$$ such that all inner horns can be filled, i.e. every morphism $$\Lambda_k^n \to C$$ can be extended to $$\Delta^n$$ for $$1 < k < n$$ (compare with Kan complexes, where outer horns can be filled too).

The set $$C_0$$ is to be understood as the set of objects of the quasi-categories; the set $$C_1$$ is to be understood as the set of morphisms. Faces $$d_0, d_1 : C_1 \to C_0$$ give the target and the source of a morphism, and the degeneracy $$s_0 : C_0 \to C_1$$ gives the identity of an object. The set $$C_2$$ gives information about composition: a composable pair of arrows is the same thing as a morphism $$\sigma : \Lambda_1^2 \to C$$, which extends to $$\tilde\sigma \in C_2$$; then $$d_1\tilde\sigma$$ is "a composite" of the pair of composable morphisms. Higher $$C_n$$ give coherence conditions for composition, and everything works out (the space of possible compositions for a pair of composable morphisms is contractible, $$- \circ \operatorname{id}_x$$ is homotopic to the identity and so on).

The nerve of a plain category is an example of a quasi-category.

### (co)Cartesian morphisms

The definition of a Cartesian morphism essentially mimics the definition of a Grothendieck fibration, except that the categories are replaced with quasi-categories. I won't dwell too much on this (see [the $$n$$Lab article](https://ncatlab.org/nlab/show/Cartesian+morphism)), since as far as I can tell there's no hidden surprise here, the most difficult thing being to determine how to translate the axioms in terms of quasi-categories. Let's just note that a morphism $$p : E \to B$$ is said to be a **coCartesian morphism** (AKA opfibration) if $$p^{\rm op} : E^{\rm op} \to B^{\rm op}$$ is Cartesian. This means that the fibers $$E_b$$ depends covariantly instead of contravariantly on $$b$$. I am not 100% sure why a different name is used for plain categories and for quasi-categories; maybe it's just a historical artefact?

## Symmetric monoidal $$\infty$$-categories

Rather than plain operads, $$\infty$$-operads are a generalization of *colored* operads, AKA multicategories. As such, they have multiple objects, and behave more like a $$\infty$$-category where morphisms can have multiple inputs instead of just one. Let's first define symmetric monoidal $$\infty$$-categories, where a morphism $$c_1 \otimes \dots \otimes c_n \to d$$ can be thought of as a morphism with multiple inputs. (This section is taken straight from the introduction of Chapter 2 of *Higher Algebra* and adapted to my notations).

Given a symmetric monoidal category $$\mathsf{C}$$, one can construct its **category of operators** $$\mathsf{C}^\otimes$$. This is a category over $$\Gamma$$, the category of finite pointed sets with objects $$n_+ = \{ *, 1, \dots, n \}$$.

The objects of $$\mathsf{C}^\otimes$$ are finite sequences $$[c_1, \dots, c_n]$$ of objects of $$\mathsf{C}$$. The morphisms $$[c_1, \dots, c_n] \to [d_1, \dots, d_m]$$ consist of:

* a morphism $$\alpha : n_+ \to m_+$$ in $$\Gamma$$;
* morphisms $$\bigotimes_{\alpha(i) = j} c_i \to d_j$$ for $$1 \le j \le m$$.

Then $$p[c_1, \dots, c_n]$$ is $$n_+$$, and the image of a morphism by $$p$$ is the "$$\alpha$$" part. Consistenly with the previous notation for fibers, let $$\mathsf{C}^\otimes_n := p^{-1}(n_+)$$. Note that $$\Gamma$$ is the category of operators of the terminal category (equipped with its unique symmetric monoidal structure).

Then $$\mathsf{C}^\otimes \xrightarrow{p} \Gamma$$ satisfies the two fundamental properties:

* **(M1)** $$p$$ is a coCartesian morphism (opfibration).

If we unroll the definition, this means that for every $$[c_1, \dots, c_n] \in \mathsf{C}^\otimes$$ and for every $$f : n_+ \to m_+$$, there is some morphism $$\bar{f} : [c_1, \dots, c_n] \to [d_1, \dots, d_m]$$ that covers $$f$$ and such that for all morphism $$\bar{g} : [c_1, \dots, c_n] \to [d_1, \dots, d_k]$$ and every factorization of $$f$$ through $$g = p(\bar{g})$$, there is a factorization of $$\bar{f}$$ through $$\bar{g}$$ inducing it. Indeed, we can choose $$d_j$$ to be $$\bigotimes_{f(i) = j} c_i$$ and see that everything works. Recall that this means the fibers $$\mathsf{C}^\otimes_n$$ depend covariantly on $$n$$.

* **(M2)** The fiber $$\mathsf{C}^\otimes_n$$ is isomorphic to $$\mathsf{C}^{\times n}$$ via the product of the functors induced by $$\rho^i : n_+ \to 1_+$$ given by $$\rho^i(i) = 1$$ and $$\rho^i(j \neq i) = *$$.

Indeed, a morphism $$[c_1, \dots, c_n] \to [d_1, \dots, d_n]$$ in $$\mathsf{C}^\otimes$$ which covers the identity of $$n_+$$ is uniquely determined by morphism $$c_i \to d_i$$; one just has to see that this morphism is given by $$\hat{p}(\rho^i) = \rho^i_*$$.

Conversely, if $$\mathsf{D} \xrightarrow{p} \Gamma$$ is a functor that satisfies (M1) and (M2), let $$\mathsf{C} = \mathsf{D}_1 = p^{-1}(1_+)$$. Then $$\mathsf{C}$$ becomes a symmetric monoidal category.

* The fold map $$\alpha : 2_+ \to 1_+$$ ($$\alpha(1) = \alpha(2) = 1$$) induces, by (M1) and (M2), a functor (well defined up to equivalence) $$\otimes : \mathsf{C}^{\times 2} \xleftarrow{\sim} \mathsf{D}_2 \xrightarrow{\alpha_*} \mathsf{C}$$.
* By (M2), $$\mathsf{D}_0 = *$$ is the terminal category, and the unique morphism $$0_+ \to 1_+$$ induces $$* \to \mathsf{C}$$, which gives the unit object of $$\mathsf{C}$$.
* Since $$\alpha$$ is "symmetric" (meaning $$\alpha(1) = \alpha(2)$$), "unital" (meaning $$\rho^1 \alpha = \rho^2 \alpha = \operatorname{id}_{1_+}$$) and "associative", then so are the corresponding functors, always up to isomorphism.

So axioms (M1) and (M2) capture exactly what it means to be a symmetric monoidal category. There are many possible equivalent definitions of monoidal categories, but Lurie's insight was to find one that could be adapted to quasi-categories. Indeed, he defines:

**Definition. [HA, 2.0.0.7]** A symmetric monoidal $$\infty$$-category is a coCartesian fibration $$p : \mathsf{C}^\otimes \to N\Gamma$$ such that the maps $$\rho^i : n_+ \to 1_+$$ induce an equivalence $$\mathsf{C}^\otimes_n \to (\mathsf{C}^\otimes_1)^{\times n}$$.

In this definition, $$\mathsf{C}^\otimes$$ should be thought of as the $$\infty$$-category of operators, and the underlying $$\infty$$-category is really $$\mathsf{C}^\otimes_1 = p^{-1}(1_+)$$. The monoidal product and the unit are induced as above.

## $$\infty$$-operads

Following the same pattern, Lurie defines the category of operators of a colored operad. This satisfies a bunch of axioms, which allow one to recover the colored operad from the category of operators. The axioms are also laid out in such a way that generalizing them to $$\infty$$-categories is possible, thus giving the definition of $$\infty$$-operads.

Let $$\mathtt{P}$$ be a colored operad. Its category of operators $$\mathsf{C}_\mathtt{P}$$ is given by:

* objects are sequences of colors $$[c_1, \dots, c_n]$$;
* morphisms $$[c_1, \dots, c_n] \to [d_1, \dots, d_m]$$ are given by a morphism $$f : n_+ \to m_+$$, and for all $$1 \le j \le m$$, an element in $$\mathtt{P}((c_i)_{f(i) = j}; d_j)$$.

Like before, there's a functor $$p : \mathsf{C}_\mathtt{P} \to \Gamma$$ given by $$p[c_1, \dots, c_n] = n_+$$. This is a Grothendieck opfibration, which allows us the recover $$\mathtt{P}$$ from $$\mathsf{C}_\mathtt{P}$$.

Let $$\mathtt{P}_n := p^{-1}(n_+)$$. In particular, $$\mathtt{P}_1$$ is the category of unary operations in $$\mathtt{P}$$ (also called "underlying category" of $$\mathtt{P}$$). The colors of $$\mathtt{P}$$ are given by the objects of $$\mathtt{P}_1$$. As before, $$\prod_i \rho^i_* : \mathtt{P}_n \to (\mathtt{P}_1)^{\times n}$$ is an isomorphism. The operations of type $$\mathtt{P}(c_1, \dots, c_n; d)$$ are recovered as the morphisms $$\mathsf{C}_\mathtt{P}([c_1, \dots, c_n], d)$$ which cover $$n_+ \to 1_i$$, $$i \mapsto 1$$.

Two types of morphisms appear in the previous discussion, which lead to the following definition: a morphism $$f : n_+ \to m_+$$ in $$\Gamma$$ is

* **inert** if the preimage of every $$j \in \underline{m} := m_+ \setminus \{*\}$$ has exactly one element. Such a morphism induces an injection $$\underline{m} \hookrightarrow \underline{n}$$. Basically, it's a morphism that "forgets" a bunch of points; think "$$\rho^i$$".
* **active** if $$f^{-1}(*) = \{ * \}$$. For any $$n$$, there is a unique active morphism $$n_+ \to 1_+$$; this is the morphism that allows us to recover the $$n$$-ary operations of $$\mathtt{P}$$.

**Definition. [HA, 2.1.1.10]** An $$\infty$$-operad (really, the category of operators of an $$\infty$$-operad) is a functor of quasi-categories $$p : \mathsf{C}^\otimes \to N\Gamma$$ such that:

1. For every inert morphism $$f : m_+ \to n_+$$ and every $$C \in \mathsf{C}^\otimes_m$$, there is a $$p$$-coCartesian morphism $$\bar{f} : C \to C'$$ lifting $$f$$, which induces a functor $$f_! : \mathsf{C}^\otimes_m \to \mathsf{C}^\otimes_n$$.

   Recall that the inert morphisms are those who "forget" points. The functor $$f_!$$ is the functor which, given an $$m$$-uple, forgets some of the factors. The object $$C$$ is a sequence of colors, and $$C'$$ is the same sequence with some colors forgotten.

2. For $$f : n_+ \to m_+$$, let $$\mathsf{C}^\otimes_f(-,-) \subset \mathsf{C}^\otimes(-,-)$$ be the connected components lying over $$f$$. Then

   $$\mathsf{C}^\otimes_f(C, C') \to \prod_{1 \le k \le m} \mathsf{C}^\otimes_{\rho^i \circ f}(C, C'_i)$$
   
   is a homotopy equivalence. This means that an "operation" $$[c_1, \dots, c_n] \to [d_1, \dots, d_n]$$ is "the same" as a collection of operations $$\mathtt{P}((c_i)_{f(i) = j}, d_j)$$.
   
3. For every collection of objects $$c_1, \dots, c_n \in \mathsf{C}^\otimes_1$$, there exists an object $$C \in \mathsf{C}^\otimes_n$$ and $$p$$-Cartesian morphisms $$C \to c_i$$ covering $$\rho^i$$.

   This means that $$\prod \rho^i_! : \mathsf{C}^\otimes_n \to (\mathsf{C}^\otimes_1)^{\times n}$$ is an equivalence.

From this data, the quategory of unary operations of the $$\infty$$-operad is given by $$\mathsf{C}^\otimes_1$$. The colors of the $$\infty$$-operad are the object of this quategory. Finally, the operations of type $$(c_1, \dots, c_n; d)$$ are the morphisms $$c_1 \oplus \dots c_n \to d$$ lying over the unique active morphism $$n_+ \to 1_+$$, where $$c_1 \oplus \dots \oplus c_n$$ is "the" object of $$\mathsf{C}^\otimes_n$$ corresponding to $$(c_1, \dots, c_n) \in (\mathsf{C}^\otimes_1)^{\times n}$$ under the equivalence of (3).

And voilà! An $$\infty$$-operad. I'm not as scared of the definition as I was when I first saw it, and I hope you aren't anymore either.

## References

* [HA] Lurie, Jacob. [*Higher Algebra*](http://www.math.harvard.edu/~lurie/papers/HA.pdf). Version of March 2016.
* [nLab] $$n$$Lab, [$$(\infty,1)$$-operad](https://ncatlab.org/nlab/show/(infinity,1\)-operad).
