---
title: "Offers"
---
<style>
/** Three per row, circular images, Import text below it. Hover icon a indicates interaction. **/
.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.certificate {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;

  transition: transform 0.2s;

  cursor: pointer;
}
.certificate:hover {
  transform: scale(1.1);
}
.certificate a {
  text-decoration: none;
}
.certificate img {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #ccc;
  object-fit: cover;
  object-position: center;
  text-align: center;
}
dialog {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
}
dialog p {
  margin: 0 0 1rem;
}
dialog img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 0 1rem;
}
dialog form {
  background-color: #fff;
}
::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<script>
document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('[data-modal]').forEach(function (opener) {
      opener.addEventListener('click', function (event) {
         event.preventDefault();
         var dialog = document.getElementById(opener.dataset.modal);
         dialog.showModal();
      });
   });
});
</script>

<div class="offer-grid">
  {% for offer in site.data.offers %}
  <div class="certificate" data-modal="{{offer.offer_json.id}}">
    {% if offer.thumbnail contains 'data:image' %}
      {% assign processed_thumbnail = offer.thumbnail %}
    {% else %}
      {% assign processed_thumbnail = offer.thumbnail | replace_first: 'https://static.example.com', '/images' | relative_url %}
    {% endif %}
    <img src="{{processed_thumbnail}}" alt=""/>
    <p class="title"> 📥 import <em>{{ offer.name }}</em></p>
  </div>
  <dialog id="{{ offer.offer_json.id }}">
    <p>Import <em>{{ offer.name }}</em> into your wallet</p>
    <img src="{{ offer.offer_png | relative_url }}" alt="{{ offer.offer_json.id }}">
    <form method="dialog">
      <button type="submit" autofocus>Close</button>
    </form>
  </dialog>
  {% endfor %}
</div>
