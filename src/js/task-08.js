const form = document.querySelector("form");
form.addEventListener("submit", hadleSubmite);

function hadleSubmite(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заполните все поля!");
  } else {
    const userInfoForm = {
      email: email.value,
      password: password.value,
    };
    console.log(userInfoForm);
    evt.currentTarget.reset();
  }
}
