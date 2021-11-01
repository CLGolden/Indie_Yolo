---
title: "Local Business Marketing Program"
layout: "base.njk"
---

<section class="hero">
  <h2>A Six-Month Marketing Program<br>for Minority-Owned Local Businesses<br>in Yolo County</h2>
  <p>Current Grants Available: 4</p>
</section>

{% for section in collections.home %}

  <section class="{{ section.data.class}}">
    {{ section.templateContent | safe }}
  </section>
{% endfor %}

## Frequently Asked Questions

<ul>
{% for faq in collections.faqs %}

<details>
<summary>{{ faq.data.title }}</summary>
{{ faq.templateContent | safe}}
</details>

{% endfor %}

</ul>
