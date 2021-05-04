---
# $autogen$
title: Curriculum Vitæ
date: $lastMod$
urls:
  pdf: cv.$lang$.pdf
toc: true
menu:
  main:
    weight: 10
    name: CV
    pre: '<i class="bi bi-file-person"></i>'
---

$for(section)$

## $section.title$

<dl class="row mb-0">

$for(section.content)$
$if(section.content.subtitle)$

</dl>

#### $section.content.subtitle$

<dl class="row mb-0">
$endif$

$if(section.content.entry)$

<dt class="col-lg-2 col-sm-3 text-sm-right">$section.content.entry.a$</dt>
<dd class="col-lg-10 col-sm-9"><strong>$section.content.entry.b$</strong>$if(section.content.entry.c)$, <em>$section.content.entry.c$</em>$endif$$if(section.content.entry.d)$, $section.content.entry.d$$endif$$if(section.content.entry.e)$, $section.content.entry.e$$endif$.$if(section.content.entry.f)$<br>$section.content.entry.f$$endif$</dd>
$endif$

$if(section.content.item)$

<dt class="col-lg-2 col-sm-3 text-sm-right">$section.content.item.a$</dt>
<dd class="col-lg-10 col-sm-9">$section.content.item.b$.</dd>
$endif$

$if(section.content.bib)$

</dl>
{{< cvbib "$section.content.bib$" >}}
<dl class="row mb-0">
$endif$
$endfor$

</dl>
$endfor$
