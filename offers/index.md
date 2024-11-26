---
title: "Offers"
---
<style>
.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.offer-cell .modal-open {
  width: 100%;
  min-height: 4rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
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
   document.querySelectorAll('button.modal-open').forEach(function (button) {
      button.addEventListener('click', function () {
         var dialog = document.getElementById(button.dataset.modal);
         dialog.showModal();
      });
   });
});
</script>

<div class="offer-grid">
{% assign offer_images = site.static_files | where: "offer", true %}
{% for offer in offer_images %}
  {% assign offer_id = offer.path | split: "/" | last | split: "." | first %}
  {% assign offer_name = offer_id | replace: "_", " " %}
  <div class="offer-cell">
    <button class="modal-open" data-modal="{{ offer_id }}" type="button">Import {{ offer_name }}</button>
  </div>
  <dialog id="{{ offer_id }}">
    <p>Import <em>{{ offer_name }}</em> into your wallet</p>
    <img src="{{ offer.path | relative_url }}" alt="{{ offer_id }}">
    <form method="dialog">
      <button type="submit" autofocus>Close</button>
    </form>
  </dialog>
{% endfor %}
</div>
