---
title: "Local Business Marketing Program"
layout: "base.njk"
---

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
