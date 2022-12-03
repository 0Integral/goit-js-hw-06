function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[ data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", (event) =>
  createBoxes(Number(input.value))
);

btnDestroy.addEventListener("click", destrBoxes);

function createBoxes(amount) {
  const divsEl = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divsEl.push(divEl);
  }
  divBoxes.append(...divsEl);
}

function destrBoxes() {
  divBoxes.innerHTML = "";
  input.value = "";
}
