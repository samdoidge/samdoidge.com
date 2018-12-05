---
layout: post
title: Background Server FTP Transfer
comments: True
description: I had a lot of files to transfer, and little bandwidth in my current location
tags: [tech]
---

I had a lot of files to transfer, little bandwith from my laptop and limited timed. Can I have my server transfering the files in the background? Yes.


My VPS has more bandwith than my current location. I needed to FTP the files, a little research and I settled on lftp. I use debian-based linux, so `apt-get install lftp` to get the program, and then.
```cd``` to my files location.

If you are in the current directory of your files, you will use the following command:


``` bash
lftp -e 'mirror -R . /TARGET/PATH' -u USERNAME,PASSWORD HOSTNAME
```

I've used mirror option with the -R flag mirrors the target path to match the local files. The -e flag deletes target files matching source files if they exist.

To make this command run in the background you need to put ampersand: ```&``` at the end; so your command becomes:
``` bash
lftp -e 'mirror -R . /TARGET/PATH' -u USERNAME,PASSWORD HOSTNAME &
```

The transfer is now running in the background - confirm this by typing ```top``` ( a list of running processes consuming the most resources) -lftp should be here.

This allowed me to close my laptop and hit the gym while I'm uploading ~2GB of files, brilliant.


*Note: this tool will not create directories on the target FTP server - you will need to create these manually, or look for a different method if you have many*
