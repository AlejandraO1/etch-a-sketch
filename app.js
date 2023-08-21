//Global Variables
let containerDiv = document.querySelector("#grid-container");
let userValue = document.querySelector("#user-number");
let userSubmit = document.querySelector("#user-submit");
let promptText = document.querySelector("#prompt");
let copyInput = document.querySelector("#copy-input");
let clearButton = document.querySelector("#clear-button");

//Shows user that this is a square grid when they input a number
function duplicateGrid() {
  let userGrid = userValue.value;
  copyInput.textContent = "x " + userGrid;
}

//Appears when user wants to change the grid size
function entryHint() {
  promptText.textContent = "Enter a number between 2 and 99.";
}

//Default grid of 10 x 10
function makeGrid() {
  let number = userValue.value;
  if (number < 0 || number > 99 || isNaN(number)) {
    promptText.textContent = "Make sure it's a number from 2 to 99!";
  } else {
    promptText.textContent = "";
    copyInput.textContent = "";
    userValue.value = "";
    containerDiv.innerHTML = "";
    if (number == 0 || number > 99 || number == "") {
      createGrid(10, 10);
    } else {
      createGrid(number, number);
    }
  }
}

//New grid created based on user's input
function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    containerDiv.appendChild(row);
    for (let k = 0; k < columns; k++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
  draw();
}

//Adds an event listener to columns to allow drawing on grid
function draw() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColor);
  }
}

//Changes drawing color depending on which option is active
function changeColor() {
  let blackRadio = document.getElementById("black-pen");
  let redRadio = document.getElementById("red-pen");
  let blueRadio = document.getElementById("blue-pen");
  let rainbow = document.getElementById("rainbow");
  let eraserRadio = document.getElementById("eraser");

  if (blackRadio.checked) {
    this.style.backgroundColor = "#000";
  } else if (redRadio.checked) {
    this.style.backgroundColor = "#D22B2B";
  } else if (blueRadio.checked) {
    this.style.backgroundColor = "#0047AB";
  } else if (eraserRadio.checked) {
    this.style.backgroundColor = "";
  } else if (rainbow.checked) {
    let randomColorR = Math.floor(Math.random() * 256);
    let randomColorG = Math.floor(Math.random() * 256);
    let randomColorB = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${randomColorR},${randomColorG}, ${randomColorB})`;
  }
}

//Allows erasure of the grid by setting columns to ""
function clearGrid() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.backgroundColor = "";
  }
}

//Event Listeners
userValue.addEventListener("focus", entryHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", makeGrid);
clearButton.addEventListener("click", clearGrid);

//Default call function
makeGrid();
draw();
