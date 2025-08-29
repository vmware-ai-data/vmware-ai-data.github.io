---
layout: page
title: "VMware Products"
permalink: /products/
---

<h2>All Product Articles</h2>
{%- assign product_categories = "VCF|vSphere|Aria|Tanzu" | split: "|" -%}
{%- assign all_posts = "" | split: "" -%}
{%- for cat in product_categories -%}
  {%- assign cat_posts = site.categories[cat] | default: empty -%}
  {%- if cat_posts and cat_posts.size > 0 -%}
    {%- assign all_posts = all_posts | concat: cat_posts -%}
  {%- endif -%}
{%- endfor -%}
{%- assign all_posts = all_posts | uniq | sort: "date" | reverse -%}

{%- if all_posts and all_posts.size > 0 -%}
<ul>
  {%- for post in all_posts -%}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color:#6b7280;"> — {{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {%- endfor -%}
</ul>
{%- else -%}
<p>No product articles found yet. Add posts with one of these categories in front matter:
<code>categories: [VCF]</code>, <code>[vSphere]</code>, <code>[Aria]</code>, or <code>[Tanzu]</code>.</p>
{%- endif -%}

<hr />

{%- comment -%}
  Per-category sections (only render if the category exists)
{%- endcomment -%}

{%- for cat in product_categories -%}
  {%- assign posts_in_cat = site.categories[cat] | default: empty | sort: "date" | reverse -%}
  {%- if posts_in_cat and posts_in_cat.size > 0 -%}
  <h3 id="{{ cat | downcase }}">{{ cat }} ({{ posts_in_cat.size }})</h3>
  <ul>
    {%- for post in posts_in_cat -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="color:#6b7280;"> — {{ post.date | date: "%Y-%m-%d" }}</span>
      </li>
    {%- endfor -%}
  </ul>
  {%- endif -%}
{%- endfor -%}
