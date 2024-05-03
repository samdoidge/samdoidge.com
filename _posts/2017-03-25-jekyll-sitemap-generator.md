---
layout: post
title: 'Jekyll XML Sitemap Generator'
description: 'Sitemaps are still important for SEO, perhaps one of the most important things.

An XML Sitemap is now really easy to setup in Jekyll - easier than Wordpress, even.'
tags: [tech]
---

Sitemaps are still important for SEO, perhaps one of the most important things.

An XML Sitemap is now really easy to setup in Jekyll - easier than Wordpress, even. Here is my [Sitemap](/sitemap.xml).

* Simply add `gem 'jekyll-sitemap'` to your GemFile* and then run `bundle`.

* Add the following to your site's _config.yml:

```yaml
gems:
  - jekyll-sitemap
```

* Serve your site with `bundle exec jekyll serve` and the sitemap should now be accessible at /sitemap.xml. (Set the `url` parameter in _config.yml to configure the URL used in your sitemap.xml file).

* Set this as your Sitemap in [Google Search Console](https://www.google.com/webmasters/) to reap the large SEO benefits.

A massive thanks to the brilliant creators of the plugin used above: [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap).


**(If you do not have a GemFile, create one looking something like [mine](https://github.com/samdoidge/samdoidge.com/blob/master/GemFile).)*
