---
title: 'Other Posts'
description: 'Posts tagged Other - these are usually not technology focused posts, and focus on some other facet of our brilliant world.'
layout: default
---

<div class="posts home markdown-body">

<h1>Other Posts</h1>
    {% for page in site.tags.other %}

        <h2 class="post-title">
            <a href="{{ page.url }}">
                {{ page.title }}
            </a>
        </h2>

        {% include postmeta.html %}
        <div class="entry"><p>{{ page.content | truncatewords:47 | strip_html }}</p></div>

    {% endfor %}

    <p class="rss-subscribe">
        <a href="/archive">View more</a>
    </p>
</div>
