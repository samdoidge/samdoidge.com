---
layout: post
title: Fun OSX Terminal Commands
comments: True
description: I've put fun, open is fun in that a new window pops up over your terminal showing you the files you are browsing visually, and drag-ablly. History is just useful
---

I've put fun - ```open``` is fun in that a new window pops up over your terminal showing you the files you are browsing visually, and drag-ablly. History is just useful!

To open a finder window in the current directory you are browsing in terminal, use:
``` bash
open .
```

To search your previously used commands, combine ```history``` and ```grep```:

``` bash
history | grep foo
```

This will search your last 500 commands that contained 'foo'.
