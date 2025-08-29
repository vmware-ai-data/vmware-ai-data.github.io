---
layout: page
title: "VMware Programs"
permalink: /programs/
---

<h2>All Program Articles</h2>

{%- comment -%}
Category renderer for programs.md
- Normalizes page.categories to an array (even if it's a string)
- Strips blanks, de-dupes, natural-sorts case-insensitively
- Builds safe URLs using slugify
- Uses site.baseurl and a configurable category base path
{%- endcomment -%}

{%- assign category_base = site.category_base | default: '/categories' -%}

{%- assign raw = page.categories | default: '' -%}
{%- assign normalized = raw | join: ',' | split: ',' -%}

{%- assign cleaned = '' | split: '' -%}
{%- for c in normalized -%}
  {%- assign label = c | strip -%}
  {%- if label != '' -%}
    {%- assign cleaned = cleaned | push: label -%}
  {%- endif -%}
{%- endfor -%}

{%- assign cleaned = cleaned | uniq -%}
{%- assign cleaned = cleaned | sort_natural -%}

{%- if cleaned.size > 0 -%}
<ul class="categories">
{%- for cat in cleaned -%}
  {%- assign slug = cat | slugify -%}
  <li>
    <a href="{{ site.baseurl }}{{ category_base }}/{{ slug }}/">
      {{ cat | escape }}
    </a>
  </li>
{%- endfor -%}
</ul>
{%- endif -%}
