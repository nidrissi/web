---
title: Select-Exams
date: 2021-04-19
draft: false
tags: [code, teaching]
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
Le voici en chair et en os.
Il est plutôt simple à utiliser et le code se passe d'explications.
Vous devez installer [PDFtk](https://www.pdflabs.com/tools/pdftk-server/) pour le faire tourner.

<script src="https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92.js"></script>

Typiquement, vous lui donneriez un fichier CSV qui ressemble à ça :

```csv
Name;ID;Start;End
Doe;12345;1;4
Jekyll;4321;5;8
Hyde;666;9;12
```

Cela signifie que la copie de l'étudiant·e Doe (dont l'ID de participant Moodle est 12345) va des pages 1 à 4, etc.
Cela produit une archive zip que vous pouvez simplement envoyer à Moodle, qui les appariera automatiquement avec les étudiants.
