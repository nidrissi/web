---
date: 2016-05-06T00:00:00Z
tags: ['math', 'algtop', 'operads', 'higher-cat']
title: Infinity-Operads Demystified
---

The purpose of this post is to record the definition of {{< tex "\infty" >}}-operads and explain why it works like that. For this I'm using Lurie's definition of {{< tex "\infty" >}}-operads; there is also a definition by Cisinski--Moerdijk--Weiss using dendroidal sets, about which I might talk later.

Indeed, the definition on an {{< tex "\infty" >}}-operad is a bit mysterious taken "as-is" -- see [HA, §2.1.1.10]. My goal is to explain how to reach this definition, mostly for my own sake. Most of what follows is taken either from the book *Higher Algebra*, the {{< tex "n" >}}Lab, or the semester-long workshop about hgiher category theory in Lille in 2015.
<!--more-->

## Cartesian morphisms

### Grothendieck fibrations

The first thing to explain would be Cartesian (and coCartesian) morphisms. They are generalizations of [Grothendieck fibrations](https://ncatlab.org/nlab/show/Grothendieck+fibration) from ordinary category theory. The basic idea of a Grothendieck fibration {{< tex "p : E \to B" >}} is that the fibers {{< tex "E_b = p^{-1}(b)" >}} depend contravariantly on {{< tex "b" >}}, i.e. given a morphism {{< tex "f : b \to b'" >}}, there exists a lift (a functor) {{< tex "\bar{f} : E_{b'} \to E_b" >}}. The definition of a Grothendieck fibration is exactly what's needed for all this to work correctly.

Following the {{< tex "n" >}}Lab, a morphism {{< tex "\phi : e' \to e" >}} is said to be **{{< tex "p" >}}-Cartesian lift {{< tex "\phi : e' \to e" >}}. Then {{< tex "\hat{p}(f)(b) := e' \in E_{b'}" >}}. The unique factorizations in the definition of a fibration makes this into a functor {{< tex "\hat{p}(f)" >}}, and this becomes a (pseudo)functor {{< tex "B \to \mathsf{Cat}^{\rm op}" >}}.

### Quasi-categories

The study of {{< tex "\infty" >}}-operads obviously involves higher category theory, and in Lurie's setting higher categories are quasi-categories (I think some people call them quategories). There are plenty of explanations of quasi-categories online, so I will just record the bare definitions here.

A **quasi-category** is a simplicial set {{< tex "C_\bullet \Delta^{\rm op} \to \mathsf{Set}" >}} such that all inner horns can be filled, i.e. every morphism {{< tex "\Lambda_k^n \to C" >}} can be extended to {{< tex "\Delta^n" >}} for {{< tex "1 < k < n" >}} (compare with Kan complexes, where outer horns can be filled too).

The set {{< tex "C_0" >}} is to be understood as the set of objects of the quasi-categories; the set {{< tex "C_1" >}} is to be understood as the set of morphisms. Faces {{< tex "d_0, d_1 : C_1 \to C_0" >}} give the target and the source of a morphism, and the degeneracy {{< tex "s_0 : C_0 \to C_1" >}} gives the identity of an object. The set {{< tex "C_2" >}} gives information about composition: a composable pair of arrows is the same thing as a morphism {{< tex "\sigma : \Lambda_1^2 \to C" >}}, which extends to {{< tex "\tilde\sigma \in C_2" >}}; then {{< tex "d_1\tilde\sigma" >}} is "a composite" of the pair of composable morphisms. Higher {{< tex "C_n" >}} give coherence conditions for composition, and everything works out (the space of possible compositions for a pair of composable morphisms is contractible, {{< tex "- \circ \operatorname{id}_x" >}} is homotopic to the identity and so on).

The nerve of a plain category is an example of a quasi-category.

### (co)Cartesian morphisms

The definition of a Cartesian morphism essentially mimics the definition of a Grothendieck fibration, except that the categories are replaced with quasi-categories. I won't dwell too much on this (see [the {{< tex "n" >}}Lab article](https://ncatlab.org/nlab/show/Cartesian+morphism)), since as far as I can tell there's no hidden surprise here, the most difficult thing being to determine how to translate the axioms in terms of quasi-categories. Let's just note that a morphism {{< tex "p : E \to B" >}} is said to be a **coCartesian morphism** (AKA opfibration) if {{< tex "p^{\rm op} : E^{\rm op} \to B^{\rm op}" >}} is Cartesian. This means that the fibers {{< tex "E_b" >}} depends covariantly instead of contravariantly on {{< tex "b" >}}. I am not 100% sure why a different name is used for plain categories and for quasi-categories; maybe it's just a historical artefact?

## Symmetric monoidal {{< tex "\infty" >}}-categories

Rather than plain operads, {{< tex "\infty" >}}-operads are a generalization of *colored* operads, AKA multicategories. As such, they have multiple objects, and behave more like a {{< tex "\infty" >}}-category where morphisms can have multiple inputs instead of just one. Let's first define symmetric monoidal {{< tex "\infty" >}}-categories, where a morphism {{< tex "c_1 \otimes \dots \otimes c_n \to d" >}} can be thought of as a morphism with multiple inputs. (This section is taken straight from the introduction of Chapter 2 of *Higher Algebra* and adapted to my notations).

Given a symmetric monoidal category {{< tex "\mathsf{C}" >}}, one can construct its **category of operators** {{< tex "\mathsf{C}^\otimes" >}}. This is a category over {{< tex "\Gamma" >}}, the category of finite pointed sets with objects {{< tex "n_+ = \{ *, 1, \dots, n \}" >}}.

The objects of {{< tex "\mathsf{C}^\otimes" >}} are finite sequences {{< tex "[c_1, \dots, c_n]" >}} of objects of {{< tex "\mathsf{C}" >}}. The morphisms {{< tex "[c_1, \dots, c_n] \to [d_1, \dots, d_m]" >}} consist of:

* a morphism {{< tex "\alpha : n_+ \to m_+" >}} in {{< tex "\Gamma" >}};
* morphisms {{< tex "\bigotimes_{\alpha(i) = j} c_i \to d_j" >}} for {{< tex "1 \le j \le m" >}}.

Then {{< tex "p[c_1, \dots, c_n]" >}} is {{< tex "n_+" >}}, and the image of a morphism by {{< tex "p" >}} is the "{{< tex "\alpha" >}}" part. Consistenly with the previous notation for fibers, let {{< tex "\mathsf{C}^\otimes_n := p^{-1}(n_+)" >}}. Note that {{< tex "\Gamma" >}} is the category of operators of the terminal category (equipped with its unique symmetric monoidal structure).

Then {{< tex "\mathsf{C}^\otimes \xrightarrow{p} \Gamma" >}} satisfies the two fundamental properties:

* **(M1)** {{< tex "p" >}} is a coCartesian morphism (opfibration).

If we unroll the definition, this means that for every {{< tex "[c_1, \dots, c_n] \in \mathsf{C}^\otimes" >}} and for every {{< tex "f : n_+ \to m_+" >}}, there is some morphism {{< tex "\bar{f} : [c_1, \dots, c_n] \to [d_1, \dots, d_m]" >}} that covers {{< tex "f" >}} and such that for all morphism {{< tex "\bar{g} : [c_1, \dots, c_n] \to [d_1, \dots, d_k]" >}} and every factorization of {{< tex "f" >}} through {{< tex "g = p(\bar{g})" >}}, there is a factorization of {{< tex "\bar{f}" >}} through {{< tex "\bar{g}" >}} inducing it. Indeed, we can choose {{< tex "d_j" >}} to be {{< tex "\bigotimes_{f(i) = j} c_i" >}} and see that everything works. Recall that this means the fibers {{< tex "\mathsf{C}^\otimes_n" >}} depend covariantly on {{< tex "n" >}}.

* **(M2)** The fiber {{< tex "\mathsf{C}^\otimes_n" >}} is isomorphic to {{< tex "\mathsf{C}^{\times n}" >}} via the product of the functors induced by {{< tex "\rho^i : n_+ \to 1_+" >}} given by {{< tex "\rho^i(i) = 1" >}} and {{< tex "\rho^i(j \neq i) = *" >}}.

Indeed, a morphism {{< tex "[c_1, \dots, c_n] \to [d_1, \dots, d_n]" >}} in {{< tex "\mathsf{C}^\otimes" >}} which covers the identity of {{< tex "n_+" >}} is uniquely determined by morphism {{< tex "c_i \to d_i" >}}; one just has to see that this morphism is given by {{< tex "\hat{p}(\rho^i) = \rho^i_*" >}}.

Conversely, if {{< tex "\mathsf{D} \xrightarrow{p} \Gamma" >}} is a functor that satisfies (M1) and (M2), let {{< tex "\mathsf{C} = \mathsf{D}_1 = p^{-1}(1_+)" >}}. Then {{< tex "\mathsf{C}" >}} becomes a symmetric monoidal category.

* The fold map {{< tex "\alpha : 2_+ \to 1_+" >}} ({{< tex "\alpha(1) = \alpha(2) = 1" >}}) induces, by (M1) and (M2), a functor (well defined up to equivalence) {{< tex "\otimes : \mathsf{C}^{\times 2} \xleftarrow{\sim} \mathsf{D}_2 \xrightarrow{\alpha_*} \mathsf{C}" >}}.
* By (M2), {{< tex "\mathsf{D}_0 = *" >}} is the terminal category, and the unique morphism {{< tex "0_+ \to 1_+" >}} induces {{< tex "* \to \mathsf{C}" >}}, which gives the unit object of {{< tex "\mathsf{C}" >}}.
* Since {{< tex "\alpha" >}} is "symmetric" (meaning {{< tex "\alpha(1) = \alpha(2)" >}}), "unital" (meaning {{< tex "\rho^1 \alpha = \rho^2 \alpha = \operatorname{id}_{1_+}" >}}) and "associative", then so are the corresponding functors, always up to isomorphism.

So axioms (M1) and (M2) capture exactly what it means to be a symmetric monoidal category. There are many possible equivalent definitions of monoidal categories, but Lurie's insight was to find one that could be adapted to quasi-categories. Indeed, he defines:

**Definition. [HA, 2.0.0.7]** A symmetric monoidal {{< tex "\infty" >}}-category is a coCartesian fibration {{< tex "p : \mathsf{C}^\otimes \to N\Gamma" >}} such that the maps {{< tex "\rho^i : n_+ \to 1_+" >}} induce an equivalence {{< tex "\mathsf{C}^\otimes_n \to (\mathsf{C}^\otimes_1)^{\times n}" >}}.

In this definition, {{< tex "\mathsf{C}^\otimes" >}} should be thought of as the {{< tex "\infty" >}}-category of operators, and the underlying {{< tex "\infty" >}}-category is really {{< tex "\mathsf{C}^\otimes_1 = p^{-1}(1_+)" >}}. The monoidal product and the unit are induced as above.

## {{< tex "\infty" >}}-operads

Following the same pattern, Lurie defines the category of operators of a colored operad. This satisfies a bunch of axioms, which allow one to recover the colored operad from the category of operators. The axioms are also laid out in such a way that generalizing them to {{< tex "\infty" >}}-categories is possible, thus giving the definition of {{< tex "\infty" >}}-operads.

Let {{< tex "\mathtt{P}" >}} be a colored operad. Its category of operators {{< tex "\mathsf{C}_\mathtt{P}" >}} is given by:

* objects are sequences of colors {{< tex "[c_1, \dots, c_n]" >}};
* morphisms {{< tex "[c_1, \dots, c_n] \to [d_1, \dots, d_m]" >}} are given by a morphism {{< tex "f : n_+ \to m_+" >}}, and for all {{< tex "1 \le j \le m" >}}, an element in {{< tex "\mathtt{P}((c_i)_{f(i) = j}; d_j)" >}}.

Like before, there's a functor {{< tex "p : \mathsf{C}_\mathtt{P} \to \Gamma" >}} given by {{< tex "p[c_1, \dots, c_n] = n_+" >}}. This is a Grothendieck opfibration, which allows us the recover {{< tex "\mathtt{P}" >}} from {{< tex "\mathsf{C}_\mathtt{P}" >}}.

Let {{< tex "\mathtt{P}_n := p^{-1}(n_+)" >}}. In particular, {{< tex "\mathtt{P}_1" >}} is the category of unary operations in {{< tex "\mathtt{P}" >}} (also called "underlying category" of {{< tex "\mathtt{P}" >}}). The colors of {{< tex "\mathtt{P}" >}} are given by the objects of {{< tex "\mathtt{P}_1" >}}. As before, {{< tex "\prod_i \rho^i_* : \mathtt{P}_n \to (\mathtt{P}_1)^{\times n}" >}} is an isomorphism. The operations of type {{< tex "\mathtt{P}(c_1, \dots, c_n; d)" >}} are recovered as the morphisms {{< tex "\mathsf{C}_\mathtt{P}([c_1, \dots, c_n], d)" >}} which cover {{< tex "n_+ \to 1_i" >}}, {{< tex "i \mapsto 1" >}}.

Two types of morphisms appear in the previous discussion, which lead to the following definition: a morphism {{< tex "f : n_+ \to m_+" >}} in {{< tex "\Gamma" >}} is

* **inert** if the preimage of every {{< tex "j \in \underline{m} := m_+ \setminus \{*\}" >}} has exactly one element. Such a morphism induces an injection {{< tex "\underline{m} \hookrightarrow \underline{n}" >}}. Basically, it's a morphism that "forgets" a bunch of points; think "{{< tex "\rho^i" >}}".
* **active** if {{< tex "f^{-1}(*) = \{ * \}" >}}. For any {{< tex "n" >}}, there is a unique active morphism {{< tex "n_+ \to 1_+" >}}; this is the morphism that allows us to recover the {{< tex "n" >}}-ary operations of {{< tex "\mathtt{P}" >}}.

**Definition. [HA, 2.1.1.10]** An {{< tex "\infty" >}}-operad (really, the category of operators of an {{< tex "\infty" >}}-operad) is a functor of quasi-categories {{< tex "p : \mathsf{C}^\otimes \to N\Gamma" >}} such that:

1. For every inert morphism {{< tex "f : m_+ \to n_+" >}} and every {{< tex "C \in \mathsf{C}^\otimes_m" >}}, there is a {{< tex "p" >}}-coCartesian morphism {{< tex "\bar{f} : C \to C'" >}} lifting {{< tex "f" >}}, which induces a functor {{< tex "f_! : \mathsf{C}^\otimes_m \to \mathsf{C}^\otimes_n" >}}.  
   Recall that the inert morphisms are those who "forget" points. The functor {{< tex "f_!" >}} is the functor which, given an {{< tex "m" >}}-uple, forgets some of the factors. The object {{< tex "C" >}} is a sequence of colors, and {{< tex "C'" >}} is the same sequence with some colors forgotten.
2. For {{< tex "f : n_+ \to m_+" >}}, let {{< tex "\mathsf{C}^\otimes_f(-,-) \subset \mathsf{C}^\otimes(-,-)" >}} be the connected components lying over {{< tex "f" >}}. Then
   {{< texd "\mathsf{C}^\otimes_f(C, C') \to \prod_{1 \le k \le m} \mathsf{C}^\otimes_{\rho^i \circ f}(C, C'_i)" >}}
   is a homotopy equivalence. This means that an "operation" {{< tex "[c_1, \dots, c_n] \to [d_1, \dots, d_n]" >}} is "the same" as a collection of operations {{< tex "\mathtt{P}((c_i)_{f(i) = j}, d_j)" >}}.
3. For every collection of objects {{< tex "c_1, \dots, c_n \in \mathsf{C}^\otimes_1" >}}, there exists an object {{< tex "C \in \mathsf{C}^\otimes_n" >}} and {{< tex "p" >}}-Cartesian morphisms {{< tex "C \to c_i" >}} covering {{< tex "\rho^i" >}}.  
   This means that {{< tex "\prod \rho^i_! : \mathsf{C}^\otimes_n \to (\mathsf{C}^\otimes_1)^{\times n}" >}} is an equivalence.
   
From this data, the quategory of unary operations of the {{< tex "\infty" >}}-operad is given by {{< tex "\mathsf{C}^\otimes_1" >}}. The colors of the {{< tex "\infty" >}}-operad are the object of this quategory. Finally, the operations of type {{< tex "(c_1, \dots, c_n; d)" >}} are the morphisms {{< tex "c_1 \oplus \dots c_n \to d" >}} lying over the unique active morphism {{< tex "n_+ \to 1_+" >}}, where {{< tex "c_1 \oplus \dots \oplus c_n" >}} is "the" object of {{< tex "\mathsf{C}^\otimes_n" >}} corresponding to {{< tex "(c_1, \dots, c_n) \in (\mathsf{C}^\otimes_1)^{\times n}" >}} under the equivalence of (3).

And voilà! An {{< tex "\infty" >}}-operad. I'm not as scared of the definition as I was when I first saw it, and I hope you aren't anymore either.

## References

* [HA] Lurie, Jacob. [*Higher Algebra*](http://www.math.harvard.edu/~lurie/papers/HA.pdf). Version of March 2016.
* [nLab] {{< tex "n" >}}Lab, [{{< tex "(\infty,1)" >}}-operad](https://ncatlab.org/nlab/show/(infinity,1\)-operad).
