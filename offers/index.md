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
.certificate code {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: none;
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
dialog .clipboard {
  font-family: monospace;
  display: inline-block;
  overflow-x: scroll;
  text-wrap: nowrap;
  height: 2rem;
  width: 500px;
}
dialog button.icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
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
   document.querySelectorAll('dialog button.copy').forEach(function (copyButton) {
      copyButton.addEventListener('click', function (event) {
        event.preventDefault();
        var offerCode = copyButton.previousElementSibling;
        navigator.clipboard.writeText(offerCode.textContent).then(function() {
          copyButton.textContent = '✅ Copied!';
          setTimeout(function() {
            copyButton.textContent = '📋';
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy: ', err);
        });
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
    <p class="issuer">{{ offer.issuer }}</p>
    <img src="{{processed_thumbnail}}" alt=""/>
    <p class="title"> 📥 import <em>{{ offer.name }}</em></p>
    <code title="{{offer.credential}}">{{ offer.credential }}</code>
    
  </div>
  <dialog id="{{ offer.offer_json.id }}">
    <p>Import <em>{{ offer.name }}</em> into your wallet</p>
    <img src="{{ offer.offer_png | relative_url }}" alt="{{ offer.offer_json.id }}">
    <code class="clipboard">{{ offer.offer_json.uri }}</code>
    <button class="icon copy" aria-label="Copy this offer">📋</button>
    <form method="dialog">
      <button type="submit" autofocus>Close</button>
    </form>
  </dialog>
  {% endfor %}
</div>
