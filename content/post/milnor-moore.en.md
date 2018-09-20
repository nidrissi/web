---
date: 2016-03-10T00:00:00Z
tags: ['math', 'algtop']
title: The Milnor–Moore Theorem
---

This post is about the Milnor--Moore theorem, a powerful tool describing the structure of (co)commutative Hopf algebras. Like the [Eckmann--Hilton argument]({{< ref "/post/eckmann-hilton.en.md" >}}), it shows that having multiple compatible operations on the same object can lead to unexpected results about the object. Briefly, the theorem says that as soon as the Hopf algebra is cocommutative and connected, then it is isomorphic to the universal enveloping algebra of a Lie algebra (and a similar dual statement is true for commutative Hopf algebras).
<!--more-->

As the name indicates, the theorem is due to Milnor and Moore in the paper cited below. The details of this post will mostly be based on the Chapter 7 of the book of Fresse cited below, and if there's no reference for a theorem or a proposition, you can find it there. As usual, I mostly wanted to write this post because I often find myself forgetting how the proof of the theorem goes, and hopefully writing for a general audience it will fix it in my mind.


## Hopf algebras

### Algebras and coalgebras

A Hopf algebra is the combination of two structures: associative algebra and coassociative coalgebra. Let's recall what that means. From now on we assume that we are working over some field {{< tex "\Bbbk" >}}; later, we will assume that this field has characteristic zero.

**Definition.** A (unital) associative algebra is a vector space {{< tex "A" >}} equipped with a product {{< tex "\mu : A \otimes A \to A" >}} and a unit {{< tex "\eta : \Bbbk \to A" >}} satisfying:

{{< tex display="\mu \circ (\mu \otimes \operatorname{id}_A) = \mu \circ (\operatorname{id}_A \otimes \mu)," >}}

{{< tex display="\mu \circ (\eta \otimes \operatorname{id}_A) = \operatorname{id}_A = \mu \circ (\operatorname{id}_A \otimes \eta)." >}}

If we write {{< tex "\mu(a \otimes b) = a \cdot b" >}} and {{< tex "\eta(1_\Bbbk) = 1_A" >}}, then these two axioms merely say that {{< tex "(a \cdot b) \cdot c = a \cdot (b \cdot c)" >}} and {{< tex "1_A \cdot a = a = a \cdot 1_A" >}}.

The definition of a coalgebra is more-or-less formally dual:

**Definition.** A coassociative coalgebra is a vector space {{< tex "C" >}} equipped with a coproduct {{< tex "\Delta : C \to C \otimes C" >}} and a counit {{< tex "\varepsilon : C \to \Bbbk" >}} satisfying:

{{< tex display="(\Delta \otimes \operatorname{id}_C) \circ \Delta = (\operatorname{id}_C \otimes \Delta) \circ \Delta," >}}

{{< tex display="(\varepsilon \otimes \operatorname{id}_C) \circ \Delta = \operatorname{id}_C = (\operatorname{id}_C \otimes \varepsilon) \circ \Delta." >}}

We will use Sweedler's notation: for {{< tex "x \in C" >}}, we write

{{< tex display="\Delta(x) = \sum_{(x)} x_1 \otimes x_2." >}}

The counitality axiom then becomes, for example, {{< tex "\sum_{(x)} \varepsilon(x_1) x_2 = x = \sum_{(x)} x_1 \varepsilon(x_2)" >}}.

We will immediately switch to the differential graded (dg) setting. A graded vector space is a vector space {{< tex "V" >}} equipped with a decomposition {{< tex "V = \bigoplus_{n \in \mathbb{Z}} V_n" >}}. A differential on such a vector space is a linear map {{< tex "d : V \to V" >}} of degree {{< tex "-1" >}} (i.e. {{< tex "d(V_n) \subset V_{n-1}" >}}) that satisfies {{< tex "d \circ d = 0" >}}.

A **graded algebra** is a graded vector space equipped with the structure of an algebra compatible with the grading: {{< tex "\mu(A_p \otimes A_q) \subset A_{p+q}" >}}. A derivation on a graded associative algebra {{< tex "A" >}} is a map {{< tex "d : A \to A" >}} of degree {{< tex "-1" >}} such that {{< tex "d(ab) = (da) \cdot b + (-1)^{\vert b \vert} a \cdot (db)" >}} (this is the last time I'll write an explicit sign, from now on I'll use the Koszul rule of signs). A **dg-algebra** is, finally, a graded algebra equipped with a derivation {{< tex "d" >}} satisfying {{< tex "d \circ d = 0" >}}. The definition of a **dg-coalgebra** is similar (just add "co-" in front of every word).

