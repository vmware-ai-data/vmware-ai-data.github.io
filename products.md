---
layout: page
title: "VMware Products"
permalink: /products/
---

<h2>All Product Articles</h2>

{%- comment -%}
  Build a merged list of posts from specific product categories.
  We ONLY concat when the category actually exists (array), so we never turn
  all_posts into a string (which would break filters like 'uniq' / 'sort').
{%- endcomment -%}
{%- assign product_categories = "VCF|vSphere|Aria|Tanzu" | split: "|" -%}
{%- assign all_posts = "" | split: "" -%}

{%- for cat in product_categories -%}
  {%- assign cat_posts = site.categories[cat] -%}
  {%- if cat_posts and cat_posts != empty -%}
    {%- assign all_posts = all_posts | concat: cat_posts -%}
  {%- endif -%}
{%- endfor -%}

{%- assign all_posts = all_posts | uniq | sort: "date" | reverse -%}

{%- if all_posts and all_posts != empty -%}
<ul>
  {%- for post in all_posts -%}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color:#6b7280;"> — {{ post.date | date: "%Y-%m-%d" }}</span>
      {%- if post.categories and post.categories != empty -%}
        <span style="color:#94a3b8;"> ({{ post.categories | join: ", " }})</span>
      {%- endif -%}
    </li>
  {%- endfor -%}
</ul>
{%- else -%}
<p>No product articles found yet. Add posts with one of these categories in front matter:
<code>categories: [VCF]</code>, <code>[vSphere]</code>, <code>[Aria]</code>, or <code>[Tanzu]</code>.
</p>
{%- endif -%}

<hr />

{%- comment -%}
  Optional: Per-category sections (rendered only if that category has posts)
{%- endcomment -%}
{%- for cat in product_categories -%}
  {%- assign posts_in_cat = site.categories[cat] -%}
  {%- if posts_in_cat and posts_in_cat != empty -%}
  <h3 id="{{ cat | downcase }}">{{ cat }} ({{ posts_in_cat | size }})</h3>
  <ul>
    {%- assign sorted_cat = posts_in_cat | sort: "date" | reverse -%}
    {%- for post in sorted_cat -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="color:#6b7280;"> — {{ post.date | date: "%Y-%m-%d" }}</span>
      </li>
    {%- endfor -%}
  </ul>
  {%- endif -%}
{%- endfor -%}
