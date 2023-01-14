---
title: "Other Posts"
description: "Posts tagged Other - these are usually not technology focused posts, and focus on some other facet of our brilliant world."
layout: default
---

<div class="posts home markdown-body">

    <h2 style="margin-bottom:10px;">Other Posts</h2>
    {% for page in site.tags.other %}
    <div class="post--small">
        <h2 class="post-title">
            <a href="{{ page.url }}">
                {{ page.title }}
            </a>
        </h2>

        {% include postmeta.html %}
        {% include excerpt.html %}
    </div>
    {% endfor %}

    <p class="rss-subscribe">
        <a href="/archive">View more</a>
    </p>

</div>
