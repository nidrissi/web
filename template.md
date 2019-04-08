---
# $autogen$
title: Curriculum Vitæ
lastmod: $lastmod$
date: 2018-01-01
urls:
  pdf: cv.$lang$.pdf
menu:
  main:
    weight: 10
    name: CV
    pre: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="portrait" class="svg-inline--fa fa-portrait fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg>'
---

$for(section)$

## $section.title$$if(section.more)$ <small>([$i18n.more$]({{< ref "$section.more$" >}}))</small>$endif$

<dl class="row pl-3 mb-0">

$for(section.content)$
$if(section.content.subtitle)$
</dl>

### $section.content.subtitle$

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
