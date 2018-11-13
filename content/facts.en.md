---
title: Facts
date: 2017-01-01
lastmod: 2017-10-31
---

Let {{< tex "\mathtt{P}" >}} be a (topological, for example) operad, and let {{< tex "\vec{\mathtt{P}}" >}} be the associated bicolored operad whose algebras are triplets {{< tex "(A,B,f)" >}} where {{< tex "A" >}} and {{< tex "B" >}} are {{< tex "\mathtt{P}" >}}-algebras and {{< tex "f" >}} is a morphism of such algebras. It has two colors {{< tex "a" >}} and {{< tex "b" >}} and is given by:

{{< tex display="\vec{\mathtt{P}}(x_1, \dots, x_n; a) = \begin{cases} \mathtt{P}(n) & x_i = a \, \forall i, \\ \varnothing & \text{otherwise.} \end{cases}" >}}

{{< tex display="\vec{\mathtt{P}}(x_1, \dots, x_n; b) = \mathtt{P}(n)" >}}

Then if {{< tex "\mathtt{P}" >}} is formal, so is {{< tex "\vec{\mathtt{P}}" >}}. This is to be contrasted with the fact that [the Swiss-Cheese operad is not formal](http://arxiv.org/abs/1404.2484), even though the operad of little {{< tex "2" >}}-disks is. The operad governing morphisms is formal, but not the one governing actions.

---

Let {{< tex "\mathtt{P}" >}} be a dg-operad (maybe with some finiteness assumptions), and {{< tex "A" >}} be an algebra over this operad. Then the symmetric collection {{< tex "\{ A^{\otimes n} \}_{n \ge 0}" >}} is a right-comodule over {{< tex "\mathtt{P}^\vee" >}}. The coaction morphism

{{< tex display="A^{\otimes(k+l-1)} \xrightarrow{\circ_i^*} A^{\otimes k} \otimes \mathtt{P}^\vee(l)" >}}

is dual to the map {{< tex "\mathtt{P}(l) \otimes A^{\otimes(k+l-1)} \to A^{\otimes k}" >}} given by

{{< tex display="\rho \otimes a_1 \otimes \dots \otimes a_{k+l-1} \mapsto a_1 \otimes \dots \rho(a_i, \dots, a_{i+l-1}) \dots \otimes a_{k+l-1}." >}}

---

If {{< tex "F : \mathsf{C} \times \mathsf{D} \to \mathsf{E}" >}} is a bifunctor that preserves reflexive coequalizers in each variable, then it preserves reflexive coequalizers in the following sense: if {{< tex "M_1 \xrightarrow{d_0, d_1} M_0 \xrightarrow{d_0} M" >}} is a reflexive coequalizer in {{< tex "\mathsf{C}" >}} (with reflector {{< tex "s_0" >}}), and {{< tex "M'_1 \xrightarrow{d_0', d_1'} M'_0 \xrightarrow{d_0} M'" >}} is a reflexive coequalizer in {{< tex "\mathsf{D}" >}} (with reflector {{< tex "s'_0" >}}), then so is

{{< tex display="F(M_1, M'_1) \rightarrow F(M_0, M'_0) \to F(M, M')." >}}

This is a classical result, and the proof hinges on the following trick (that I saw in Goerss and Hopkins' *André--Quillen (co)-homology for simplicial algebras over simplicial operads*, but it can probably be found elsewhere): if {{< tex "f" >}} equalizes {{< tex "F(d_0, d'_0)" >}} and {{< tex "F(d_1, d'_1)" >}}, then it must also equalize {{< tex "F(1, d'_0)" >}} and {{< tex "F(1, d'_1)" >}}, and it must also equalize {{< tex "F(d_0, 1)" >}} and {{< tex "F(d_1, 1)" >}}. Indeed:

{{< tex display="f F(d_0, 1) = f F(d_0, d'_0) F(1, s'_0) = f F(d_1, d'_1) F(1, s'_0) = f F(d_1, 1)." >}}

This then implies that if {{< tex "\mathtt{P}" >}} is an operad, then the free {{< tex "\mathtt{P}" >}}-algebra functor preserves reflexive coequalizers. It didn't really click in before for me that this was the reason why.

---

The [retract argument](https://ncatlab.org/nlab/show/retract+argument): if {{< tex "f = (X \xrightarrow{i} A \xrightarrow{p} Y)" >}} is a composite and if {{< tex "f" >}} has the left lifting property against {{< tex "p" >}}, then {{< tex "f" >}} is a retract of {{< tex "i" >}}. Similarly, if it has the right lifting property against {{< tex "i" >}}, then it is a retract of {{< tex "p" >}}. This seems to be useful for weak factorization systems, for example if {{< tex "f" >}} is an acyclic cofibration and you manage to factorize it as something followed by a fibration, then {{< tex "f" >}} is a retract of that something.
