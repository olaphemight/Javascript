const users = [
  {
    name: "Johnson Schmedan",
    email: "jschemdan@gmail.com",
    password: "",
    age: 25,
    gender: "male",
    grades: [50, 30, 27, 17, 85],
  },
  {
    name: "Steve orji",
    email: "steveorji@gmail.com",
    password: "",
    age: 18,
    grades: [65, 28, 60, 20, 85],
  },
  {
    name: "Ola Smart",
    email: "smartola255@gmail.com",
    password: "",
    age: 18,
    grades: [65, 28, 60, 20, 85],
  },
];

function Login() {
  userPattern = /^[a-zA-Z]$/;
  passPattern = /^.{6,}$/;

  userResult = userPattern.test(user.name);
  userPassword = passPatter.test(user.email);
  if (userResult && userPassword) {
    console.log("LoggedIn");
  } else {
    console.log("Incorrec username or password");
  }
}

//Destructive Array

// const [user1, user2, k] = users;
// console.log(i, j, k);

// console.log("user", Login);
