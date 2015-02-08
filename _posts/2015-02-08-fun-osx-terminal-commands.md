---
layout: post
title: Fun OSX Terminal Commands
comments: True
description: I've put fun, open is fun in that a new window pops up over your terminal showing you the files you are browsing visually, and drag-ablly. History is just useful
---

I've put fun - ```open``` is fun in that a new window pops up over your terminal showing you the files you are browsing visually, and drag-ablly. History is just useful!

To open a finder window in the current directory you are browsing in terminal, use: 
{% highlight css %}
open .
{% endhighlight %}

To search your previously used commands, combine ```history``` and ```grep```:

{% highlight css %}
history | grep foo
{% endhighlight %}

This will search your last 500 commands that contained 'foo'.
