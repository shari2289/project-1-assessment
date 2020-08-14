let currentNum = 0;
let numbersSpan;
let inputNum;
let addBtn;
let subBtn;

document.addEventListener("DOMContentLoaded", function () {
  numbersSpan = document.getElementById("numbers");
  addBtn = document.getElementById("addition");
  subBtn = document.getElementById("subtraction");
  inputNum = document.getElementsByTagName("input")[0];

  addBtn.addEventListener("click", () => {
    addNum(getInput());
  });
  subBtn.addEventListener("click", () => {
    subtractNum(getInput());
  });
});

function getInput() {
  return parseInt(inputNum.value);
}

function addNum(input) {
  currentNum = currentNum + input;
  updateNum();
}

function subtractNum(input) {
  currentNum = currentNum - input;
  updateNum();
}

function updateNum() {
  numbersSpan.textContent = `${currentNum}`;
  if (currentNum < 0) {
    numbersSpan.style.color = "red";
  } else {
    numbersSpan.style.color = "black";
  }
}
