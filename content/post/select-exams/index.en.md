---
title: Select-Exams
date: 2021-04-19
draft: false
tags: [code, teaching]
---

With online teaching, I have to find ways to make many processes go faster, as otherwise teaching takes an inordinate amount of time compared to traditional teaching (and my salary doesn't change...).
[I have already written about automating exam production]({{< ref "post/exam-template" >}})
I've now taken to scanning my students' exams and grading them directly on my touchscreen computer.
This way I avoid all the issues that come with physical exams: I'm not scared to death of bringing them home anymore -- losing them means redoing the whole exam
😨, I have a backup, I can give more detailed feedback to students, give it to them earlier and more often, etc.

<!--more-->

My department is equipped with one of these huge scanners that can easily chew through dozens of two-sided A3 exam booklets.
However, this produces a single huge PDF that contains all the exams.
This is easier to grade (I don't need to switch back and forth between 30+ booklets) but I need to ensure that every student gets their own exam, not everyone's exam, obviously.

I have thus written a PowerShell script to separate exams and name them automatically so that I can feed them to Moodle.
Here it is in all its glory.
It's rather simple to use and self-explanatory.
Note that you need [PDFtk](https://www.pdflabs.com/tools/pdftk-server/) to be installed.
[It is also available on GitHub (which may be more up-to-date)](https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92)

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

Typically, you would give it a CSV file that looks like this:

```csv
Name;ID;Start;End
Doe;12345;1;4
Jekyll;4321;5;8
Hyde;666;9;12
```

Which means that the exam of student Doe (Moodle participant ID 12345) is from page 1 to 4, and so on.
This produces a zip file that you can simply send to Moodle, and it will automatically pair students and exams.
