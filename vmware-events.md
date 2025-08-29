---
layout: page
title: "VMware events"
permalink: /events/
---
<h2>All VMware Event Articles</h2>
<ul>
  {% for post in site.categories.VMUG %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  {% for post in site.categories.Explore %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
{% endfor %}
