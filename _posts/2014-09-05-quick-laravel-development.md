---
layout: post
title: Speedy Laravel Development
comments: True
---

This is a quick post to share a small tool ([Laravel-4-Generators-Bootstrap-3](https://github.com/wdollar/Laravel-4-Generators-Bootstrap-3)) to quickly generate your database tables, controller with CRUD functions and scaffolding views connecting all this with one command:

{% highlight bash %}
php artisan generate:scaffold tweet --fields="author:string, body:text"
{% endhighlight %}

`scaffold` is the powerful option to generate the connecting view and controller in a Bootstrap 3 format. In the below example a table 'tweets' will be created with a controller named TweetsController




Thanks to Wes Dollar and Jeffrey Way, with all the open source contributors :)

