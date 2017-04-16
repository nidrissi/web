---
date: 2017-02-24T00:00:00Z
tags: ['math', 'conf-spaces']
title: A Model for Configuration Spaces of Closed Manifolds
---

Last week I was at the [Max Planck Institute](https://www.mpim-bonn.mpg.de/) for the [Conference for Young researchers in homotopy theory and categorical structures](https://www.mpim-bonn.mpg.de/node/6791) (which was, by the way, a great conference -- thanks to the organizers), and I gave yet another talk about [the Lambrechts--Stanley model for configuration spaces]({{< ref "post/model-conf-spaces.md" >}}). So maybe it's time I write a little bit about it on this blog. I'll write a first post about the model itself, and later I will explain how the Fulton--MacPherson operad is involved in all this.
<!--more-->

Consider a manifold $M$. Then given some integer $k \ge 0$, one can build the configuration space of $k$ points in $M$:

$$\newcommand{\Conf}{\mathrm{Conf}}\Conf\_k(M) = \\{ (x\_1, \dots, x\_k) \in M^{\times k} \mid x\_i \neq x\_j \; \forall i \neq j \\}.$$

Many people are interested in configuration spaces for many different reasons. One could wonder: what does the homotopy type of $M$ tell us about the homotopy type of $\Conf\_k(M)$? More concretely, does the homotopy type of $\Conf\_k(M)$ depend exclusively on the homotopy type of $M$?

Of course, if we don't know anything about $M$, then this is blatantly false. Indeed, consider that $\Conf\_2(\mathbb{R})$ is homotopy equivalent to $S^0$, whereas $\Conf\_2(\mathbb{R}^2)$ is homotopy equivalent to $S^1$, even though $\mathbb{R} \simeq \mathbb{R}^2$. The main defect, here, is that $M$ is not a closed manifold, so we might as well restrict ourselves to studying closed manifolds.

But even then, the question could appear hopeless. Indeed, [Longoni--Salvatore, 2005], found a counterexample: they showed that some $3$-dimensional lens spaces are homotopy equivalent and yet their configuration spaces are not homotopy equivalent. But not all hope is lost! Indeed, these lens spaces are not simply connected. So maybe if we restrict to simply connected manifolds, things will work out.

I'll admit it, I'm only comfortable over fields of characteristic zero. And over $\mathbb{Q}$, we can use Sullivan's framework of rational models to study the real homotopy type of spaces. So let us take a rational model $A$ of $M$, and try to build a rational model of $\Conf\_k(M)$ from it.

If you recall, we are looking at a closed manifold $M$. This feature appears on the level of cohomology in the form of Poincaré duality. Well, it also appears on the level of rational models! [Lambrechts--Stanley, 2008] showed that any *simply-connected* closed manifold has a rational model which is a Poincaré duality CDGA. Roughly speaking, it means that it has a non-degenerate dg-pairing with itself, of formal dimension $n$.

Intuitively, we can look at the configuration space $\Conf\_k(M)$ as the product $M^{\times k}$ from which we removed the fat diagonal $\bigcup\_{i \neq j} \Delta\_{ij}$, where $\Delta\_{ij} = \\{ x \in M^{\times k} \mid x\_i = x\_j \\}$. We can then reuse the ideas of Poincaré--Lefschetz duality and say that, morally, a model of $\Conf\_k(M)$ should be given by a model of $M^{\times k}$ in which we kill the classes that are Poincaré dual to homology classes from the fat diagonal. We can take $A^{\otimes k}$ to be the model of $M^{\times k}$, and the Poincaré duality allows to build explicit representatives of the fundamental classes of the diagonals $\Delta\_{ij}$.

This is precisely what [Lambrechts--Stanley, 2008] did, and they considered a CDGA $\mathtt{G}\_A(k)$ given by:

$$\mathtt{G}\_A(k) = \bigl( A^{\otimes k} \otimes S(\omega\_{ij}) / \text{relations}, d \omega\_{ij} = [\Delta\_{ij}] \bigr).$$

For small $k$, this CDGA is particularly simple:

- $\mathtt{G}\_A(0)$ is isomorphic to $\mathbb{R}$, which is indeed a model for $\Conf\_0(M) = \\{ \varnothing \\}$;
- $\mathtt{G}\_A(1)$ is isomorphic to $A$, which is a model for $\Conf\_1(M) = M$;
- and $\mathtt{G}\_A(2)$ is the mapping cone of $A \to A \otimes A, \, a \mapsto (a \otimes 1) [\Delta]$; it is quasi-isomorphic to $A^{\otimes 2} / (\Delta)$.

This model has a long history, which I'll try to summarize here (hopefully without forgetting anything):

- Around 1969, Arnold (for $n = 2$) and Cohen (for a general $n$) described the cohomology of $\Conf\_k(\mathbb{R}^n)$; it is suspiciously similar to $\mathtt{G}\_A(k)$ where we take $A$ to be $H^*(\mathbb{R}^n)$ and the diagonal classes vanish.
- In 1978, Cohen and Taylor built a spectral sequence which converges to $H^*(\Conf\_k(M))$ and whose $E^2$ term is precisely given by $\mathtt{G}\_{H^*(M)}(k)$.
- In 1991, Bendersky and Gitler built another spectral sequence which converges instead to the homology of $\Conf\_k(M)$.
- Around 1994, two independent results were found in the case where $M$ is a smooth projective complex manifold. Note that in this case, $M$ has to be a Kähler manifold, and it is thus formal by a result of [Deligne--Griffiths--Morgan--Sullivan, 1975], i.e. $H^*(M)$ is a rational model of $M$.
  - Totaro showed that the Cohen--Taylor spectral sequence collapses at the $E^2$ page, and therefore that $H^\*(\mathtt{G}\_{H^\*(M)}(k))$ is isomorphic to $H^\*(\Conf\_k(M))$ as a graded algebra (by a result of Deligne);
  - Kriz showed that in this case, $\mathtt{G}\_{H^*(M)}(k)$ is, in fact, a rational model for $\Conf\_k(M)$.
- In 2004, Lambrechts and Stanley showed that $A^{\otimes 2} / (\Delta)$ is indeed a model for $\Conf\_2(M)$ when $M$ is $2$-connected.
- Also around 2004, Félix and Thomas, and Berceanu, Markl and Papadima, showed independently that the dual of $\mathtt{G}\_{H^*(M)}(k)$ is isomorphic to the dual of the Bendersky--Gitler spectral sequence.
- In 2008, Lambrechts and Stanley showed that $\mathtt{G}\_A(k)$ has the same cohomology as $\Conf\_k(M)$ as a graded $\Sigma\_k$-vector space. This is, to my knowledge, the first time that the model $\mathtt{G}\_{H^*(M)}(k)$ was built out of a general Poincaré duality CDGA (and not just the cohomology of $M$), hence my choice for the name of the model.
- Finally, in 2015, Cordova Bulens showed that $A^{\otimes 2} / (\Delta)$ is a rational model for $\Conf\_2(M)$ when $M$ is even dimensional and simply connected.

We now get to my contribution:

> **Theorem.** Let $M$ be a smooth, simply connected manifold of dimension at least $4$. Then $\mathtt{G}\_A(k)$ is a *real* model for $\Conf\_k(M)$, for all $k \ge 0$.

Unlike the theorems mentioned before, this describes a model over $\mathbb{R}$, not over $\mathbb{Q}$. Descent would be an interesting (but difficult problem). Note that since $M$ is at least $3$-dimensional in the theorem, using the Fadell--Neuwirth fibrations one can show that all the $\Conf\_k(M)$ remain simply connected, hence $A$ completely determines the real homotopy type of $\Conf\_k(M)$.

I actually showed more than that: the model is compatible with the action of the Fulton--MacPherson operad, by using a proof inspired by Kontsevich's proof of the formality of the little disks operad. What does this mean? How does the proof go? Stay tuney! (Alternatively, you can read my article ☺.)
