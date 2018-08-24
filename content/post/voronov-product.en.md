---
date: 2016-09-22T00:00:00Z
tags: ['math', 'operads', 'swiss-cheese']
title: The Voronov Product of Operads
---

My first real post in a while! It turns out that writing an actual paper (cf. previous blog post) takes a lot of time and effort. Who knew?

The Voronov product of operads is an operation introduced by Voronov in his paper *The Swiss-cheese operad* (he just called it "the product"). It combines an operad and a multiplicative operad to yield a new colored operad; the main example I know is the homology of the Swiss-cheese operad. This is a construction that I use in my preprint [Swiss-Cheese operad and Drinfeld center](http://arxiv.org/abs/1507.06844), where as far as I know I coined the name "Voronov product" -- I haven't seen this operation at all outside of Voronov's paper. I wanted to advertise it a bit because I find it quite interesting and I'm eager to see what people can do with it.
<!--more-->

### Voronov products

The setting is as follows. Consider two symmetric one-colored operads, {{< tex "\mathtt{P}" >}} and {{< tex "\mathtt{Q}" >}}, in some monoidal category. Suppose that you're also given a morphism of operads {{< tex "\mathtt{Com} \to \mathtt{P}" >}}, where {{< tex "\mathtt{Com}" >}} is the operad of commutative algebras. Then Voronov builds a new, bicolored operad {{< tex "\mathtt{P} \otimes \mathtt{Q}" >}}.

This operad has two colors, {{< tex "\mathfrak{c}" >}} and {{< tex "\mathfrak{o}" >}}, that you can think of as "open" and "closed" colors. The operations with closed output are exactly given by {{< tex "\mathtt{P}" >}}, that is:

{{< tex display="(\mathtt{P} \otimes \mathtt{Q})(\mathfrak{c}, \dots, \mathfrak{c}; \mathfrak{c}) = \mathtt{P}(n)," >}}

whereas if any of the colors {{< tex "x_i" >}} is not {{< tex "\mathfrak{c}" >}},

{{< tex display="(\mathtt{P} \otimes \mathtt{Q})(x_1, \dots, x_n; \mathfrak{c}) = \varnothing." >}}

This is an example of a *relative* operad (over {{< tex "\mathtt{P}" >}}), also known as a *Swiss-cheese type* operad. This type of operad can equivalently be seen as an operad in the category of right modules over {{< tex "\mathtt{P}" >}}.

Composition of such operations is given by the composition of {{< tex "\mathtt{P}" >}}. The operations of {{< tex "\mathtt{P} \otimes \mathtt{Q}" >}} with {{< tex "n" >}} open inputs, {{< tex "m" >}} closed inputs, and an open output, are given by:

{{< tex display="(\mathtt{P} \otimes \mathtt{Q})(n,m) = \mathtt{P}(m) \otimes \mathtt{Q}(n)." >}}

There are two kinds of composition to define. To insert an operation with closed output in an operation with open output, one must define:

{{< tex display="\circ_{i}^{\mathfrak c} : \bigl( \mathtt{P}(m) \otimes \mathtt{Q}(n) \bigr) \otimes \mathtt{P}(m') \to \mathtt{P}(m+m'-1) \otimes \mathtt{Q}(n)." >}}

This composition doesn't touch the {{< tex "\mathtt{Q}(n)" >}} factor, and uses the composition of {{< tex "\mathtt{P}" >}} on the rest. To insert an operation with open output, one must also define:

{{< tex display="\circ_{i}^{\mathfrak c} : \bigl( \mathtt{P}(m) \otimes \mathtt{Q}(n) \bigr) \otimes \bigl( \mathtt{P}(m') \otimes \mathtt{Q}(n') \bigr) \to \mathtt{P}(m+m') \otimes \mathtt{Q}(n+n'-1)." >}}

On the {{< tex "\mathtt{Q}" >}} factors, this is simply given by the composition of {{< tex "\mathtt{Q}" >}}. On the {{< tex "\mathtt{P}" >}} factors, recall that we are given a morphism of operads {{< tex "\mathtt{Com} \to \mathtt{P}" >}}; we thus have some multiplication {{< tex "\mu \in \mathtt{P}(2)" >}}, and we can use it to define:

{{< tex display="\begin{align} \mathtt{P}(m) \otimes \mathtt{P}(m') & \to \mathtt{P}(m+m') \\ p \otimes p' & \mapsto \mu(p, p'). \end{align}" >}}

### Algebras over Voronov products

Algebras over {{< tex "\mathtt{P} \otimes \mathtt{Q}" >}} have a particularly nice description. Such an algebra is a pair {{< tex "(A,B)" >}} where {{< tex "A" >}} is an algebra over {{< tex "\mathtt{P}" >}} and {{< tex "B" >}} is an algebra over {{< tex "\mathtt{Q}" >}}. Since we are given a fixed morphism {{< tex "\mathtt{Com} \to \mathtt{P}" >}}, it follows that {{< tex "A" >}} is endowed with a commutative algebra. There is finally an action of {{< tex "A" >}} on {{< tex "B" >}}:

{{< tex display="\nu : A \otimes B \to B," >}}

corresponding to {{< tex "\operatorname{id} \otimes \operatorname{id} \in \mathtt{P}(1) \otimes \mathtt{Q}(1)" >}}. This action has to satisfy the following condition, for all {{< tex "q \in \mathtt{Q}(n)" >}}:

{{< tex display="q(a_1 \cdot b_1, \dots, a_n \cdot b_n) = (a_1 \dots a_n) \cdot q(b_1, \dots, b_n)." >}}

### Example: the homology of the Swiss-cheese operad

The main example of a Voronov product I know is the homology of the Swiss-cheese operad {{< tex "\mathtt{SC}" >}}. Morally speaking, the Swiss-cheese operad is a combination of the little disks operad and the little intervals operad. It makes sense that its homology is given by a combination of their respective homologies.

This is indeed the case. The homology of the little disks operad {{< tex "\mathtt{Ger}" >}}, the operad encoding [Gerstenhaber algebras](https://en.wikipedia.org/wiki/Gerstenhaber_algebra), and the homology of the little intervals operad is {{< tex "\mathtt{Ass}" >}}, the operad encoding associative algebras. If we consider Voronov's original version of the Swiss-cheese operad, which forbids operations with an open output and no closed input, then the homology  is given by the Voronov product {{< tex "\mathtt{Ger} \otimes \mathtt{Ass}" >}}! That's as good as can be expected. An algebra over this homology is a pair {{< tex "(A,B)" >}} where {{< tex "A" >}} is a Gerstenhaber algebra and {{< tex "B" >}} is an associative algebra which is also a module over the underlying commutative algebra of {{< tex "A" >}}, satisfying:

{{< tex display="(a \cdot b) \cdot (a' \cdot b') = aa' \cdot bb', \; \forall a,a' \in A, b,b' \in B." >}}

(Here we see [the Eckmann--Hilton argument]({{< ref "/post/eckmann-hilton.en.md" >}}) appearing in the background...)

If we now allow operations with an open output and only closed inputs, things get a bit more complicated. The description of the homology of this new operad can be found in the paper "Open-closed homotopy algebras and strong homotopy Leibniz pairs through Koszul operad theory" by Hoefel and Livernet. Just like before, an algebra over this operad is given by a pair consisting of a Gerstenhaber algebra {{< tex "A" >}} and an associative algebra {{< tex "B" >}}. Instead of an action of {{< tex "A" >}} on {{< tex "B" >}}, there is a morphism of commutative algebras from {{< tex "A" >}} to the *center* of the algebra {{< tex "B" >}}. If {{< tex "B" >}} is a unital algebra, this is exactly the same thing as before, with {{< tex "f(b) = b \cdot 1_A" >}} (and the Eckmann--Hilton argument shows that this lands in the center of {{< tex "A" >}}).

This new operad can almost be described as the Voronov product of two operads. The remark about unital algebras tips us off. Instead of {{< tex "\mathtt{Ger}" >}} and {{< tex "\mathtt{Ass}" >}}, consider instead {{< tex "\mathtt{Ger}_+" >}} and {{< tex "\mathtt{Ass}_+" >}}, the operads encoding *unital* Gerstenhaber algebras and unital associative algebras. There is still a morphism {{< tex "\mathtt{Com} \to \mathtt{Ger}_+" >}}, so we can build the Voronov product {{< tex "\mathtt{Ger}_+ \otimes \mathtt{Ass}_+" >}}.

This is not quite right: this encodes a pair consisting of a unital Gerstenhaber algebra, a unital associative algebra, and a central morphism from the former to the latter. To recover the homology of the variant of Swiss-cheese, one simply removes the operations with zero inputs, something I denote {{< tex "\mathtt{Ger}_+ \otimes_0 \mathtt{Ass}_+" >}} in [my paper](http://arxiv.org/abs/1507.06844) (section 4). When we remove these operations we don't have units anymore in our algebras, but we keep a central morphism {{< tex "A \to Z(B)" >}} and an action {{< tex "A \otimes B \to B" >}}, related by:

{{< tex display="a \cdot b = f(a) \cdot b" >}}

where the first dot is the action of {{< tex "A" >}} on {{< tex "B" >}} and the second one the multiplication in {{< tex "B" >}}.

The main motivation for my paper was to try and "lift" this splitting of the homology of Swiss-cheese to the topological level. Due to the non-formality of the Swiss-cheese operad (cf. Livernet, *Non-formality of the Swiss-cheese operad*), it is not actually possible to do; nevertheless I think I succeeded in showing that the Swiss-cheese operad splits as a "shuffled" Voronov product, a notion that I'd like to formalize someday -- read my paper for more details ;).
