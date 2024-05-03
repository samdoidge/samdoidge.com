---
layout: post
title: "Laravel Inverse Seed Generator"
tags: [tech]
---

This is a cool tool, and automates some of which I had been doing manually - creating seeds for data. With one command, it will create a seed for a given table (or tables) using the data already within that table - beautiful. <a href="https://github.com/orangehill/iseed
">https://github.com/orangehill/iseed
</a>

<p style="text-align: center">
<div class='embed-container'><iframe src='https://www.youtube.com/embed/JtyaZTYNbl4' frameborder='0' allowfullscreen></iframe></div>
</p>



To install, add the package to your composer.json:

```"require": {
	"orangehill/iseed": "dev-master"
}```

Run composer update:

```composer update```

And the simplest command to generate a seed for a given table:

```php artisan iseed [table_name]```

More commands / documentation are on the packages github page.