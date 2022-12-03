const allItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItemEl.length}`);
console.log("");

allItemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
