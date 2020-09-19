const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const addTextItemEl = (items) => {
  return items.map((item) => {
    const textItemEl = document.createElement("li");

    textItemEl.textContent = item;

    return textItemEl;
  });
};

const elements = addTextItemEl(ingredients);
console.log(elements);

ingredientsListEl.append(...elements);
