---
title: The action of \\(SO(n)\\) on \\(S^{n-1}\\) is not formal
date: 2020-09-17
draft: false
tags: [math]
---

In this post, I record a simple and probably well-known fact; but since I have to remake the computation again and again (because I forget it...) I thought it would be nice to have it in an accessible place.

The fact is that for an odd {{< tex "n \ge 3" >}}, the usual action of the special orthogonal group {{< tex "SO(n)" >}} on the sphere {{< tex "S^{n-1}" >}} is not formal over {{< tex "\mathbb{Q}" >}} in the sense of rational homotopy theory, even though both spaces are formal.
This was first told to me by Thomas Willwacher, and it is mentioned as Remark 9.5 in his paper ["Real models for the framed little \(n\)-disks operads" (arXiv:1705.08108)](https://arxiv.org/abs/1705.08108) with Anton Khoroshkin.

Here is a quick proof for {{< tex "n=3" >}} that generalizes easily.
Suppose that the action map {{< tex "\rho : SO(n) \times S^{n-1} \to S^{n-1}" >}} is formal.
Then one can find maps that make the following diagram commute:
{{< tex display="\begin{CD} \Omega(S^2) @>{\rho^*}>> \Omega(SO(3) \times S^2) @<<< \Omega(SO(3)) \otimes \Omega(S^2) \\ @A{\sim}AA @. @A{\sim}AA \\ H(S^2) @>{\rho^*}>> H(SO(3)) \otimes H(S^2) @= H(SO(3)) \otimes H(S^2) \end{CD}" >}}

Let {{< tex "\upsilon \in H^2(S^2)" >}} be a generator.
By degree reasons, we must have {{< tex "\rho^*(\upsilon) = \lambda \otimes \upsilon" >}} for some constant {{< tex "\lambda \in \mathbb{Q}" >}}.
This implies that, over {{< tex "\mathbb{Q}" >}}, the map {{< tex "\rho" >}} factors through the second projection {{< tex "p_2 : SO(3) \times S^2 \to S^2" >}}.

We know that {{< tex "pSO(3) \simeq_{\mathbb{Q}} S^3" >}} and that {{< tex "\pi^{\mathbb{Q}}_3(S^3) = \mathbb{Q}" >}}.
Let {{< tex "x" >}} be a generator and let us show that {{< tex "\rho__(x \times 1)" >}} must generate {{< tex "\pi^{\mathbb{Q}}*3(S^2)" >}}
We also know that {{< tex "\rho" >}} induces a principal {{< tex "SO(2)" >}}-bundle :
{{< tex display="SO(2) \hookrightarrow SO(3) \twoheadrightarrow S^2" >}}
where {{< tex "p : SO(3) \to S^2" >}} is given by {{< tex "p(A) = A \cdot w" >}} for a fixed vector {{< tex "w" >}} and {{< tex "SO(2)" >}} is the stabilizer of {{< tex "w" >}}.
We thus get a long exact sequence of homotopy groups:
{{< tex display="\pi*{3}(SO(2)) \to \pi*{3}(SO(3)) \xrightarrow{p*{_}} \pi*{3}(S^{2}) \to \pi*{2}(SO(2))." >}}
Since {{< tex "\pi_{3}(SO(2)) = \pi_{2}(SO(2)) = 0" >}}, we get that {{< tex "p_*(x) = \rho_*(x \times 1)" >}} is a generator.
This contradicts the fact that {{< tex "\rho" >}} factors through the second projection as then {{< tex "\rho_*(x \times 1)" >}} would vanish.
