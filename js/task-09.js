const span = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const body = window.document.querySelector("body");

buttonChangeColor.addEventListener("click", () => {
  span.textContent = body.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
