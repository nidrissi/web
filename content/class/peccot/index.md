---
title: Real homotopy of configuration spaces
#toc: true
cursus: Collège de France
what: Peccot Lecture
time: 8h
year: 2019–2020
date: 2020-03-04
lastMod: 2020-06-26
urls:
  notes: ../../research/peccot/peccot.pdf
  video: https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2019-2020__1.htm
  custom:
    - name: Website of the Peccot Lectures
      url: https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2019-2020__1.htm
    - name: News article @ University of Lille
      url: https://www.univ-lille.fr/fileadmin/user_upload/illustrations/contenus/recherche/2017/ActULille_Recherche/News_52_Cours_Peccot_de_Najib_Idrissi_-_article.pdf
    - name: Longer version @ Paul Painlevé laboratory
      url: https://math.univ-lille1.fr/d7/node/10461
    - name: News article @ IMJ-PRG
      url: https://www.imj-prg.fr/spip.php?article538
  customFile:
    - name: Old version of the notes, in French
      file: ./peccot-fr.pdf
localImages:
  - thumb1.jpg
  - thumb2.jpg
  - thumb3.jpg
  - thumb4.jpg
---

import PeccotCard from "./PeccotCard";

In this lecture, we will study the real homotopy type of configuration spaces of manifolds.
Configuration spaces consist in collections of pairwise distinct points in a given manifold.
The study of these spaces is a classical problem in algebraic topology.
An important question about configuration space is homotopy invariance: if a manifold can be continuously deformed into another one, then can the configuration spaces of the first manifold be continuously deformed in the configuration spaces of the second?
This question remains open if we consider simply connected closed manifolds.
In this lecture, we will see how to prove this conjecture in characteristic zero (i.e. if we restrict ourselves to algebro-topological invariants with real coefficients).
We will then consider a generalization to manifolds with boundary.
The proof involves ideas from the theory of operads, which will be introduced at the end of the lecture.

This lecture is based in part on joint works with Ricardo Campos, Julien Ducoulombier, Pascal Lambrechts, and Thomas Willwacher.

## Practical informations

The lessons will take place at the Collège de France (11 place Marcelin-Berthelot, in the 5th district of Paris), in room 5.
They were initially planned on Wednesdays 4th, 11th, 18th, and 25th, March 2020, from 11AM to 1PM.
Due to the COVID-19 pandemic, the last two lessons were postponed respectively to May 25th and 28th (10AM--12PM) and were recorded without an audience.

## Lessons

<div class="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:grid-cols-4">
<PeccotCard number={1} image={props.localImages[0]} link="https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2020-03-04-11h00.htm" date="March 4th 2020, 11:00–13:00">
  <p>Chapter 1: Configuration spaces of manifolds</p>
  <ul>
  <li>Generalities on configuration spaces sur les espaces de configuration</li>
  <li>Homotopy invariance conjecture</li>
  <li>Rational homotopy theory</li>
  <li>Formality of configuration spaces of Euclidean spaces</li>
  </ul>
</PeccotCard>

<PeccotCard number={2} image={props.localImages[1]} link="https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2020-03-11-11h00.htm" date="March 11th 2020, 11:00–13:00">
  <p>Chapter 2: The Lambrechts–Stanley model</p>
  <ul>
  <li>Definition of the model and theorem</li>
  <li>Compactifications of configuration spaces</li>
  <li>Semi-algebraic sets and forms</li>
  <li>Definition of the unreduced graph complex – Propagator</li>
  </ul>
</PeccotCard>

<PeccotCard number={3} image={props.localImages[2]} link="https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2020-05-25-11h00.htm" date="May 25th 2020 (online)">
  <p>Chapter 2: The Lambrechts–Stanley model (continued)</p>
  <ul>
  <li>Partition function and reduced graph complex</li>
  <li>Simplification of the partition function</li>
  <li>Quasi-isomorphism: combinatorial proof</li>
  </ul>
  <p>Chapter 3: Manifolds with boundary</p>
  <ul>
  <li>Motivation: gluing</li>
  <li>Poincaré–Lefschetz duality models</li>
  </ul>
</PeccotCard>

<PeccotCard number={4} image={props.localImages[3]} link="https://www.college-de-france.fr/site/cours-peccot/guestlecturer-2020-05-28-11h00.htm" date="May 28th 2020 (online)">
  <p>Chapter 3: Manifolds with boundary (continued)</p>
  <ul>
  <li>Fulton–MacPherson compactifications</li>
  <li>Propagators</li>
  <li>Graph complexes</li>
  <li>Simplification of the partition functions</li>
  <li>End of the proof</li>
  <li>Perturbed Lambrechts–Stanley model</li>
  </ul>
  <p>Chapter 4: Operads</p>
  <ul>
  <li>Quick introduction to the theory</li>
  <li>Definition of factorization homology</li>
  <li>Relationship with configuration spaces</li>
  </ul>
</PeccotCard>
</div>
