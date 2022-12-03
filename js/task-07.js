const valueRangeEl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

valueRangeEl.addEventListener("input", handlerValueSize);

function handlerValueSize(evt) {
  textFontSize.style.fontSize = `${evt.currentTarget.value}px`;
}
