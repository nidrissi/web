---
title: "Groupe de travail : Stabilité homologique"
date: 2019-01-01
lastmod: 2019-03-27
---

Le groupe de travail porte sur les travaux récents de Galatius--Kupers--Randal-Williams sur la stabilité homologique, et plus particulièrement leur article [*Cellular {{< tex "E_k" >}}-algebras*](https://arxiv.org/abs/1805.07184), dont voici le résumé :

*"We give a set of foundations for cellular {{< tex "E_k" >}}-algebras which are especially convenient for applications to homological stability. We provide conceptual and computational tools in this setting, such as filtrations, a homology theory for {{< tex "E_k" >}}-algebras with a Hurewicz theorem, CW approximations, and many spectral sequences, which shall be used for such applications in future papers."*

## Séances

Les séances ont lieu le **jeudi de 15h45 à 17h**.
Elles se déroulent dans le [Bâtiment Sophie Germain](https://www.math.univ-paris-diderot.fr/ufr/acces) (les salles SG-1xxx sont au premier étage, etc).

### Séances à venir

18 avril 2019, SG-2015
: 5 -- *Transfert et comparaison* (Grégory Ginot)  
§14.1, §14.2 Transfert ascendant de lignes d'annulation  
§14.3 Transfert descendant (idée de la preuve)  
§15 Homologie relative et comparaison d'algèbres {{< tex "E_k" >}}

16 mai 2019, SG-2015
: 6 -- *Groupoïdes monoïdaux et algèbres {{< tex "E_k" >}}* (Jean-Michel Fischer)  
§12.2 Modules sur les algèbres {{< tex "E_1" >}}  
§17.1 Une construction d'algèbres {{< tex "E_k" >}}  
§17.2 Complexes de scindage

???
: 7 -- *Applications* (Najib Idrissi ?)  
§18.1 Le théorème principal  
§18.2, §18.3 Application aux groupes linéaires généraux

???
: 8 -- *Coefficients locaux* (Mario Gonçalves Lamas ?)

???
: 9 -- *Lien avec la dualité de Koszul* (Muriel Livernet)

### Séances passées

Les notes manuscrites que j'ai prises durant les exposés sont disponibles ci-dessous.
Les erreurs possibles qu'elles contiennent sont de mon fait.

7 février 2019, SG-2015
: 0 -- *Exposé introductif* (Najib Idrissi)  
J'exposerai le plan général du groupe de travail et nous nous répartirons les exposés.

21 février 2019, SG-2015 <a class="badge badge-primary" href="E1-Filtrations-Algebres-CW.pdf"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg> notes</a>
: 1 -- *Filtrations et complexes CW* (Sacha Ikonicoff)  
§5 : Algèbres filtrées, notations.  
§6 : Algèbres cellulaires, algèbres CW, filtration squelettique ; Théorème 6.14 sur {{< tex "\operatorname{gr} \operatorname{sk}" >}}.

7 mars 2019, SG-2015 <a class="badge badge-primary" href="E2-Homologie-Hurewicz-Approximations.pdf"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg> notes</a>
: 2 -- *Homologie, théorèmes de Hurewicz et approximations* (Mario Gonçalves Lamas)  
§10.1 Homologie des T-algèbres (voir §4.5 pour les indécomposables et §2.4 pour les catégories de diagrammes)  
§11 Connectivité, théorèmes de Hurewicz, théorème de Whitehead, approximations CW

21 mars 2019, SG-2015 <a class="badge badge-primary" href="E3-Indecomposables-Bar-iteree.pdf"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg> notes</a>
: 3 -- *Indécomposables et construction bar itérée* (Hugo Pourcelot)  
§12.1 Rappels sur les opérades {{< tex "E_n" >}}  
§13 Lien entre les indécomposables dérivés et la construction bar itérée (Théorème 13.7)

4 avril 2019, SG-2015 <a class="badge badge-primary" href="E4-Algebres-Wk.pdf"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg> notes</a>
: 4 -- *Algèbres {{< tex "W_{k-1}" >}}* (Geoffroy Horel)  
§16.1, §16.2 Opérations homologiques sur les algèbres {{< tex "E_k" >}}  
§16.3 Homologie des algèbres {{< tex "E_k" >}} libres <!--zapper 16.4-->

## Références

L'article principal :

* Soren Galatius, Alexander Kupers, Oscar Randal-Williams. *Cellular {{< tex "E_k" >}}-algebras* (2018). [arXiv:1805.07184](https://arxiv.org/abs/1805.07184)

Applications :

* Soren Galatius, Alexander Kupers, Oscar Randal-Williams. *{{< tex "E_2" >}}-cells and mapping class groups* (2018). [arXiv:1805.07187](https://arxiv.org/abs/1805.07187).
* Soren Galatius, Alexander Kupers, Oscar Randal-Williams. *{{< tex "E_\infty" >}}-cells and general linear groups of finite fields* (2018). [arXiv:1810.11931](https://arxiv.org/abs/1810.11931)
