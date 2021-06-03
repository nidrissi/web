---
title: Facts
date: 2017-01-01
lastMod: 2017-10-31
---

Let $\mathtt{P}$ be a (topological, for example) operad, and let $\vec{\mathtt{P}}$ be the associated bicolored operad whose algebras are triplets $(A,B,f)$ where $A$ and $B$ are $\mathtt{P}$-algebras and $f$ is a morphism of such algebras. It has two colors $a$ and $b$ and is given by:

$$
\vec{\mathtt{P}}(x_1, \dots, x_n; a) = \begin{cases} \mathtt{P}(n) & x_i = a \, \forall i, \\ \varnothing & \text{otherwise.} \end{cases}
$$

$$
\vec{\mathtt{P}}(x_1, \dots, x_n; b) = \mathtt{P}(n)
$$

Then if $\mathtt{P}$ is formal, so is $\vec{\mathtt{P}}$. This is to be contrasted with the fact that [the Swiss-Cheese operad is not formal](https://arxiv.org/abs/1404.2484), even though the operad of little $2$-disks is. The operad governing morphisms is formal, but not the one governing actions.

---

Let $\mathtt{P}$ be a dg-operad (maybe with some finiteness assumptions), and $A$ be an algebra over this operad. Then the symmetric collection $\{ A^{\otimes n} \}_{n \ge 0}$ is a right-comodule over $\mathtt{P}^\vee$. The coaction morphism

$$
A^{\otimes(k+l-1)} \xrightarrow{\circ_i^*} A^{\otimes k} \otimes \mathtt{P}^\vee(l)
$$

is dual to the map $\mathtt{P}(l) \otimes A^{\otimes(k+l-1)} \to A^{\otimes k}$ given by

$$
\rho \otimes a_1 \otimes \dots \otimes a_{k+l-1} \mapsto a_1 \otimes \dots \rho(a_i, \dots, a_{i+l-1}) \dots \otimes a_{k+l-1}.
$$

---

If $F : \mathsf{C} \times \mathsf{D} \to \mathsf{E}$ is a bifunctor that preserves reflexive coequalizers in each variable, then it preserves reflexive coequalizers in the following sense: if $M_1 \xrightarrow{d_0, d_1} M_0 \xrightarrow{d_0} M$ is a reflexive coequalizer in $\mathsf{C}$ (with reflector $s_0$), and $M'_1 \xrightarrow{d_0', d_1'} M'_0 \xrightarrow{d_0} M'$ is a reflexive coequalizer in $\mathsf{D}$ (with reflector $s'_0$), then so is

$$
F(M_1, M'_1) \rightarrow F(M_0, M'_0) \to F(M, M').
$$

This is a classical result, and the proof hinges on the following trick (that I saw in Goerss and Hopkins' _André--Quillen (co)-homology for simplicial algebras over simplicial operads_, but it can probably be found elsewhere): if $f$ equalizes $F(d_0, d'_0)$ and $F(d_1, d'_1)$, then it must also equalize $F(1, d'_0)$ and $F(1, d'_1)$, and it must also equalize $F(d_0, 1)$ and $F(d_1, 1)$. Indeed:

$$
f F(d_0, 1) = f F(d_0, d'_0) F(1, s'_0) = f F(d_1, d'_1) F(1, s'_0) = f F(d_1, 1).
$$

This then implies that if $\mathtt{P}$ is an operad, then the free $\mathtt{P}$-algebra functor preserves reflexive coequalizers. It didn't really click in before for me that this was the reason why.

---

The [retract argument](https://ncatlab.org/nlab/show/retract+argument): if $f = (X \xrightarrow{i} A \xrightarrow{p} Y)$ is a composite and if $f$ has the left lifting property against $p$, then $f$ is a retract of $i$. Similarly, if it has the right lifting property against $i$, then it is a retract of $p$. This seems to be useful for weak factorization systems, for example if $f$ is an acyclic cofibration and you manage to factorize it as something followed by a fibration, then $f$ is a retract of that something.
