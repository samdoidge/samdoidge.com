---
layout: post
title: Setup local sites with OS X Mavericks
tags: [tech]
---

You've just installed Mavericks on your lovely Mac, and want to do some web development, probably with PHP. Things are made simple for us in this version. I'm on 10.9.4 - others may need some other changes on anything older releases of Mavericks. I like to have folders in a Sites directory within my user folder, and my URLs as localhost/[folder-name] - edit if you want your sites somewhere else.

Let's start apache, in terminal (command line) type `sudo apachectl start` and hit enter. Set your browser to 'http://localhost' and you should see 'It works!'. Good.

Next setp: I'm using my favourite command line editor, vi:
<div class="message">
sudo vi /etc/apache2/httpd.conf
</div>

Line 170, change the DocumentRoot to:
<div class="message">
DocumentRoot "/Users/[username]/Sites"
</div>
and also line 197:
<div class="message">
Directory "/Users/[username]/Sites"
</div>

Line 217 change AllowOverride to “All” so that we can use .htaccess to modify any settings for our local sites

`AllowOverride All`

##### PHP #####
To setup PHP, uncomment line 118 of `LoadModule php5_module libexec/apache2/libphp5.so` in the same file.

To see your changes, restart apache with:
`sudo apachectl restart`

Test it's all working:

Create a folder within Users/[username]/Sites, add an index.php with some php `<?php echo 'working';` and browse to it:


This guide is based on [Brian Love's Mavericks Apache guide](http://brianflove.com/2013/10/23/os-x-mavericks-and-apache/)
