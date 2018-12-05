---
layout: post
title: SSL / HTTPS with Cloudflare
comments: True
description: SSL / HTTPS with Cloudflare
tags: [tech]
---

I get asked a lot of questions (I don't ). Here's a how-to on SSL with Cloudflare (they now provide this on their free plan):

If you are only using Flexible SSL (HTTPS between cloudflare and end user) you do not want a redirect in htaccess / vhosts of your site - or you will get an infinite redirect issue. So how to force people to use HTTPS? Flexible SSL is the solution, combined with a catch all Page Rule.

![no-margin](/assets/ssl-flexible.png)

Goto the Page Rule section:

![no-margin](/assets/ssl-pagerule.png)