**Example.** The base field {{< tex "\Bbbk" >}} itself has both the structure of an algebra and a coalgebra, given by the canonical isomorphism {{< tex "\Bbbk \cong \Bbbk \otimes \Bbbk" >}}, and the identity for the (co)unit.

### Bialgebras and Hopf algebras

**Definition.** A (dg-)**bialgebra** is a dg-vector space {{< tex "H" >}} equipped with the structure of an algebra and the structure of a coalgebra such that the coproduct and the counit are morphisms of algebras, where {{< tex "\Bbbk" >}} is given its canonical algebra structure (or equivalently, the product and the unit are morphisms of coalgbras).

A **Hopf algebra** is a bialgebra {{< tex "H" >}} equipped with a linear endomorphism {{< tex "\sigma : H \to H" >}} satisfying, for all {{< tex "x \in H" >}}:

{{< tex display="\sum_{(x)} x_1 \cdot \sigma(x_2) = \eta(\varepsilon(x)) = \sum_{(x)} \sigma(x_1) \cdot x_2." >}}

This is a lot of structure! There's a product, a unit, a coproduct, a counit, and an antipode, satisfying a whole bunch of relations. If it exists, the antipode is unique, but its existence is not guaranteed. Fortunately, most of the time the antipode comes for free:

**Theorem.** Let {{< tex "H" >}} be a bialgebra, and suppose that {{< tex "H" >}} is **connected**, i.e. {{< tex "H_i = 0" >}} for {{< tex "i < 0" >}} and {{< tex "H_0 = \Bbbk" >}} (and the (co)unit are the identity). Then there exists an antipode making {{< tex "H" >}} into a Hopf algebra.

### Examples

#### Tensor algebra

The tensor algebra {{< tex "T(V)" >}} on some dg-module {{< tex "V" >}} is given by:

{{< tex display="T(V) = \bigoplus_{n \ge 0} V^{\otimes n}," >}}

with grading and differential induced by the grading and the differential of {{< tex "V" >}} ({{< tex "V^{\otimes 0} = \Bbbk" >}} is put in degree 0 and has trivial differential). The product is given by concatenation of tensors:

{{< tex display="(v_1 \otimes \dots \otimes v_n) \cdot (v_{n+1} \otimes \dots \otimes v_{n+m}) := v_1 \otimes \dots \otimes v_{n+m}," >}}

and the unit is {{< tex "\eta : \Bbbk \cong V^{\otimes 0}" >}}. Then {{< tex "T(V)" >}} is the free associative algebra on {{< tex "V" >}}: for all algebras {{< tex "A" >}} and dg-linear morphism {{< tex "f : V \to A" >}}, there exists a unique dg-algebra morphism {{< tex "T(V) \to A" >}} lifting {{< tex "f" >}} (through the obvious inclusion {{< tex "V = V^{\otimes 1} \subset T(V)" >}}).

One can then define a Hopf algebra structure on {{< tex "T(V)" >}}: the counit {{< tex "\varepsilon : T(V) \to \Bbbk" >}} lifts {{< tex "0 : V \to \Bbbk" >}}, the coproduct lifts {{< tex "V \to T(V) \otimes T(V)" >}}, {{< tex "v \mapsto v \otimes 1 + 1 \otimes v" >}}, and the antipode lifts {{< tex "V \to T(V)" >}}, {{< tex "v \mapsto -v" >}}. It's possible to explicitly describe the coproduct using [shuffles](https://ncatlab.org/nlab/show/shuffle):

{{< tex display="\Delta(v_1 \otimes \dots \otimes v_n) = \sum_{p+q=n} \sum_{(\mu,\nu) \in \operatorname{Sh}_{p,q}} (v_{\mu_1} \otimes \dots \otimes v_{\mu_p}) \otimes (v_{\nu_1} \otimes \dots \otimes v_{\nu_q})." >}}

Note that the coproduct is cocommutative, but the product is not commutative.

#### Tensor coalgebra

