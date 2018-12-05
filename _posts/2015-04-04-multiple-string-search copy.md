---
layout: post
title: Multiple String Search
comments: True
description: I had a lot of files to transfer, and little bandwidth in my current location
tags: [tech]
---

```grep``` is a great tool for searching multiple files and directories for a string - but what if we have a list of strings we are looking for?

A great solution for this is to enter the strings into a file - one per line.


We will use the find command combined with grep and a few other flags to search our current directory recursively for all the string in our text file:

![no-margin](/assets/string-list.jpg)

Our command:

``` bash
find . -type f -exec grep -iHFf search_terms.txt {} +
```

The resulting matches are output into the command line.

I found this while googling and can't find the URL again, but thank you internet stranger.
