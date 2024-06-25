
// // login
// const Access = document.querySelector(".access");
// const Data = document.querySelector(".timesheet");
// const formLogin = document.querySelector(".login");
// const registerLink  = document.querySelector(".register");
// const btnForm = document.querySelector(".form-signup");
// const message = document.querySelector(".message");


// let accounts = localStorage.getItem("data") === null ? [] : JSON.parse(localStorage.getItem("data"));

// Access.addEventListener("click", (e) => {
//   e.preventDefault();
//                     message.textContent = "You Are not autorized";
                
//                     formLogin.style.display = "none";
//                     Data.classList.remove("d-none");
    

// // }
            
            

// });


// registerLink.addEventListener("click", (e) => {
//   e.preventDefault();

//   formLogin.classList.add("opacity-0");
// document.querySelector(".form-wrapper").classList.remove("d-none");

// });


// btnForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     register();
//    document.getElementById("title").value= "";
//          document.getElementById("fName").value= "";
//          document.getElementById("lName").value= "";
//         document.getElementById("email").value= "";
// })



// function register() {


//     const users = {
//         title: document.getElementById("title").value,
//         firstName: document.getElementById("fName").value,
//         lastName: document.getElementById("lName").value,
//         email: document.getElementById("email").value
//     }


//     let existAccount= accounts.length && JSON.parse(localStorage.getItem("accounts")).some(data => {
//         return ( data.firstName.toLowerCase() == users.firstName.toLowerCase() && 
//         data.email.toLowerCase() == users.email.toLowerCase());
//     });
//     if(existAccount){
//         alert("User already exist");
//     }else if(!existAccount){
//         accounts.push(users);
//         localStorage.setItem("accounts", JSON.stringify(accounts));
//     }
 
// }



// // function login() {

// //     if(accounts.length && JSON.parse(localStorage.getItem("accounts"))) {
// //         let login = accounts.find(data => {
// //             // return data.email == document.getElementById("login_email").value;
// //           })
// //           if(login){
            
// //           }else{
           
// //           }

// //     }
// // }
   








