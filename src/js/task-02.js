const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const listLiEl = ingredients.map((elem) => {
  const liEl = document.createElement("li");

  liEl.textContent = elem;
  liEl.classList.add("item");

  return liEl;
});

listEl.append(...listLiEl);
