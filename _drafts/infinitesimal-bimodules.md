---
title: "About abelian bimodules"
tags: math algtop operads
draft: 1
---

This post is about something somewhat weird I noticed about infinitesimal bimodules over operads and their relationships with some $$E_n$$ operads. I don't know if it's something significant, and I'd definitely be interested to hear more about it.

## Context: abelian bimodules

As I said, this post is about abelian bimodules, sometimes also called infinitesimal bimodules. They are a "linearized" version of usual bimodules over operads. Let me now recall their definition.
<!--more-->

**Definition.** Let $$\mathtt{P}$$, $$\mathtt{Q}$$ be two operads in a symmetric monoidal category $$\mathsf{C}$$. An *abelian $$(\mathtt{P}, \mathtt{Q})$$-bimodule* is a symmetric collection $$M = \{ M(n) \}_{n \ge 0}$$ equipped with composition morphisms:

$$M(k) \otimes \mathtt{Q}(l) \xrightarrow{\circ_i} M(k+l-1), \\ \mathtt{P}(k) \otimes M(l) \xrightarrow{\circ_i} M(k+l-1),$$

satisfying obvious equivariance and associativity properties.

By composing multiple times elements of $$M$$ with elements of $$\mathtt{Q}$$, one can give $$M$$ the structure of a full right module over $$\mathtt{Q}$$. However, $$M$$ is not a left module (AKA algebra) over $$\mathtt{P}$$, as only one element of $$M$$ can appear in successive compositions.
