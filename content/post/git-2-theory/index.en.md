---
title: "Git for Mathematicians (2/3): The Theory"
date: 2021-04-24
draft: true
toc: true
tags: [code]
---

This post is the second in a series in which I will try to explain how to use Git to write papers, with an audience of professional mathematicians in mind.
[The first part, which was about why one would want to use Git, is here.]({{< ref "git-1-preliminaries" >}})
Let us now dive into the second part, in which I explain a little what's going "under the hood" of Git.

While it is not strictly necessary to know all this to use Git, I think that understanding the mechanics helps in actually using it correctly and efficiently.
Of course, I will not be able to explain _everything_ about Git's inner workings!
That is what the [reference documentation](https://git-scm.com/docs) is for.

<!-- more -->

## Commits

Since this post is intended for mathematicians, I hope that I can get away with some mathematical terminology.
For a given Git repository, the history is stored as a **rooted directed graph (without directed cycles) with marked vertices**.
Quite a mouthful, isn't it?
Let me try to explained what this all means.

- The history is a graph.
  Its vertices are called the **commits**.
  A commit represents a state of the repository, i.e., what the contents of all the files at that point in history where.
  This is what you see if you type `git log` in a repository (see the next post for what that means).
  Moreover, every commit has some metadata associated to it:
  - Its _author_, which is the user that made the modifications in the commit.
    (There is also a _committer_, which is the user who actually committed the changes in the repository; the two are typically one and the same, but not always.)
  - A date, i.e., when the commit was authored.
  - A commit message, written by the author.
    This is typically used to write some information about what was changed in commit.
- So far, I have only described the vertices of the graph.
  There is an additional piece of metadata about every commit that actually makes the history into a graph: the **parent commit**.
  This is simply the point in time from which the author in order to write their modifications.
  A typical history of a single-author git repository could look like this:

  <img class="img-fluid" alt="An example of a linear history tree." src="history-linear.svg"/>

  (If only writing a paper took four tries!)
  This relation is asymmetrical: one commit is identified as the parent, and one is identified as the child.
  This makes the graph into a _directed_ graph.
  An edge of the graph can be thought of as a list of changes from one commit to the next.
  This is what you see when you run `git diff`.
  It's not possible to create a loop in the history, so this graph has no directed cycles.

- Everything has to start somewhere.
  There is one special commit which has no parent, the initial commit.
  This commit is the beginning of the history of the repository.
  It simply represents the first time that files have been committed to the repository.

- So far, what I have described is a rooted tree: the history starts somewhere, then users commit files and changes starting from somewhere.
  As soon as two or more people start working on the same repository (or the same person from different computers), the history can split in two or more directions.
  For example, authors A and B could start working from a common basis, author A makes some changes to Section 2, and author B makes some changes to Section 3 (or Section 2!).
  This could look like this (orange is author A, yellow is author 2):

  <img class="img-fluid" alt="An example of a split history tree." src="history-fork.svg"/>

  At some point, the two sets of changes need to be reconciled.
  In Git parlance, this is called merging.
  Special commits called **merge commits** can have two parents or more.
  (I say special, but this is a commit like any other, so it has an author, a date, etc.)
  After such a commit, the history looks like this:

  <img class="img-fluid" alt="An example of a merge commit." src="history-merge.svg"/>

  If all goes well (i.e., there are no conflicting changes) then Git is able to automatically reconcile the changes.
  In that case, the merge commit will merely contain the information that the histories were merged without hiccups.
  Otherwise, there is what is called a merge conflict, which needs to be resolved manually.
  This can sound intimidating, but 1. Git helps you do it, and 2. if you were writing the paper in the old-school way and two authors wrote conflicting changes to the file at the same time, what would happen?
  Git at least gives you a heads up, prevents you from blindly overwriting your coauthor's changes, and tells you exactly where the issue is.
  (See the next post for how to do it concretely).

From all the metadata of a commit, Git computes a commit ID.
This commit ID is an [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1), which typically looks like this: `4303a91e4e4f5fedceead0d4dfe939471451e65d`.
These commits IDs depend on all the metadata, including the parent commits; since the parent commits depend themselves on their own parents, and so on, up until the initial commit.
A reference to a commit thus depends on the whole history of the repository up to that point.
This is useful to note, as some commands can be used to rewrite history; but any rewrite will change all the commit IDs.

## Staging

Alright, now we know what the history of a Git repository looks like.
But in practice, how does one actually append changes into that history?

In an addition to the history (which contains the commits), Git has a notion called the "staging area".
As you modify files in a repository, your actual files will diverge from what Git considers to be the latest version of the repository.
Before actually committing changes to the history, you need to explicitly "stage" them.
Concretely, this means that you select the changes that you want to insert into the history.
Once these changes are selected and you are satisfied, you would then insert the changes to history, creating a new commit whose parent is the previous commit, with a message that explains your changes.
A typical workflow looks like this:

<img class="img-fluid" style="max-width: 300px;" alt="The modify-stage-commit cycle." src="cycle.svg"/>

This notion of staging is useful for various reasons, compared to blindly committing everything that's changed in your repository:

- You may have modified many different files but you may not want to commit them just yet, as you don't consider these changes to be done.
- It is in fact possible to choose individual lines of a file to be committed.
  This can be useful if for example you are happy with the changes you've made to Section 2, forgot to commit, started working on Section 3, then remembered to commit ("save") but you don't want to commit Section 3 yet.
- You may also want to group changes logically.
  For example, if you have modified five files, but two of them are related to one change and three to another change, then it makes sense to make two different commits.
  In that case, you don't have to commit as soon as you want to group a set of changes together: you can group them after the fact.
- You may not want to include _every_ file in the Git history.
  For example, it's not a good idea to include LaTeX's `.aux` files, or the `.pdf` files, as they take up a lot of space, can be recreated at will, and the changes therein are not interesting (for example, if you compile the PDF on one day, then you compile it the next day, the PDF metadata will change, but that's not really something you are interested in recording).
  In that case, you would simply not commit the files that you don't want to record.

Git has some features that help you with this:

- If you don't care about grouping logically file changes or anything like that, then Git has an option to stage and commit all modified files in one fell swoop.
- You can also tell Git to ignore some files (e.g. the PDF).
  Git will not offer you to stage those files, and the commands that stage every file will not stage those.

## Branches and remotes
