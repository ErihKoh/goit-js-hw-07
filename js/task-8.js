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
}

function onBtnDestroy() {
  boxesEl.innerHTML = "";
  document.querySelector("input").value = "";
}

function createBoxes(amount) {
  const width = 30;
  const higth = 30;
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement("div");

    boxesEl.appendChild(boxEl);
    boxEl.style.width = `${width + i * 10}px`;
    boxEl.style.height = `${higth + i * 10}px`;
    boxEl.style.backgroundColor = randomCollor();
    boxEl.style.marginBottom = "20px";
    boxEl.style.marginTop = "20px";
    // boxEl.classList.add("box");
  }

  return boxesEl;
}

function randomCollor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
