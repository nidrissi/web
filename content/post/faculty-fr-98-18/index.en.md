---
title: Faculty in France from 1998 to 2018
date: 2019-06-21
tags: []
---

Recently the French ministry for Higher Education and Research [released some data on demographics among lecturers and professors in France](http://www.enseignementsup-recherche.gouv.fr/cid85019/fiches-demographiques-des-sections-du-cnu.html).
I was proctoring an exam yesterday and couldn't do anything too mentally taxing (because students might cheat :worried:) so I compiled the data in a somewhat interactive chart.
You can select which groups you want to see, and whether you only want to see lecturers (MCF), professors (PR) or both.
You can also normalize the data so that each section starts at 100 in 1998, to compare the evolutions.
I might add the total of the two later, but I fear I've already wasted enough time on this...
Here it is.
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
    <label class="form-check-label" for="normalize">Normalize</label>
  </div>
</div>
<div id="chart"></div>
<h5 class="text-center" id="nom-section"></h5>
</div>

Let me know if something doesn't display correctly.
The data is only between 1998 and 2018, every five years (so 1998, 2003, 2008, 2013, and 2018).
In principle, the older files on the ministry's website should allow to have more data, but I wasn't courageous enough to do it all by hand, or to extract it automatically from the "open data" website.

<script src="d3.min.js"></script>
<script src="chart.js"></script>
