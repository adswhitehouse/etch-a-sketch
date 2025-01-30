const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

let divs = container.children;
let divsArray = Array.from(divs);

for (let i = 0; i < divsArray.length; i++) {
  divsArray[i].addEventListener("mouseover", function () {
    divsArray[i].style.backgroundColor = `rgb(${randomInteger(
      255
    )}, ${randomInteger(255)}, ${randomInteger(255)})`;
  });
}
