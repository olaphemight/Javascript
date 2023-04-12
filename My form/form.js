const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closes = document.querySelector('.close');




button.addEventListener('click', () => {
    popup.style.display = 'block';
});

closes.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})


//login form
const form = document.querySelector('.signup-form');
const userPattern = /^[a-zA-Z]{8,}$/;
const passPattern = /^[a-zA-Z]{8,}$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
username = form.username.value;
password = form.password.value;

    
    if(userPattern.test(username) && passPattern.test(password)){
        console.log('successful');
    }
    else{
        console.log('not valid');
    }


});


const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = ` 
    <span>${h}:</span>
    <span>${m}:</span>
    <span>${s}</span> `;

    clock.innerHTML = html;
    
}

setInterval(tick, 1000);

  //Todo Form
const addForm= document.querySelector('.add');
const list = document.querySelector('.todo');




const generateTemplate = (todo) => {
    const html = `
    <li><span>${todo}</span> 
    <a class="Delete">Delete</a></li> `

    list.innerHTML += html;
}


    //add Form 
addForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }

});

// Delete form

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('Delete')) {
      e.target.parentElement.remove();
    };
});


//Search todos
/*
const search = document.querySelector('.search input');
const filterTodo = (term) => {
     Array.from(list.children)
     .filter((todo) =>!todo.textContent.includes(term))
     .forEach((todo) =>todo.classList.add('filtered'));

     Array.from(list.children)
     .filter((todo) =>todo.textContent.includes(term));
     .forEach((todo) => todo.classList.remove('filtered'));


search.addEventListener('keyup', () => {
    const term = search.value.trim();
    
    filterTodo(term);
});
*/

const search = document.querySelector('.search input');
const filteredTodo = (term) => {
    //console.log(list.children);
   Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));


    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};





search.addEventListener('keyup', () => {
    const term = search.value.trim();

    filteredTodo(term);
});
