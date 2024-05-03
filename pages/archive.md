---
layout: page
title: Archive
description: A list of all the blog posts on samdoidge.com, ordered by year.
permalink: archive/
---

{% for post in site.posts %}
{% capture currentyear %}{{post.date | date: "%Y"}}{% endcapture %}
{% if currentyear != year %}

### {{ currentyear }}

    {% capture year %}{{currentyear}}{% endcapture %}

{% endif %}

- [{{ post.title }}]({{ post.url}})
  {% endfor %}
