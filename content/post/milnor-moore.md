---
date: 2016-03-10T00:00:00Z
tags: ["math", "algtop"]
title: The Milnor–Moore Theorem
toc: true
---

This post is about the Milnor--Moore theorem, a powerful tool describing the structure of (co)commutative Hopf algebras. Like the [Eckmann--Hilton argument](post/eckmann-hilton), it shows that having multiple compatible operations on the same object can lead to unexpected results about the object. Briefly, the theorem says that as soon as the Hopf algebra is cocommutative and connected, then it is isomorphic to the universal enveloping algebra of a Lie algebra (and a similar dual statement is true for commutative Hopf algebras).

<!--more-->

As the name indicates, the theorem is due to Milnor and Moore in the paper cited below. The details of this post will mostly be based on the Chapter 7 of the book of Fresse cited below, and if there's no reference for a theorem or a proposition, you can find it there. As usual, I mostly wanted to write this post because I often find myself forgetting how the proof of the theorem goes, and hopefully writing for a general audience it will fix it in my mind.

## Hopf algebras

### Algebras and coalgebras

A Hopf algebra is the combination of two structures: associative algebra and coassociative coalgebra. Let's recall what that means. From now on we assume that we are working over some field $\Bbbk$; later, we will assume that this field has characteristic zero.

**Definition.** A (unital) associative algebra is a vector space $A$ equipped with a product $\mu : A \otimes A \to A$ and a unit $\eta : \Bbbk \to A$ satisfying:

$$\mu \circ (\mu \otimes \operatorname{id}_A) = \mu \circ (\operatorname{id}_A \otimes \mu),$$

$$\mu \circ (\eta \otimes \operatorname{id}_A) = \operatorname{id}_A = \mu \circ (\operatorname{id}_A \otimes \eta).$$

If we write $\mu(a \otimes b) = a \cdot b$ and $\eta(1_\Bbbk) = 1_A$, then these two axioms merely say that $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ and $1_A \cdot a = a = a \cdot 1_A$.

The definition of a coalgebra is more-or-less formally dual:

**Definition.** A coassociative coalgebra is a vector space $C$ equipped with a coproduct $\Delta : C \to C \otimes C$ and a counit $\varepsilon : C \to \Bbbk$ satisfying:

$$(\Delta \otimes \operatorname{id}_C) \circ \Delta = (\operatorname{id}_C \otimes \Delta) \circ \Delta,$$

$$(\varepsilon \otimes \operatorname{id}_C) \circ \Delta = \operatorname{id}_C = (\operatorname{id}_C \otimes \varepsilon) \circ \Delta.$$

We will use Sweedler's notation: for $x \in C$, we write

$$\Delta(x) = \sum_{(x)} x_1 \otimes x_2.$$

The counitality axiom then becomes, for example, $\sum_{(x)} \varepsilon(x_1) x_2 = x = \sum_{(x)} x_1 \varepsilon(x_2)$.

We will immediately switch to the differential graded (dg) setting. A graded vector space is a vector space $V$ equipped with a decomposition $V = \bigoplus_{n \in \mathbb{Z}} V_n$. A differential on such a vector space is a linear map $d : V \to V$ of degree $-1$ (i.e. $d(V_n) \subset V_{n-1}$) that satisfies $d \circ d = 0$.

A **graded algebra** is a graded vector space equipped with the structure of an algebra compatible with the grading: $\mu(A_p \otimes A_q) \subset A_{p+q}$. A derivation on a graded associative algebra $A$ is a map $d : A \to A$ of degree $-1$ such that $d(ab) = (da) \cdot b + (-1)^{\vert b \vert} a \cdot (db)$ (this is the last time I'll write an explicit sign, from now on I'll use the Koszul rule of signs). A **dg-algebra** is, finally, a graded algebra equipped with a derivation $d$ satisfying $d \circ d = 0$. The definition of a **dg-coalgebra** is similar (just add "co-" in front of every word).

**Example.** The base field $\Bbbk$ itself has both the structure of an algebra and a coalgebra, given by the canonical isomorphism $\Bbbk \cong \Bbbk \otimes \Bbbk$, and the identity for the (co)unit.

### Bialgebras and Hopf algebras

**Definition.** A (dg-)**bialgebra** is a dg-vector space $H$ equipped with the structure of an algebra and the structure of a coalgebra such that the coproduct and the counit are morphisms of algebras, where $\Bbbk$ is given its canonical algebra structure (or equivalently, the product and the unit are morphisms of coalgbras).

A **Hopf algebra** is a bialgebra $H$ equipped with a linear endomorphism $\sigma : H \to H$ satisfying, for all $x \in H$:

$$\sum_{(x)} x_1 \cdot \sigma(x_2) = \eta(\varepsilon(x)) = \sum_{(x)} \sigma(x_1) \cdot x_2.$$

