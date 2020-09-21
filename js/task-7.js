// `${значение}px`

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeSizeText = (events) => {
  let size = events.currentTarget.value;
  return (textEl.style.fontSize = `${size}px`);
};

inputEl.addEventListener("input", changeSizeText);
