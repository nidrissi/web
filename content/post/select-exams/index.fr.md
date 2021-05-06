---
title: Select-Exams
date: 2021-04-19
draft: false
tags: [code, teaching]
urls:
  source: https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92
---

Avec les cours en ligne, je dois trouver des moyens de rendre de nombreux processus plus rapides, car sinon l'enseignement prend un temps infiniment plus long qu'avec des cours traditionnels (et mon salaire reste le même...).
[J'ai déja écrit sur la manière dont j'automatise la production de mes examens]({{< ref "post/exam-template" >}})
J'ai maintenant commencé à scanner les copies de mes étudiant·e·s et à les corriger directement sur mon ordinateur à écran tactile.
Cela me permet d'éviter de nombreux problèmes avec des copies physiques : je peux les emmener chez moi sans être terrifié -- si je les perds, je dois refaire l'examen 😨, j'ai une sauvegarde, je peux donner un retour plus détaillé, plus rapidement et plus souvent, etc.

<!--more-->

Mon labo a un de ces gros scanners qui peut facilement s'occuper de dizaines de copies A3.
Cela produit cependant un unique PDF énorme qui contient tous les examens.
C'est plus facile à corriger (je ne dois pas changer entre 30+ copies différentes) mais je dois m'assurer que chaque étudiant·e récupère effectivement sa copie et pas celles de ses camarades, évidemment.

J'ai donc écrit un script PowerShell qui sépare les examens et les renomme automatiquement pour que je puisse les donner à Moodle.
Il est plutôt simple à utiliser et le code se passe d'explications.
[**Vous pouvez le trouver sur GitHub.**](https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92)
Vous pouvez aussi <a href="#" data-bs-toggle="collapse" data-bs-target="#gist-collapse" aria-expanded="false" aria-controls="gist-collapse">le trouver ici</a>.

<div class="collapse" id="gist-collapse">
<script src="https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92.js"></script>
</div>

Vous devez installer [PDFtk](https://www.pdflabs.com/tools/pdftk-server/) pour le faire tourner.

Le gist contient un exemple de fichier CSV.
Les données dans ce fichier signifient que la copie de l'étudiant·e Doe (dont l'ID de participant Moodle est 12345) va des pages 1 à 4, etc.
Cela produit une archive zip que vous pouvez simplement envoyer à Moodle, qui les appariera automatiquement avec les étudiants.

<div class="alert alert-danger">
L'identifiant de participant n'est <em>pas</em> l'identifiant utilisateur (que vous pouvez voir sur <a href="moodle-user-id.png" class="alert-link">cette image</a> par exemple).
L'identifiant de participant est spécifique au cours Moodle et est plus difficile à trouver.
Pour le trouver, vous pouvez par exemple <a href="https://docs.moodle.org/3x/fr/Param%C3%A8tres_du_devoir#Formulaire_d.27.C3.A9valuation_hors_ligne" class="alert-link">activer le formulaire d'évaluation hors-ligne</a> pour le devoir, puis aller sur la page du devoir et choisir l'action "Télécharger le formulaire d'évaluation".
Vous obtiendrez un fichier CSV dont la première colonne sera l'identifiant de participant, de la forme <code>Participant12345678</code>.
Recopiez le nombre (sans <code>Participant</code>) dans le fichier CSV que vous donnez à mon script.
</div>
