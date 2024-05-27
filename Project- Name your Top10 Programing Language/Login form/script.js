const nav = document.querySelector(".top-nav");
const li = document.querySelectorAll(".pro");
const signUp = document.querySelector("#sign");
let firstName = document.getElementById("firstName");

document.querySelector(".container").style.display = "none";

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLI = document.createElement("li");
  newLI.setAttribute("class", "pro");

  newLI.innerText = form.field.value;
  nav.append(newLI);
  form.field.value = "";

  console.log(newLI.innerText);
});

// nav.lists.forEach((list, e) => {
// console.log(list)
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }

  console.log(e.target.innerText);
});

// LOGING CODE
let firstPattern = /^.{6,}$/;
let userPattern = /^[a-zA-Z]{6,10}$/;
let passPattern = /^.{6,}$/;

signUp.addEventListener("submit", (e) => {
  e.preventDefault();

  let userResult = userPattern.test(signUp.username.value);
  let userPassword = passPattern.test(signUp.password.value);
  // let firstName = firstPattern.test(firstName.value);

  // alert(`Welcome! ${firstName.value}`);

  if (userResult && userPassword) {
    console.log("LoggedIn");
    document.querySelector(".sign-up").style.display = "none";
    document.querySelector(".container").style.display = "block";
    // document.querySelector(".container").style.display = "block";

    console.log(firstName.value);
    console.log(username.value);
    console.log(password.value);

    alert(`Welcome! ${firstName.value}`);
    // console.log(firstName);
  } else {
    console.log("Incorrect username or password");
  }
});
