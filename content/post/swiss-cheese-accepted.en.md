---
date: 2017-01-13T00:00:00Z
tags: ['paper', 'swiss-cheese', 'operads']
title: First Article Accepted!
---

My paper [Swiss-Cheese operad and Drinfeld center]({{< ref "/research/swiss-cheese" >}}) has finally been accepted! It is going to appear in the [Israel Journal of Mathematics](http://www.ma.huji.ac.il/~ijmath/). I've made the few corrections suggested by the referee (the new version is [available on the arXiv](https://arxiv.org/pdf/1507.06844)), and I'm now waiting for the final proofs before the paper can be published.
<!--more-->

If you haven't read the paper yet, I wrote [a post some time ago]({{< ref "/post/voronov-product" >}}) about the Voronov product of operads. My paper starts with the following observation, due to Voronov: the homology of the Swiss-Cheese operad {{< tex "\mathtt{SC}" >}} split as a "product" of the Gerstenhaber operad and the associative operad. It thus seems natural to think that the Swiss-Cheese operad itself could split as some kind of product. Unfortunately, this operad is not formal [Livernet, 2015], which makes matters more complex.

The first result of the paper is about an operad weakly equivalent to the fundamental groupoid of {{< tex "\mathtt{SC}" >}}, the operad {{< tex "\mathtt{PaPB}" >}} of parenthesized permutations and braids. This is a combination of the operads of parenthesized permutations (corresponding to the associative part) and of parenthesized braids (corresponding to the Gerstenhaber part). I then prove that an algebra over {{< tex "\mathtt{PaPB}" >}} is given by the following data:

* A monoidal category {{< tex "\mathsf{M}" >}};
* A braided category {{< tex "\mathsf{N}" >}};
* A braided functor {{< tex "F : \mathscr{Z}(\mathsf{M}) \to \mathsf{N}" >}} from the [Drinfeld center](https://ncatlab.org/nlab/show/Drinfeld+center) of {{< tex "\mathsf{M}" >}} to {{< tex "\mathsf{N}" >}};

which fits in nicely with Voronov's description of {{< tex "H_*(\mathtt{SC})" >}}. The second result is inspired by Tamarkin's proof of the formality of the little {{< tex "2" >}}-disks operad, and it is roughly speaking given by a "semi-direct product" of the operad of parenthesized permutations and the operad of parenthesized chord diagrams. The data of a [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator) is needed for the construction of this operad.

I knew that publishing took time in mathematics, but I hadn't realized just how much. Indeed, between the moment I put the first version of the paper on the arXiv (July 2015) and today, about a year and a half elapsed. This is explained by several factors: I did not submit the paper to a journal immediately, reviews take a lot of time and editors have a lot on their plate, and the paper wasn't accepted the first time I submitted it (I think I could have chosen the journal better that first time). But still, as an early-career mathematician, it seemed like forever! I'm rather proud of finally having achieved this first milestone.

PS: This week I'm at the [Université Catholique de Louvain](https://uclouvain.be) to give a talk at the algebraic topology seminar of the IRMP. I'm very grateful to Pascal Lambrechts for this invitation!
