---
layout: default
permalink: /
is_landing: true
---
{% assign this_month = 'now' | date: "%-m" %}
{% if this_month == '2' %}
    {% include landing-bday.html %}
{% else %}
    {% include landing.html %}
{% endif %}