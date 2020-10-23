---
title: arXiv2BibLaTeX
date: 2020-06-29
draft: false
tags: [math, arxiv]
---

tl;pl : [a2b.idrissi.eu](https://a2b.idrissi.eu) pour un `.bib` à partir d'entrées arXiv.

Est-ce que vous avez déjà voulu créer une entrée `bib` à partir d'un preprint arXiv?
Il y a quelques outils disponibles en ligne, y compris un fourni par arXiv (cliquez sur "NASA ADS" dans la barre latérale sur la page d'un preprint), mais aucun ne marchait comme je le voulais.
Tous ceux que j'ai essayé ont des problèmes (l'URL s'affiche en double, ils mettent "arXiv" dans le champ "journal" alors que ce n'est pas là où ils devraient être, pas de compatibilité avec biblatex, etc).
À la fin, je devais toujours régler les problèmes moi-même, et écrire l'entrée à la main aurait été quasiment plus vite.
<!--more-->

J'utilisais depuis quelques temps un  [script Perl maison](https://github.com/nidrissi/dotfiles/blob/fb640a57160e41797f182f404cf50cfebad8f8d7/local/bin/arxiv.pl), mais il lui manquait quelques fonctionnalités.
De plus, je me suis dit qu'un tel outil pourrait être utile à d'autres personnes, mais aujourd'hui la mode est aux applis webs et beaucoup de gens ne veulent pas s'embêter avec des installations et des dépendances (installer Perl sous Windows est pénible par exemple).
Donc j'ai décidé d'écrire un petit programme JavaScript.

Il est disponible à l'adresse **[a2b.idrissi.eu](https://a2b.idrissi.eu/)**.
J'ai utilisé quelques bibliothèques JS, notamment React, Redux, et quelques utilitaires (`react-redux`, `react-bootstrap`...).
Le programme est open source (AGPLv3), bien sûr, et [le code est sur Github](https://github.com/nidrissi/a2b).
Il y a probablement plein de bugs, mais les fonctions basiques marchent.
Si vous rencontrez un problème, n'hésite pas à le [rapporter sur Github](https://github.com/nidrissi/a2b/issues/new/choose).
