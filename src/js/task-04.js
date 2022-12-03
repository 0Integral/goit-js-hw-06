let counterValue = 0;

const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

decrBtn.addEventListener("click", onClickDecrementBtn);
incrBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onClickIncrementBtn() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
