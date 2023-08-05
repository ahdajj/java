
// Exercise 1
/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  };
console.log(checkAge(20));
// the arrow function 
const CheckAge = age => age>18 ? true : ('Do you have your parents permission to access this page?') ;
console.log(CheckAge(20));
*/ 


// Exercise 2
/*
const pow = (x,n) => {
    let m = x ;
    for ( let i = 1 ; i<n ; i ++){
        x=m*x;
        
    }
    return x ;
}
console.log(pow(2,10))
*/


// Exercise 3 
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)
// arrow function 
const ask =  (question, yes, no) => (confirm(question)) ? yes() : no() ;
*/

// Exercise 4 
let calculator = {
      num1:5 ,
      num2: 15,
      read (x,y) {
        return  calculator.num1 = x , calculator.num2 = y;
      }
};
console.log(calculator);
//var read = (x,y) =>  {calculator.num1 = x };
//read(1,2);
let m =  calculator.read(5,7);
console.log(calculator.read(5,7));

 

// Exercise 5 
/*
const min = (a,b) => (a<b) ? a : b ;
console.log(min(28,4));
*/
