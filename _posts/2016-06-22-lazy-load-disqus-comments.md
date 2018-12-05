---
layout: post
title: Lazy load Disqus comments
comments: True
description: Lazy load Disqus comments
tags: [tech]
---

I've implemented lazy loading of Disqus comments, it's just a better way of handling comments loaded via javascript I believe.

There is one potential drawback on SEO, but on the plus side there is faster page loads (better for SEO). I also like the fact I only see comments when I scroll near them - to me it's a sign of a well developed site, and one which cares for the users time and experience of the site.

I've used a beautiful gist by Christian Fei - which doesn't require jQuery (more speed benefits). Enjoy.
<script src="https://gist.github.com/CrocoDillon/5727950.js"></script>

***Lazy loading:*** *Lazy loading is a design pattern commonly used in computer programming to defer initialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used.* - Thanks Google. This implementation does not load the comments until we scroll to the top of their position the page.
