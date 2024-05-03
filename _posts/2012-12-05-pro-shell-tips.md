---
layout: post
title: Pro-shell-tips
tags: [tech]
---
``` bash
cp -r /source-folder /destination-folder
```
will not preserve permissions - you want to preserve permissions if backing up folder on a live server.
``` bash
cp -a /source-folder /destination-folder
```
does the backup you want :)

using wildcard in a transfer ignores hidden files.
``` bash
rsync -avz * /dest/folder
```
will ignore your .htaccess and any other hidden files, just copy the directory or use . within the directory, not * to transfer all.
``` bash
rsync -avz . /dest/folder
```
