const inputEl = document.querySelector("#validation-input");
const inputBlur = (event) =>
  event.currentTarget.value.length !== 6
    ? inputEl.classList.add("invalid")
    : inputEl.classList.replace("invalid", "valid");

inputEl.addEventListener("blur", inputBlur);
