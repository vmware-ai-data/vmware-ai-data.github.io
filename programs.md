---
layout: page
title: "VMware Programs"
permalink: /programs/
---

<h2>All Program Articles</h2>

{%- comment -%}
  Merge posts from the program-related categories.
  We check for existence before concat so all_posts stays an array (avoids map errors).
  We include both "VMware {code}" and "code" in case posts use either form.
{%- endcomment -%}
{%- assign program_categories = "vExpert|VMware {code}|code|Rewards|VMUG" | split: "|" -%}
{%- assign all_posts = "" | split: "" -%}

{%- for cat in program_categories -%}
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
<p>No program articles found yet. Add posts with one of these categories in front matter:
<code>categories: [vExpert]</code>, <code>[VMware {code}]</code> (or <code>[code]</code>), <code>[Rewards]</code>, or <code>[VMUG]</code>.
</p>
{%- endif -%}

<hr />

{%- comment -%}
  Optional: Per-category sections (rendered only if that category has posts)
{%- endcomment -%}
{%- for cat in program_categories -%}
  {%- assign posts_in_cat = site.categories[cat] -%}
  {%- if posts_in_cat and posts_in_cat != empty -%}
  <h3 id="{{ cat | downcase | replace: ' ', '-' | replace: '{', '' | replace: '}', '' }}">{{ cat }} ({{ posts_in_cat | size }})</h3>
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
