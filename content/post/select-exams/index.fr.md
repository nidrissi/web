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
[Le code est aussi sur GitHub (et pourrait y être plus à jour)](https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92)

Vous devez installer [PDFtk](https://www.pdflabs.com/tools/pdftk-server/) pour le faire tourner.

```powershell
<#
.SYNOPSIS
Splits a PDF file containing multiple exams along ranges specified in a CSV file, to be used with Moodle.
.PARAMETER InputCSV
The path of the CSV file that explains how to split the PDF file. The headers of that CSV file should be:
- Name: The name of the student.
- ID: The Moodle participant for the student in that specific course (distinct from the global Moodle ID).
- Start: The first page of that student's exam.
- End: The last page of that student's exam.
.PARAMETER InputPDF
The path of the PDF containing all the pages of the students' exams.
.PARAMETER OutputZip
The path of the zip file to be created.
.PARAMETER Delimiter
The delimiter used in the CSV file.
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory)] [String] $InputCSV,
    [Parameter(Mandatory)] [String] $InputPDF,
    [Parameter(Mandatory)] [String] $OutputZip,
    [String] $Delimiter = ";"
)

if (!(Get-Command "pdftk.exe" -ErrorAction SilentlyContinue)) {
    Write-Error "PDFtk must be installed for this script to work."
    exit 1
}
foreach ($file in @($InputCSV, $InputPDF)) {
    if (!(Test-Path $file)) {
        Write-Error "Cannot find file $file."
        exit 1
    }
}


$ImportedCSV = Import-Csv -Path $InputCSV -Delimiter $Delimiter
Write-Verbose "Imported $InputCSV."

$PDFItem = Get-Item $InputPDF

$TempFolder = Join-Path $Env:Temp $(New-Guid)
New-Item -Type Directory -Path $TempFolder | Out-Null
Push-Location $TempFolder
Write-Verbose "Moved to $TempFolder."

pdftk.exe $PDFItem burst
Write-Verbose "Bursted the PDF."

New-Item -Name "final" -Type Directory

foreach ($entry in $ImportedCSV) {
    Write-Verbose "Entry: $entry"
    if ((!$entry.Start) -or (!$entry.End)) {
        Write-Warning ("Skipping {0}!" -f $entry.Name)
    }

    else {
        $OutputPDF = Join-Path "final" ("{0}_{1}_assignsubmission_file_Copie {0}.pdf" -f $entry.Name, $entry.ID)
        $Range = ($entry.Start)..($entry.End) | ForEach-Object { "pg_{0:d4}.pdf" -f $_ }
        Write-Verbose "Running pdftk with Range = $Range and OutputPDF = $OutputPDF..."
        pdftk.exe @Range output $OutputPDF
    }
}

Write-Verbose "Finished exporting PDFs."

Pop-Location

Compress-Archive -Path $PDFPaths -DestinationPath $OutputZip
Write-Verbose "Compressed to $OutputZip."

Remove-Item -Recurse $TempFolder
Write-Verbose "Removed $TempFolder."
```

Typiquement, vous lui donneriez un fichier CSV qui ressemble à ça :

```csv
Name;ID;Start;End
Doe;12345;1;4
Jekyll;4321;5;8
Hyde;666;9;12
```

Cela signifie que la copie de l'étudiant·e Doe (dont l'ID de participant Moodle est 12345) va des pages 1 à 4, etc.
Cela produit une archive zip que vous pouvez simplement envoyer à Moodle, qui les appariera automatiquement avec les étudiants.