This is a lot of structure! There's a product, a unit, a coproduct, a counit, and an antipode, satisfying a whole bunch of relations. If it exists, the antipode is unique, but its existence is not guaranteed. Fortunately, most of the time the antipode comes for free:

**Theorem.** Let $H$ be a bialgebra, and suppose that $H$ is **connected**, i.e. $H_i = 0$ for $i < 0$ and $H_0 = \Bbbk$ (and the (co)unit are the identity). Then there exists an antipode making $H$ into a Hopf algebra.

### Examples

#### Tensor algebra

The tensor algebra $T(V)$ on some dg-module $V$ is given by:

$$T(V) = \bigoplus_{n \ge 0} V^{\otimes n},$$

with grading and differential induced by the grading and the differential of $V$ ($V^{\otimes 0} = \Bbbk$ is put in degree 0 and has trivial differential). The product is given by concatenation of tensors:

$$(v_1 \otimes \dots \otimes v_n) \cdot (v_{n+1} \otimes \dots \otimes v_{n+m}) := v_1 \otimes \dots \otimes v_{n+m},$$

and the unit is $\eta : \Bbbk \cong V^{\otimes 0}$. Then $T(V)$ is the free associative algebra on $V$: for all algebras $A$ and dg-linear morphism $f : V \to A$, there exists a unique dg-algebra morphism $T(V) \to A$ lifting $f$ (through the obvious inclusion $V = V^{\otimes 1} \subset T(V)$).

One can then define a Hopf algebra structure on $T(V)$: the counit $\varepsilon : T(V) \to \Bbbk$ lifts $0 : V \to \Bbbk$, the coproduct lifts $V \to T(V) \otimes T(V)$, $v \mapsto v \otimes 1 + 1 \otimes v$, and the antipode lifts $V \to T(V)$, $v \mapsto -v$. It's possible to explicitly describe the coproduct using [shuffles](https://ncatlab.org/nlab/show/shuffle):

$$\Delta(v_1 \otimes \dots \otimes v_n) = \sum_{p+q=n} \sum_{(\mu,\nu) \in \operatorname{Sh}_{p,q}} (v*{\mu_1} \otimes \dots \otimes v*{\mu*p}) \otimes (v*{\nu*1} \otimes \dots \otimes v*{\nu_q}).$$

Note that the coproduct is cocommutative, but the product is not commutative.

#### Tensor coalgebra

The tensor coalgebra $T^c(V)$ on some dg-module $V$ is also given by:

$$T^c(V) = \bigoplus_{n \ge 0} V^{\otimes n}.$$

The underlying dg-module is the same, but the Hopf algebra structure is different. Now it's the coproduct that's described more easily: it is given by deconcatenation of tensors,

$$\Delta(v_1 \otimes \dots \otimes v_n) = \sum_{p=0}^n (v_1 \otimes \dots \otimes v_p) \otimes (v_{p+1} \otimes \dots \otimes v_n).$$

The counit is again given by $\varepsilon(v_1 \otimes \dots \otimes v_n) = 0$ if $n \ge 1$. Then $T^c(V)$ is the cofree _conilpotent_ coassociative coalgebra on $V$: for every conilpotent coalgebra $C$ and every dg-linear morphism $f : C \to V$, there exists a unique dg-coalgebra morphism $C \to T^c(V)$ lifting $f$ through the obvious projection $T^c(V) \to V$. (A fun exercise.)

The product and the unit are defined similarly as for $T(V)$, and the product is again described using shuffles; it is commutative.

#### Symmetric coalgebras

The symmetric algebra $S(V)$ is the quotient of the tensor algebra by the ideal generated by tensors of the forms $v \otimes w - \pm w \otimes v$. It is clearly graded commutative, and the coproduct factors through the quotient, giving a Hopf algebra structure that is at the same time commutative and cocommutative.

The symmetric coalgebra $S^c(V) \subset T^c(V)$ is, on the other hand, given by invariants: $S^c_n(V) = (V^{\otimes n})^{\Sigma_n}$ is the module of tensors invariant by the action of the symmetric groups. The product and coproduct factor through the inclusion, and moreover the coproduct becomes cocommutative when restricted to $S^c(V)$: it is also a commutative and cocommutative Hopf algebra. In characteristic zero, $S(V)$ and $S^c(V)$ are in fact isomorphic using the trace map.

## Structure of Hopf algebras

### Primitive elements and indecomposable

From now on, we let $H$ be some Hopf algebra.

**Definition.** An element $x \in H$ is said to be **primitive** if $\varepsilon(x) = 0$ and $\Delta(x) = x \otimes 1 + 1 \otimes x$. The set of primitive elements is $\mathbb{P}H$.

**Proposition.** The set of primitive elements $\mathbb{P}H$ is a Lie algebra, with bracket given by the commutator $[x,y] = xy - \pm yx$.

