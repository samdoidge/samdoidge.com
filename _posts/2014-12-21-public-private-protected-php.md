---
layout: post
title: Public, private and protected in PHP
comments: True
description: To answer the question, on anything more complex than a one page site it is worth using Sass. There is a tiny learning curve, native CSS works in Sass, Sass just adds to CSS.
---

Not the most interesting post but essential for OOP PHP development: 

* <code>public</code> scope to make that variable/function available from anywhere, other classes and instances of the object.

* <code>private</code> scope when you want your variable/function to be visible in its own class only.

* <code>protected</code> scope when you want to make your variable/function visible in all classes that extend current class including the current class.


### Basically ###


<code>public</code> can be accessed and changed from outside the class. This cannot happen with <code>public</code> or <code>protected</code> :)

Taken from [this stackoverflow question](http://stackoverflow.com/questions/4361553/php-public-private-protected) with a minor improvement.