The tensor coalgebra {{< tex "T^c(V)" >}} on some dg-module {{< tex "V" >}} is also given by:

{{< tex display="T^c(V) = \bigoplus_{n \ge 0} V^{\otimes n}." >}}

The underlying dg-module is the same, but the Hopf algebra structure is different. Now it's the coproduct that's described more easily: it is given by deconcatenation of tensors,

{{< tex display="\Delta(v_1 \otimes \dots \otimes v_n) = \sum_{p=0}^n (v_1 \otimes \dots \otimes v_p) \otimes (v_{p+1} \otimes \dots \otimes v_n)." >}}

The counit is again given by {{< tex "\varepsilon(v_1 \otimes \dots \otimes v_n) = 0" >}} if {{< tex "n \ge 1" >}}. Then {{< tex "T^c(V)" >}} is the cofree *conilpotent* coassociative coalgebra on {{< tex "V" >}}: for every conilpotent coalgebra {{< tex "C" >}} and every dg-linear morphism {{< tex "f : C \to V" >}}, there exists a unique dg-coalgebra morphism {{< tex "C \to T^c(V)" >}} lifting {{< tex "f" >}} through the obvious projection {{< tex "T^c(V) \to V" >}}. (A fun exercise.)

The product and the unit are defined similarly as for {{< tex "T(V)" >}}, and the product is again described using shuffles; it is commutative.

#### Symmetric coalgebras

The symmetric algebra {{< tex "S(V)" >}} is the quotient of the tensor algebra by the ideal generated by tensors of the forms {{< tex "v \otimes w - \pm w \otimes v" >}}. It is clearly graded commutative, and the coproduct factors through the quotient, giving a Hopf algebra structure that is at the same time commutative and cocommutative.

The symmetric coalgebra {{< tex "S^c(V) \subset T^c(V)" >}} is, on the other hand, given by invariants: {{< tex "S^c_n(V) = (V^{\otimes n})^{\Sigma_n}" >}} is the module of tensors invariant by the action of the symmetric groups. The product and coproduct factor through the inclusion, and moreover the coproduct becomes cocommutative when restricted to {{< tex "S^c(V)" >}}: it is also a commutative and cocommutative Hopf algebra. In characteristic zero, {{< tex "S(V)" >}} and {{< tex "S^c(V)" >}} are in fact isomorphic using the trace map.

## Structure of Hopf algebras

### Primitive elements and indecomposable

From now on, we let {{< tex "H" >}} be some Hopf algebra.

**Definition.** An element {{< tex "x \in H" >}}  is said to be **primitive** if {{< tex "\varepsilon(x) = 0" >}} and {{< tex "\Delta(x) = x \otimes 1 + 1 \otimes x" >}}. The set of primitive elements is {{< tex "\mathbb{P}H" >}}.

**Proposition.** The set of primitive elements {{< tex "\mathbb{P}H" >}} is a Lie algebra, with bracket given by the commutator {{< tex "[x,y] = xy - \pm yx" >}}.

This is not very hard to check. The functor {{< tex "\mathbb{P}" >}} of primitive elements is in fact right adjoint to the functor {{< tex "\mathbb{U}" >}} of universal enveloping algebras.

**Proposition.** The inclusion {{< tex "V \subset S(V)" >}} induces isomorphism {{< tex "V \cong \mathbb{P}S(V)" >}}, where {{< tex "V" >}} is endowed with the abelian Lie algebra structure. The inclusion {{< tex "V \subset T(V)" >}} induces an isomorphism between {{< tex "L(V)" >}}, the free Lie algebra on {{< tex "V" >}}, and {{< tex "\mathbb{P}T(V)" >}}.

This gives a concrete way of defining the free Lie algebra.

We can do a dual construction with indecomposables. The augmentation ideal of {{< tex "H" >}} is {{< tex "\bar{H} = \ker \varepsilon" >}} (more generally, this is defined for an augmented algebra). The product of {{< tex "H" >}} defines a map on the quotient {{< tex "\bar{\mu} : \bar{H} \otimes \bar{H} \to \bar{H}" >}}, and we can define:

**Definition.** The module of **indecomposables** {{< tex "QH" >}} is the quotient {{< tex "\bar{H} / \operatorname{im}(\bar{\mu}) =: \bar{H} / \bar{H}^2" >}}.

