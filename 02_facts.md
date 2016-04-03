---
title: Facts
permalink: /facts/
nav: 1
---

Here is a list of facts that I would like to remember.

{% for fact in site.data.facts %}
---
**{{ forloop.index }}.** {{ fact }}
{% endfor %}
