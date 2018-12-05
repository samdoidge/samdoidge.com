---
layout: post
title: Database backups to Dropbox
comments: True
tags: [tech]
---

I'm automating my database backups and storing them with Dropbox. You need [Dropbox running on your server](http://buildcontext.com/blog/2012/dropbox-linux-ubuntu-ec2-linode-selective-sync) for this - it's a great guide, but note one key point : when 'This client is not linked to any account...' appears - **leave the service open, do not press Ctrl + C**, enter the URL in the browser - when it says 'welcome' - then you can close.

Here I will show how to automate database backups and add them to Dropbox:

First we need a shell script to for our cron job to run, using your favourite terminal editor (I use *vi*):
``` bash
vi script.sh
```
db-backup.sh is probably a better name. To backup a database useful commands are provided - mysql has *mysqldump*. To take a backup of the whole database enter the following in your .sh file:
``` bash
mysqldump db_name -u username -ppassword > /path/to/dropbox/folder/
```
This command dumps the whole database, you can specify specific tables if wanted - look into the mysqldump command. I put my database dumps into a *Database* folder within my Dropbox folder on the server.


Once we have our shell script - run it via
``` bash
sh script.sh
```
to check it works, if so, let's automate the running of this with a cron:
``` bash
crontab -e
```
then add the following:
``` bash
0 0 * * * /bin/sh /path/to/script.sh
```
This will have the script being run every day at midnight.
