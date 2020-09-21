let counterValue = 0;
const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector("#value");

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  decrement();
  valueEl.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  increment();
  valueEl.textContent = counterValue;
});
