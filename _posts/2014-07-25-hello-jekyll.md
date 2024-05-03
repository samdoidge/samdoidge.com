---
layout: post
title: Hello Jekyll
tags: [tech]
---
I'm now using [Jekyll](http://jekyllrb.com/) - a tool which transforms your markdown into static html.

Following a great tutorial from [Joshua Landa](http://joshualande.com/jekyll-github-pages-poole/) I was able to setup site relatively pain free (**This is a lie.** On OS X Lion I had a nightmare even installing Jekyll - a minimum requirement of ruby version 1.9.2 for some library was not simple to resolve. A guide suggested uninstalling Xcode temporarily as part of a solution update ruby.. I decided it was time to update my OS - hello Mavericks.)

I've kept the site simple and expanded on some of Joshua's and Poole's design to brand my site, but of course keeping it simple. I had initially held off from looking into Jeykll - I had Wordpress, and a nice plugin - `wp-svbtle` to go along with it, but seeing a clean template to start with, GitHub hosting at satisfying speeds, and people able to make pull requests to my site has swayed me.

One thing I got wrong initially was the branch names. From looking at another tutorial I used 'gh-pages' - a user GitHub page such as this needs the master branch. Combined with the time it takes for a Jekyll GitHub page to be processed (10~ min delay) it can be tricky to spot.

For my URLs I have chosen title names - you set this by changing the permalink value to <code>"/:title"</code>, you can see this in my [config file](https://github.com/samdoidge/samdoidge.github.io/blob/master/_config.yml). You will need to set your pages URL if using this method - in example I had added <code>permalink: about/</code> at the top of my [about page](https://raw.githubusercontent.com/samdoidge/samdoidge.github.io/master/about.md).