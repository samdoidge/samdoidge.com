---
title: 'Technology Posts'
description: 'Posts tagged Other'
layout: default
---

<div class="posts home markdown-body">

    <h2 style="margin-bottom:10px;">Technology Posts</h2>
    {% for page in site.tags.tech %}
    <div class="post--small">
        <h2 class="post-title">
            <a href="{{ page.url }}">
                {{ page.title }}
            </a>
        </h2>

        {% include postmeta.html %}
        <div class="entry"><p>{{ page.content | truncatewords:47 | strip_html }}</p></div>
    </div>
    {% endfor %}

    <p class="rss-subscribe">
        <a href="/archive">View more</a>
    </p>
</div>
