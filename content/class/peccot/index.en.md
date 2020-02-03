---
title: Real homotopy of configuration spaces
#toc: true
cursus: Collège de France
what: Peccot Lecture
time: 8h
year: 2019–2020
date: 2020-03-04
publishdate: 2019-11-08
lastmod: 2020-02-03
sidebar:
  - "[Lecture notes](./peccot.pdf)"
  - "[Website of the Peccot Lectures](https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2019-2020__1.htm)"
  - "[News article @ University of Lille](https://www.univ-lille.fr/fileadmin/user_upload/illustrations/contenus/recherche/2017/ActULille_Recherche/News_52_Cours_Peccot_de_Najib_Idrissi_-_article.pdf)"
  - "[Longer version @ Paul Painlevé laboratory](https://math.univ-lille1.fr/d7/node/10461)"
---


<div class="alert alert-primary" role="alert">
<svg aria-hidden="true" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg> <a class="alert-link" href="peccot.pdf">(Incomplete) lecture notes are available here.</a>
</div>

In this lecture, we will study the real homotopy type of configuration spaces of manifolds.
Configuration spaces consist in collections of pairwise distinct points in a given manifold.
The study of these spaces is a classical problem in algebraic topology.
An important question about configuration space is homotopy invariance: if a manifold can be continuously deformed into another one, then can the configuration spaces of the first manifold be continuously deformed in the configuration spaces of the second?
This question remains open if we consider simply connected closed manifolds.
In this lecture, we will see how to prove this conjecture in characteristic zero (i.e. if we restrict ourselves to algebro-topological invariants with real coefficients).
We will then consider a generalization to manifolds with boundary.
The proof involves ideas from the theory of operads, which will be introduced at the end of the lecture.

This lecture is based in part on joint works with Ricardo Campos, Julien Ducoulombier, Pascal Lambrechts, and Thomas Willwacher.

<div class="float-md-right p-2"><a href="affiche_peccot.pdf"><img src="affiche_peccot.png" alt="Poster of the course" class="img-thumbnail"></a></div>

## Practical informations

The lessons will take place at the Collège de France (11 place Marcelin-Berthelot, in the 5th district of Paris), in room 5.
They will be on Wednesdays 4th, 11th, 18th, and 25th, March 2020, from 11AM to 1PM.
They are open to everyone.

<dl class="row mb-0">
<dt class="col-lg-4 text-sm-right">March 4th (11:00–13:00)</dt>
<dd class="col-lg-8">[more info to come]</dd>
<dt class="col-lg-4 text-sm-right">March 11th (11:00–13:00)</dt>
<dd class="col-lg-8">[more info to come]</dd>
<dt class="col-lg-4 text-sm-right">March 18th (11:00–13:00)</dt>
<dd class="col-lg-8">[more info to come]</dd>
<dt class="col-lg-4 text-sm-right">March 25th (11:00–13:00)</dt>
<dd class="col-lg-8">[more info to come]</dd>
</dl>

## Plan

The following plan (in French) is subject to changes and does not necessarily correspond exactly to the split in four lessons.

1. Introduction
    - Espaces de configuration
    - Invariance homotopique
    - Rappels sur la théorie de l'homotopie rationnelle
    - Formalité de {{< tex "\mathrm{Conf}(\mathbb{R}^n)" >}}
2. Modèle de Lambrechts--Stanley
    - Définition du modèle
    - Énoncé du théorème et idée de la preuve
    - Compactification de Fulton--MacPherson
    - Ensembles semi-algébriques et formes PA
    - Propagateur et définition du morphisme
    - Quasi-trivialité de la fonction de partition à homotopie près
    - Fin de la preuve
3. Variétés à bord
    - Motivation : calculer des espaces de configuration « inductivement »
    - Modèle 1 : recollements de variétés le long de leurs bords
    - Modèle 2 : modèle de Lambrechts--Stanley perturbé et paires à dualité de Poincaré--Lefschetz
    - Travail en cours : espaces de configuration de surfaces
4. Opérades
    - Motivation : homologie de factorisation
    - Introduction aux opérades
    - Structures opéradiques sur les compactifications
    - Formalité de Kontsevich (+ autres théorèmes de formalité)
    - Compatibilité du modèle de LS avec la structure opéradique
    - Exemple de calcul : {{< tex "\int_M \mathscr{O}_{\mathrm{poly}}(T\mathbb{R}^d[1-n])" >}}
