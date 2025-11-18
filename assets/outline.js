function getHeaders() {
  const container = document.getElementById('main_content') || document;
  const elements = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headers = [];

  elements.forEach(el => {
    const text = el.innerText;
    const id = el.id || text.toLowerCase().replace(/ /g, "-");
    const level = parseInt(el.tagName[1], 10);

    headers.push({
      id,
      text,
      level 
    });
  });

  return headers;
}

function buildTree(headers) {
  const list = [];
  let nextLevelHeaders = [];
  let lastLevel = -1;

  if (headers.length === 0) {
    return "";
  }

  const buildSubTree = () => {
    if (nextLevelHeaders.length > 0) {
      list[list.length - 1] += buildTree(nextLevelHeaders);
    }
  };

  headers.forEach(h => {
    if (lastLevel !== -1 && lastLevel < h.level) {
      nextLevelHeaders.push(h);
      return;
    }

    buildSubTree();

    lastLevel = h.level;
    list.push(`<a href="#${h.id}">${h.text}</a>`);
    nextLevelHeaders = [];
  });

  buildSubTree();

  const listHTML = list.map(i => `<li>${i}</li>`).join("");
  return `<ul>${listHTML}</ul>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const headers = getHeaders();
  const tree = buildTree(headers);
  document.querySelector("#toc").innerHTML = tree;
});
