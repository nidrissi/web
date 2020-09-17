---
title: The action of \(SO(n)\) on \(S^{n-1}\) is not formal
date: 2020-09-17
draft: false
tags: [math]
---

Dans ce billet, je vais présenter un fait très simple et sans doute bien connu ; mais comme je dois régulièrement refaire la preuve pour m'en convaincre (parce que je l'oublie) je me suis dit que je pourrais la mettre à un endroit facilement accessible.

Le fait en question est que pour un entier impair {{< tex "n \ge 3" >}}, l'action habituelle du groupe spécial orthogonal {{< tex "SO(n)" >}} sur la sphère {{< tex "S^{n-1}" >}} n'est pas formelle sur {{< tex "\mathbb{Q}" >}} au sens de la théorie de l'homotopie rationnelle, bien que les deux espaces concernés soient formels.
Je l'ai appris auprès de Thomas Willwacher, et c'est mentionné dans la *Remark 9.5* de son article [« Real models for the framed little \(n\)-disks operads » (arXiv:1705.08108)](https://arxiv.org/abs/1705.08108) avec Anton Khoroshkin.

Voici une preuve rapide pour {{< tex "n=3" >}} et qui se généralise facilement.
Supposons que l'action {{< tex "\rho : SO(n) \times S^{n-1} \to S^{n-1}" >}} soit formelle.
On peut alors trouver des applications qui font commuter le diagramme suivant :
{{< tex display="\begin{CD} \Omega(S^2) @>{\rho^*}>> \Omega(SO(3) \times S^2) @<<< \Omega(SO(3)) \otimes \Omega(S^2) \\ @A{\sim}AA @. @A{\sim}AA \\ H(S^2) @>{\rho^*}>> H(SO(3)) \otimes H(S^2) @= H(SO(3)) \otimes H(S^2) \end{CD}" >}}

Soit {{< tex "\upsilon \in H^2(S^2)" >}} un générateur.
À cause des degrés, on doit avoir {{< tex "\rho^*(\upsilon) = \lambda \otimes \upsilon" >}} pour une constante {{< tex "\lambda \in \mathbb{Q}" >}}.
Donc sur {{< tex "\mathbb{Q}" >}} l'application {{< tex "\rho" >}} factorise au travers de la seconde projection {{< tex "p_2 : SO(3) \times S^2 \to S^2" >}}.

On sait que {{< tex "pSO(3) \simeq_{\mathbb{Q}} S^3" >}} and that {{< tex "\pi^{\mathbb{Q}}_3(S^3) = \mathbb{Q}" >}}.
Soit {{< tex "x" >}} un générateur de ce groupe ; montrons que {{< tex "\rho_*(x \times 1)" >}} doit engendrer {{< tex "\pi^{\mathbb{Q}}_3(S^2)" >}}
On sait aussi que {{< tex "\rho" >}} induit un fibré {{< tex "SO(2)" >}}-principal :
{{< tex display="SO(2) \hookrightarrow SO(3) \twoheadrightarrow S^2" >}}
où {{< tex "p : SO(3) \to S^2" >}} est donnée par {{< tex "p(A) = A \cdot w" >}} pour un vecteur {{< tex "w" >}} fixé et où {{< tex "SO(2)" >}} est le stabilisateur de {{< tex "w" >}}.
On obtient ainsi une suite exacte longue de groupes d'homotopie :
{{< tex display="\pi_{3}(SO(2)) \to \pi_{3}(SO(3)) \xrightarrow{p_{*}} \pi_{3}(S^{2}) \to \pi_{2}(SO(2))." >}}
Comme {{< tex "\pi_{3}(SO(2)) = \pi_{2}(SO(2)) = 0" >}}, on voit que {{< tex "p_*(x) = \rho_*(x \times 1)" >}} est un générateur.
Cela contredit le fait que {{< tex "\rho" >}} factorise par la deuxième projection, car alors {{< tex "\rho_*(x \times 1)" >}} devrait s'annuler.
