---
layout: post
title: Why use Sass?
comments: True
description: To answer the question, on anything more complex than a one page site it is worth using Sass. There is a tiny learning curve, native CSS works in Sass, Sass just adds to CSS.
tags: [tech]
---

![no-margin](/assets/sass.png)

Admittedly Sass has been out for years now, but I did'nt feel an urgent need to write about, until now. On small projects CSS can seem fine. On large projects they can quickly become difficult to maintain. Want to change a colour used throughout your site? At best it's a mass search and replace, at worst you are browsing each style declaration, check where it is used and then changing the HEX value.



Sass lets you use variables in your style, which is really handy for things like colours and fonts:
``` css
$highlight-colour: #f7901e;
$font-primary: Tahoma, Geneva, sans-serif;
$font-secondary: 'Nunito', sans-serif;
```


It also prevents you repeating style code across your declarations with mix-ins:
``` css
@mixin box-shadow() {
  -webkit-box-shadow: inset 4px 4px 8px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow:    inset 4px 4px 8px 0px rgba(0, 0, 0, 1);
  box-shadow:         inset 3px 3px 8px 0px rgba(0, 0, 0, 1);
}
```

You can then use the like so:

``` css
.style-example {
  @include box-shadow();
}
```

### Why use? ###

To answer the question, on anything more complex than a one page site it is worth using Sass. There is a tiny learning curve, native CSS works in Sass, Sass just adds to CSS.

Once you have setup a compiler for Sass to CSS, you should use on every project with possible exceptions for single pages and prototyping. It is easier to maintain and can help reduce the size of your css files.

### Drawbacks ###

Sass needs to be compiled into CSS - browsers cannot use it natively. You can setup grunt to automatically convert Sass to CSS on saving - but this involves some setup. You can also do the compiling with a command line tool.
