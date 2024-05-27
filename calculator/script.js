let screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equ");
const clear = document.querySelector(".btn-clear");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let calc = e.target.value;
    screen.value += calc;
    console.log(calc);
  });
});

equal.addEventListener("click", (e) => {
  if (!screen.value) {
    screen.value = "";
    console.log("no equation");
  } else {
    screen.value = eval(screen.value);
    console.log(screen.value);
  }
});

clear.addEventListener("click", (e) => {
  screen.value = "";
});
