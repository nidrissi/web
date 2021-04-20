---
title: Select-Exams
date: 2021-04-19
draft: false
tags: [code, teaching]
urls:
  source: https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92
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
It's rather simple to use and self-explanatory.
[**It is available as a GitHub gist.**](https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92)
You can also <a href="#" data-toggle="collapse" data-target="#gist-collapse" aria-expanded="false" aria-controls="gist-collapse">find it here</a>.

<div class="collapse" id="gist-collapse">
<script src="https://gist.github.com/nidrissi/a802dc0a20ecad0bc8c077ce32b6ad92.js"></script>
</div>

Note that you need [PDFtk](https://www.pdflabs.com/tools/pdftk-server/) to be installed.

The gist includes an example CSV file.
In the example, the exam of student Doe (Moodle participant ID 12345) is from page 1 to 4, and so on.
This produces a zip file that you can simply send to Moodle, and it will automatically pair students and exams.
