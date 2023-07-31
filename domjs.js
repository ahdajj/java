


/*
// single element selectors
document.getElementById('my-form');
console.log(document.getElementById('my-form'));
    //or
const form = document.getElementById('my-form');
console.log(form);

document.querySelector('h1')
console.log(document.querySelector('h1')) // this is single element selector if there is more than one h1 it will select the first one

// multiple element selector  
document.querySelectorAll('.item');    // u can use array methods on it
console.log(document.querySelectorAll('.item'));

document.getElementsByClassName('item');   // u cant use array methods on it 
console.log(document.getElementsByClassName('item'));

document.getElementsByTagName('li');
console.log(document.getElementsByTagName('li'));
*/


/*
// make changes to html code
const ul = document.querySelector('.items') ;
ul.remove();
ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'hello';
ul.children[1].textContent ='kkk';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// make changes to css code 
const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/

// event
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click' , function (e){
   e.preventDefault(); // to prevent default behavior (we use with submit button to keep the following changes we will do)
    document.querySelector('#my-form').style.background = 'red';
    document.querySelector('body').classList.add('bg-dark') ; // change class of element
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';
})
*/



//
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myform.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(nameInput.value); // to take the value if we didnt use .value it will show all the input code
    if(nameInput.value ==='' || emailInput.value === ''){
        msg.classList.add('error');  // now msg class is error check the css to see what class error do
        msg.innerHTML = 'please enter all fields';
   
       setTimeout( function() {
        msg.remove();
       }, 2000)

     /*  setTimeout(() => {
        msg.remove()
    }, 3000);*/ 

    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userlist.appendChild(li);
        //clearfields
        nameInput.value='';
        emailInput.value='';
        
    }
})
/*
// another way to write if statment for the previous example
if(!nameInput.value  || !emailInput.value ){
    alert('Enter fields')
}else {
    console.log('success')
}
*/