const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", handlerInput);

function handlerInput(evt) {
  if (evt.currentTarget.value.length <= 6) {
    inputEl.classList.add("valid");
    inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.replace("valid", "invalid");
  }
}
