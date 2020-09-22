const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesListEl = document.querySelector("#gallery");

const addImagesToGallery = (items) => {
  return items.map((item) => {
    imagesListEl.insertAdjacentHTML("afterbegin", "<li><img></li>");
    const imageItemEl = document.querySelector("li");
    const imageEl = document.querySelector("img");
    imageItemEl.classList.add("list");
    // const imageEl = document.createElement("img");
    imageEl.src = item.url;
    imageEl.alt = item.alt;
    imageEl.classList.add("img");
    // imageItemEl.appendChild(imageEl);
    return imageItemEl;
  });
};

const elements = addImagesToGallery(images);
console.log(elements);

imagesListEl.append(...elements);
console.log(document);
