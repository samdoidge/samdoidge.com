---
layout: post
title: Fun Command Line Variables
comments: True
description: I've put fun, open is fun in that a new window pops up over your terminal showing you the files you are browsing visually, and drag-ablly. History is just useful
tags: [tech]
---

Since my last post was such a success

![no-margin](/assets/fun-osx-commands.jpg)

I've decided to continue the series.

### Command Line Variables ###

You have a bash script that needs to FTP somewhere and want to test part of the script works outside of the whole script? Run it in the command line. 'But it has configruation variables' I hear you cry!

Paste them into the command line. You don't have to have type out a huge command copy and pasting the values in, use them exactly like bash does. The variables will be set for your incoming command.

We have a bash script to do the following: Connect via FTP and create a new directory.

``` bash
#!/bin/bash
FTPHOST='ftp.example.com'
USR='sam'
PASS='secret-password'
ftp -n $FTPHOST <<EOF
USER $USR
PASS $PASS
mkdir new_dir
quit
EOF
exit 0
```

We can paste this in the command line:
![no-margin](/assets/cl-vars.png)

You can check they are set with the ```echo``` command:
![no-margin](/assets/echo.jpg)

Then paste your command:
![no-margin](/assets/paste-command.jpg)

Forgive the ugly multi-line command. It doesn't work due to the credentials, but otherwise you would be connecting to a FTP server.

This may be obvious to some, as it's a bash script - you can run the contents in the bash command line! But if you are learning you may not have thought to use this previously (like me).

#### Pro Tip: ####
Don't leave spaces around ```=``` when setting your variables.
