---
# automatically generated file
# edit template.md instead!
title: Curriculum Vitæ
lastmod: $lastmod$
date: 2018-01-01
menu:
  main:
    weight: 10
    name: CV
    pre: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="portrait" class="svg-inline--fa fa-portrait fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg>'
---

<p class="lead"><strong><a href="cv.$lang$.pdf"><svg class="svg-inline--fa fa-file-pdf fa-w-12" aria-hidden="true" data-prefix="far" data-icon="file-pdf" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg> $i18n.complete$</a></strong></p>

$for(section)$
<h3>$section.title$$if(section.more)$ <small>(<a href="{{< ref "$section.more$" >}}">$i18n.more$</a>)</small>$endif$</h3>
<dl class="row pl-3 mb-0">

$for(section.content)$
$if(section.content.subtitle)$
</dl>
<h4>$section.content.subtitle$</h4>
<dl class="row pl-3 mb-0">
$endif$

$if(section.content.entry)$
<dt class="col-lg-2 col-sm-3">$section.content.entry.a$</dt>
<dd class="col-lg-10 col-sm-9"><strong>$section.content.entry.b$</strong>$if(section.content.entry.c)$, <em>$section.content.entry.c$</em>$endif$$if(section.content.entry.d)$, $section.content.entry.d$$endif$$if(section.content.entry.e)$, $section.content.entry.e$$endif$.$if(section.content.entry.f)$<br>$section.content.entry.f$$endif$</dd>
$endif$

$if(section.content.item)$
<dt class="col-lg-2 col-sm-3">$section.content.item.a$</dt>
<dd class="col-lg-10 col-sm-9">$section.content.item.b$.</dd>
$endif$

$if(section.content.bib)$
</dl>
{{< cvbib "$section.content.bib$" >}}
<dl class="row pl-3 mb-0">
$endif$
$endfor$

</dl>
$endfor$
