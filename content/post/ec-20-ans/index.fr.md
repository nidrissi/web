---
title: Enseignants-chercheurs en France sur les 20 dernières années
date: 2019-06-21
tags: []
---

(Exceptionnellement un post en français.)

Récemment, le ministère de l'ESR a [publié des données démographiques sur les sections CNU](http://www.enseignementsup-recherche.gouv.fr/cid85019/fiches-demographiques-des-sections-du-cnu.html).
Je surveillais un examen hier et je ne pouvais pas faire grand chose d'intéressant (les étudiants risquaient de tricher :worried:) donc j'ai compilé les données dans un graphique un peu interactif.
Vous pouvez choisir quelles sections vous voulez voir, ainsi que si vous voulez voir les MCF, les PR, ou les deux.
Peut-être que j'ajouterai le total des deux plus tard, mais j'ai déjà passé assez de temps là-dessus...
Voici le graphique :

<!--more-->

<div>
<div id="groups"></div>
<div>
  <div class="form-check-inline">
    <input class="form-check-input" type="checkbox" value="" id="mcf" checked>
    <label class="form-check-label" for="mcf">MCF</label>
  </div>
  <div class="form-check-inline">
    <input class="form-check-input" type="checkbox" value="" id="pr" checked>
    <label class="form-check-label" for="pr">PR</label>
  </div>
  <div class="form-check-inline">
    <input class="form-check-input" type="checkbox" value="" id="normalize">
    <label class="form-check-label" for="normalize">Normaliser</label>
  </div>
</div>
<div id="chart"></div>
<h5 class="text-center" id="nom-section"></h5>
</div>

Prévenez moi si quelque chose ne s'affiche pas ou s'il y a des erreurs.
[Les données brutes sont là.](demos.json)
Les données ne sont que pour 1998, 2003, 2008, 2013, at 2018.
En principe, les vieux PDF sur le site du ministère devraient permettre d'avoir plus de données, mais je n'étais pas assez courageux pour le faire à la main, ou pour faire un script pour l'extraire du site « données ouvertes ».
Notez qu'il n'y a pas de données pour la section 1, car il y a une erreur sur Galaxie : le lien vers le PDF pointe vers la section 3.

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="chart.js"></script>