This is not very hard to check. The functor $\mathbb{P}$ of primitive elements is in fact right adjoint to the functor $\mathbb{U}$ of universal enveloping algebras.

**Proposition.** The inclusion $V \subset S(V)$ induces isomorphism $V \cong \mathbb{P}S(V)$, where $V$ is endowed with the abelian Lie algebra structure. The inclusion $V \subset T(V)$ induces an isomorphism between $L(V)$, the free Lie algebra on $V$, and $\mathbb{P}T(V)$.

This gives a concrete way of defining the free Lie algebra.

We can do a dual construction with indecomposables. The augmentation ideal of $H$ is $\bar{H} = \ker \varepsilon$ (more generally, this is defined for an augmented algebra). The product of $H$ defines a map on the quotient $\bar{\mu} : \bar{H} \otimes \bar{H} \to \bar{H}$, and we can define:

**Definition.** The module of **indecomposables** $QH$ is the quotient $\bar{H} / \operatorname{im}(\bar{\mu}) =: \bar{H} / \bar{H}^2$.

**Proposition.** The dg-module $QH$ is a Lie coalgebra, with cobracket $\delta : QH \to QH \wedge QH$ given by the antisymmetrisation of the coproduct of $H$.

The verification of this is formally dual to the proof of the proposition about primitive elements, and $Q$ is left adjoint to the functor $\mathbb{U}^c$ of universal coenveloping coalgebras.

**Proposition.** The projection $S^c(V) \to V$ induces an isomorphism $QS^c(V) \to V$, where $V$ is endowed by the abelian Lie coalgebra structure. The projection $T^c(V) \to V$ induces an isomorphism from $QT^c(V)$ to $L^c(V)$, the cofree Lie coalgebra on $V$.

### The theorem of Milnor--Moore

Let us now assume that the base field has characteristic zero. We will not state the Milnor--Moore theorem in full generality: I will assume the restrictive hypothesis that $H$ is connected and has finite type, but the theorem applies more generally to locally conilpotent Hopf algebras.

**Theorem [Milnor--Moore].** Let $H$ be a connected, cocommutative Hopf algebra of finite type. Then the inclusion $\mathbb{P}H \subset H$ induces an isomorphism of Hopf algebras $\mathbb{U}(\mathbb{P}H) \cong H$.

One also has the dual theorem:

**Theorem${}^\vee$ [Milnor--Moore].** Let $H$ be a connected, commutative Hopf algebra of finite type. Then the quotient map $H \to QH$ induces an isomorphism of Hopf algebras $H \cong \mathbb{U}^c(QH)$.

Now the proof (of which I will just give a sketch) is rather nice. I'll more-or-less follow the original proof of Milnor--Moore. It works by induction, which is easier to understand in the dual case. We will first prove that $H \cong S^c(QH)$, then conclude by the Poincaré--Birkhoff--Witt theorem.

The first isomorphism is clear if the Hopf algebra only has a single generator (i.e. $QH$ is one-dimensional). Now if $QH = \langle x_1, \dots, x_{n+1} \rangle$, then one can quotient out by the sub-algebra $H'$ generated by the first $n$ indecomposables to get $H''$. The quotient has a single generator, and the sub-algebra has $n$ generators, so it is enough to show that $H$ is isomorphic as an algebra to the tensor product of the subalgebra and the quotient.

The quotient map $\pi : H \to H''$ has a linear section $f$ (which isn't necessarily a morphism of Hopf algebras). This yields a map $H' \otimes H'' \to H$. And now the heart of the proof is in proving that this map is an isomorphism of algebras using the Hopf algebra structure. It is used to choose the section $f$ wisely enough so that the resulting map is an isomorphism of algebras.

Now the (dual) Poincaré--Birkhoff--Witt theorem says that $\mathbb{U}^cQH \cong S^c(QH)$ is an isomorphism of algebras. The isomorphism (which is explicit) fits in a commutative triangle with the isomorphism $S^c(QH)$ just constructed and the canonical morphism of Hopf algebras $H \to \mathbb{U}^c(QH)$. Using the 2-out-of-3 property of isomorphisms, this last map is thus an isomorphism (of Hopf algebras) $H \cong \mathbb{U}^c(QH)$.

## References

- Benoit Fresse. Homotopy of Operads and Grothendieck–Teichmüller Groups. Preprint. 2015. [URL.](http://math.univ-lille1.fr/~fresse/OperadHomotopyBook/)
- John W. Milnor and John C. Moore. “On the structure of Hopf algebras”. In: _Ann. of Math._ (2) 81 (1965), pp. 211–264. issn: 0003-486X. JSTOR: [1970615](http://www.jstor.org/stable/1970615). [MR0174052](http://www.ams.org/mathscinet-getitem?mr=0174052).
