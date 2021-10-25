---
title: "FAQs"
layout: "base.njk"
permalink: false
---

## Frequently Asked Questions

<ul>
{% for faq in collections.faqs %}

<li><a href="{{faq.url}}">{{ faq.data.title }}</a></li>

{% endfor %}

</ul>
