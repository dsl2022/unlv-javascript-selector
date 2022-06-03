const colors = ["blue", "purple", "orange"];
const body = document.querySelector("body");
const red = document.querySelector(".red");
const changeColorButton = document.querySelector(".change-color");
let isChanged = false;

red.addEventListener("click", () => {
  if (isChanged) {
    red.style.color = "red";
  } else {
    red.style.color = "yellow";
  }
  isChanged = !isChanged;
});

let isLightOut = false;

const dragon = document.querySelector("#dragon");
const changeSizeButton = document.querySelector(".change-size");

changeColorButton.addEventListener("click", () => {
  isLightOut = !isLightOut;
  if (isLightOut) {
    body.style.background = "black";
    changeColorButton.textContent = "Light on";
  } else {
    body.style.background = "white";
    changeColorButton.textContent = "Light Out";
  }
});

changeSizeButton.addEventListener("click", () => {
  dragon.style.width = "50px";
  dragon.style.height = "50px";
});

const addDragon = document.querySelector(".add-dragon");
const imageContainer = document.querySelector(".image-container");
addDragon.addEventListener("click", () => {
  const src = "https://m.media-amazon.com/images/I/51eGV4guQnL._AC_SX679_.jpg";
  const newImg = document.createElement("img");
  newImg.setAttribute("src", src);
  imageContainer.append(newImg);
});

const removeDragon = document.querySelector(".remove-dragon");

removeDragon.addEventListener("click", () => {
  imageContainer.remove();
});

// const yellow = document.querySelector(".yellow");
// const green = document.querySelector(".green");

// const h1 = document.querySelectorAll("h1");
// console.log(h1);

// yellow.style.color = "yellow";
// green.style.color = "green";

// for (let i = 0; i < h1.length; i++) {
//   h1[i].style.background = colors[i];
// }

// h1.style.background = "purple";