**Proposition.** The dg-module {{< tex "QH" >}} is a Lie coalgebra, with cobracket {{< tex "\delta : QH \to QH \wedge QH" >}} given by the antisymmetrisation of the coproduct of {{< tex "H" >}}.

The verification of this is formally dual to the proof of the proposition about primitive elements, and {{< tex "Q" >}} is left adjoint to the functor {{< tex "\mathbb{U}^c" >}} of universal coenveloping coalgebras.

**Proposition.** The projection {{< tex "S^c(V) \to V" >}} induces an isomorphism {{< tex "QS^c(V) \to V" >}}, where {{< tex "V" >}} is endowed by the abelian Lie coalgebra structure. The projection {{< tex "T^c(V) \to V" >}} induces an isomorphism from {{< tex "QT^c(V)" >}} to {{< tex "L^c(V)" >}}, the cofree Lie coalgebra on {{< tex "V" >}}.

### The theorem of Milnor--Moore

Let us now assume that the base field has characteristic zero. We will not state the Milnor--Moore theorem in full generality: I will assume the restrictive hypothesis that {{< tex "H" >}} is connected and has finite type, but the theorem applies more generally to locally conilpotent Hopf algebras.

**Theorem [Milnor--Moore].** Let {{< tex "H" >}} be a connected, cocommutative Hopf algebra of finite type. Then the inclusion {{< tex "\mathbb{P}H \subset H" >}} induces an isomorphism of Hopf algebras {{< tex "\mathbb{U}(\mathbb{P}H) \cong H" >}}.

One also has the dual theorem:

**Theorem{{< tex "{}^\vee" >}} [Milnor--Moore].** Let {{< tex "H" >}} be a connected, commutative Hopf algebra of finite type. Then the quotient map {{< tex "H \to QH" >}} induces an isomorphism of Hopf algebras {{< tex "H \cong \mathbb{U}^c(QH)" >}}.

Now the proof (of which I will just give a sketch) is rather nice. I'll more-or-less follow the original proof of Milnor--Moore. It works by induction, which is easier to understand in the dual case. We will first prove that {{< tex "H \cong S^c(QH)" >}}, then conclude by the Poincaré--Birkhoff--Witt theorem.

The first isomorphism is clear if the Hopf algebra only has a single generator (i.e. {{< tex "QH" >}} is one-dimensional). Now if {{< tex "QH = \langle x_1, \dots, x_{n+1} \rangle" >}}, then one can quotient out by the sub-algebra {{< tex "H'" >}} generated by the first {{< tex "n" >}} indecomposables to get {{< tex "H''" >}}. The quotient has a single generator, and the sub-algebra has {{< tex "n" >}} generators, so it is enough to show that {{< tex "H" >}} is isomorphic as an algebra to the tensor product of the subalgebra and the quotient.

The quotient map {{< tex "\pi : H \to H''" >}} has a linear section {{< tex "f" >}} (which isn't necessarily a morphism of Hopf algebras). This yields a map {{< tex "H' \otimes H'' \to H" >}}. And now the heart of the proof is in proving that this map is an isomorphism of algebras using the Hopf algebra structure. It is used to choose the section {{< tex "f" >}} wisely enough so that the resulting map is an isomorphism of algebras.

Now the (dual) Poincaré--Birkhoff--Witt theorem says that {{< tex "\mathbb{U}^cQH \cong S^c(QH)" >}} is an isomorphism of algebras. The isomorphism (which is explicit) fits in a commutative triangle with the isomorphism {{< tex "S^c(QH)" >}} just constructed and the canonical morphism of Hopf algebras {{< tex "H \to \mathbb{U}^c(QH)" >}}. Using the 2-out-of-3 property of isomorphisms, this last map is thus an isomorphism (of Hopf algebras) {{< tex "H \cong \mathbb{U}^c(QH)" >}}.

## References

* Benoit Fresse. Homotopy of Operads and Grothendieck–Teichmüller Groups. Preprint. 2015. [URL.](http://math.univ-lille1.fr/~fresse/OperadHomotopyBook/)
* John W. Milnor and John C. Moore. “On the structure of Hopf algebras”. In: *Ann. of Math.* (2) 81 (1965), pp. 211–264. issn: 0003-486X. JSTOR: [1970615](http://www.jstor.org/stable/1970615). [MR0174052](http://www.ams.org/mathscinet-getitem?mr=0174052).