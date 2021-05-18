---
title: arXiv2BibLaTeX
date: 2020-06-29
tags: [math, arxiv]
---

tl;dr: [a2b.idrissi.eu](https://a2b.idrissi.eu) to get a `.bib` from arXiv entries.

Have you ever wanted to create a `bib` entry from an arXiv preprint?
There are a few tools available, including one provided by arXiv (click on "NASA ADS" in the sidebar when viewing an entry), but none of them worked as I wanted.
They all had quirks and problems (like displaying some URL twice, putting "arXiv" as in the journal field even though it doesn't belong there, no biblatex support, etc).
In the end, I always had to fix things by hand, and it took almost as long as writing the entry myself.

I had been using a [homemade Perl script](https://github.com/nidrissi/dotfiles/blob/fb640a57160e41797f182f404cf50cfebad8f8d7/local/bin/arxiv.pl) to deal with this, but I don't program much in Perl anymore, it lacked a few features.
Moreover I thought such a tool could be useful for many people, but web apps are all the rage these days and many people don't want to deal with installations and dependencies anymore (installing Perl on Windows is annoying, for example).
So I decided to write a little JavaScript program.

It's available at **[a2b.idrissi.eu](https://a2b.idrissi.eu/)**.
I wrote it using a few libraries, notably React, Redux, and a few helper libraries (`react-redux`, `react-bootstrap`...).
The program is open source (under the AGPLv3), of course, and [the code is available on Github](https://github.com/nidrissi/a2b).
There are certainly plenty of bugs, but the basics work.
If you encounter an issue, don't hesitate to [submit one on Github](https://github.com/nidrissi/a2b/issues/new/choose).
