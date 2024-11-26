---
title: "Offers"
---

{% assign offer_images = site.static_files | where: "offer", true %}
{% for offer in offer_images %}
  ![{{ offer.path }}]({{ offer.path | relative_url }})
  {{ offer.path | split: "/" | last | split: "." | first | replace: "_", " " }}
{% endfor %}
