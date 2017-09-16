---
title: "$title$"
...

$for(section)$
## $section.title$

$for(section.entry)$
$if(section.entry.sub)$  $endif$- $for(section.entry.content)$$section.entry.content$$sep$, $endfor$
$endfor$

$for(section.bib)$
### $section.bib.subtitle$
$for(section.bib.entry)$
- $section.bib.entry.content$
$endfor$
$endfor$

$for(section.item)$
- $for(section.item.content)$$section.item.content$$sep$, $endfor$
$endfor$

$endfor$
