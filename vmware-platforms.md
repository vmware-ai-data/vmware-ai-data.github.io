---
layout: page
title: "VMware Platforms"
permalink: /platforms/
---

<h2>All Platform Articles</h2>
<ul>
  {% for post in site.categories.SocialMedia %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  {% for post in site.categories.Community %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
