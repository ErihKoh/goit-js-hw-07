const itemEl = document.querySelectorAll(".item");
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach((element) =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.childNodes[3].children.length}`
  )
);
