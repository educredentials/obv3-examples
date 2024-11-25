---
title: "Offers"
---

{% assign offer_images = site.static_files | where: "offer", true %}
{% for offer in offer_images %}
  ![{{offer}}](offer.path)
{% endfor %}
