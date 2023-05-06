const increaseButton = document.getElementById("increase");

const decreaseButton = document.querySelector("#decrease");
const counterValue = document.querySelector("#counter");
let value = 0;
const increaseValue = () => {
  value = value + 1;
  counterValue.innerText = value;
};

const decreaseValue = () => {
  value = value - 1;
  counterValue.innerText = value;
};

increaseButton.addEventListener("click", increaseValue);
decreaseButton.addEventListener("click", decreaseValue);
