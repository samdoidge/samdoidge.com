---
layout: post
title: Hello Jekyll
comments: True
---
I'm now using [Jekyll](http://jekyllrb.com/) - a tool which transforms your markdown into static html.

Following a great tutorial from [Joshua Landa](http://joshualande.com/jekyll-github-pages-poole/) I was able to setup site relatively pain free (**This is a lie.** On OS X Lion I had a nightmare even installing Jekyll - a minimum requirement of ruby version 1.9.2 for some library was not simple to resolve. A guide suggested uninstalling Xcode temporarily as part of a solution update ruby.. I decided it was time to update my OS - hello Mavericks.)

I've kept the site simple and expanded on some of Joshua's and Poole's design to brand my site, but of course keeping it simple. I had initially held off from looking into Jeykll - I had Wordpress, and a nice plugin - wp-svbtle to go along with it, but seeing a clean template to start with, Github hosting at satisfying speeds, and people able to make pull requests to my site has swayed me. 

One thing I got wrong initially was the branch names. From looking at another tutorial I used 'gh-pages' - a user Github page such as this needs the master branch. Combined with the time it takes for a Jekyll github page to be processed (10~ min delay) it can be tricky to spot.