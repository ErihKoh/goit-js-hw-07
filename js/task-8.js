const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const btnCreatEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
let quantity = 0;

inputEl.addEventListener("input", onInputValue);
btnCreatEl.addEventListener("click", onBtnCreat);
btnDestroyEl.addEventListener("click", onBtnDestroy);

function onInputValue(evt) {
  quantity = evt.currentTarget.value;
  return quantity;
}

function onBtnCreat() {
  createBoxes(quantity);

  console.log(document);
}

function onBtnDestroy() {
  boxesEl.innerHTML = "";
  console.log(document);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement("div");

    boxesEl.appendChild(boxEl);
    // boxEl.style.width = "30px";
    // boxEl.style.height = "30px";
    // boxEl.style.backgroundColor = "tomato";
    // boxEl.style.marginBottom = "20px";
    boxEl.classList.add("box");
  }

  return boxesEl;
}
