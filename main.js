const showModalBtn = document.querySelector("#showModal");
const modalWrapper = document.querySelector("#modalWrapper");

showModalBtn.addEventListener("click", () => {
  modalWrapper.style.display = "block";
  document.body.style.backgroundColor = "black";
});

const changeColorBtn = document.querySelector("#changeColorButton");

changeColorBtn.addEventListener("click", () => {
  const color = document.querySelector("#colorInput").value;
  const availableColors = ["red", "blue", "green", "black", "white"];

  if (availableColors.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert(
      `This color is not available please select the available colors ${availableColors.join(
        " , "
      )}`
    );
  }
  const emptyColor = document.querySelector("#colorInput");
  emptyColor.value = "";
});

const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", () => {
  let input = document.querySelector("#numbersInput").value;
  let numbers = input.split(":").map(Number);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  let resultAverage = document.querySelector("#resultNumber");
  resultAverage.innerHTML = `The Result Average of Numbers is ${average}`;
  const emptyNumber = document.querySelector("#numbersInput");
  emptyNumber.value = "";
});
