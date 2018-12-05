---
layout: post
title: Do not use your domain name as a Hostname in Plesk
comments: True
tags: [tech]
---

Cautionary tale: Do not use your domain name as a hostname. I installed a new version of Ubuntu with Plesk on my VPS again lately, and decided to use my domain name as a hostname within Plesk - thinking it would seem nice and orderly. Cue: an error within a node.js script: ```connect ECONNREFUSED```. It was on loading JSON with a couple of URLs to process - but the domain of the URLs is the same as the site calling the script, and where the script recides - why is the connection refused?!

Much debugging and telnet'ing and heartache later - changing my server hostname from my domain to a random name solved this. I think it first tried connecting to URLs through 127.0.0.1 (due to domain as hostname) instead of the website IP, and getting connection refused.