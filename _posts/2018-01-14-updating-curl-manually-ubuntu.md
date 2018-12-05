---
layout: post
title: 'Updating curl manually on Ubuntu'
image: /assets/bitcoin.png
comments: True
tags: [tech]
---

<p style="text-align: center">
	<img src="/assets/curl-logo.svg?style=fifty">
</p>

I wanted to update curl, but the version available on 16.04 of Ubuntu was `7.47.0`, (not the latest `7.57.0`) so the nice `apt-get` method wasn't an option.

Download the latest release from <a href="http://curl.haxx.se/download.html">http://curl.haxx.se/download.html</a> to your home directory:
``` bash
wget http://curl.haxx.se/download/curl-7.57.0.tar.gz
```


<p>Install the tools to compile this release:</p>

``` bash
apt-get install libtool
apt-get install make
```

Unpack the source code:
``` bash
tar -xvf curl-7.57.0.tar.gz
```

Compile:
``` bash
cd curl-7.57.0 # enter the directory where curl was unpacked
./buildconf
./configure --with-ssl
make
make install
```

Update the system’s binaries:
``` bash
mv /usr/bin/curl /usr/bin/curl.bak
cp /usr/local/bin/curl /usr/bin/curl
```

You are done :bowtie:! The following will display your version of curl.
``` bash
curl -Vv
```

If you are using this in PHP, you should restart:
``` bash
service apache2 restart # if using apache
service php7.1-fpm restart # depending on your version
```

#### Issues
I should add my initial run of this did not produce a curl that could handle https (!) or handle some common encodings. The first issue was solved with:
``` bash
sudo apt install libssl-dev
```
and appending --with-ssl to the ./configure command used in compiling above.
``` bash
./configure --with-ssl
```


The second through downloading [zlib](https://zlib.net/) and compiling:
``` bash
wget http://www.zlib.net/zlib-1.2.11.tar.gz
tar -xvf zlib-1.2.11.tar.gz
cd zlib-1.2.11/
./configure
make
make install
```
 I then continued with the initial install from the compile section, using:
``` bash
./configure --with-ssl --with-zlib
```

This time I could confirm they were both installed by having the https protocol present, and a zlib version displaying on the first line of:
``` bash
curl -Vv
```

#### Sources

[Updating curl on Ubuntu](http://pavelpolyakov.com/2014/11/17/updating-php-curl-on-ubuntu/)
