const form = document.querySelector("#quiz");
const refresh = document.querySelector("button");
let result = document.querySelector(".result");

let correctAnswers = ["A", "A", "B", "C", "C", "A", "A", "B", "D", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];
  //   console.log(form.q1.value);
  console.log(userAnswers);
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    }
  });
  console.log(score);

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `you score ${score} / 10`;
  console.log(result.textContent);
});

refresh.addEventListener("click", () => {
  location.reload();
});
