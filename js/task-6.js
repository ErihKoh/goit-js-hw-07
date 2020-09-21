const inputEl = document.querySelector("#validation-input");
const inputBlur = (event) => {
  if (event.currentTarget.value.length !== 6) {
    inputEl.classList.add("invalid");
  } else inputEl.classList.replace("invalid", "valid");
};

inputEl.addEventListener("blur", inputBlur);
