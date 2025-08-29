---
layout: page
title: "VMware Platforms"
permalink: /platforms/
---
<h2>All Program Articles</h2>
<ul>
  {% for post in site.categories.vExpert %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  {% for post in site.categories.VMUG %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
{% endfor %}
