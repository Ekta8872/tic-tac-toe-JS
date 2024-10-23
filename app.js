let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".winnerPara");

let turn0 = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked");
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const resetGame = () => {
  turn0 = true;
  enabledBox();
};
const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};
const showWinner = (winner) => {
  msg.innerHTML = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBox();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    console.log(pattern);
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
};
