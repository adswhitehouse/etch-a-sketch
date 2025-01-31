const container = document.querySelector(".container");

const containerHeight = 640;
const containerWidth = 640;

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

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let choice = parseInt(
    prompt("Please input a new grid size between 4 and 100."),
    "0"
  );
  let newDivWidth = containerWidth / choice;
  let newDivHeight = containerHeight / choice;
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  if (choice > 1 && choice < 101) {
    for (let i = 1; i <= choice * choice; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("newSquare");
      newDiv.style.width = `${newDivWidth}px`;
      newDiv.style.height = `${newDivHeight}px`;
      container.appendChild(newDiv);
    }
  } else {
    return;
  }
});
