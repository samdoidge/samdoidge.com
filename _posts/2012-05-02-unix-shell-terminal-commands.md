---
layout: post
title: Find and replace a string across many files with Shell / Terminal
comments: True
---

Useful commands for use with the Shell / Terminal. Spotlight tool - > 'terminal' to find on Mac OS.

PHP used in this case, replace 'php' with the file extension of your choice.

Find and replace a string across many files on MAC OS:
``` bash
find . -name "*.php" -print | xargs sed -i "" 's/string to replace/replacement string/g'
```
Find and replace a string across many files on LINUX:
``` bash
find . -name "*.php" -print | xargs sed -i 's/string to replace/replacement string/g'
```
