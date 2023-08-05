// Exercise 1
/*
let arr = [1,2,3,4,5,6,7,8,9];
function Range (x,y,z){
    let RA = []
    for(let i = 0 ; i<x.length ; i++){
        if (y<x[i] && x[i]<z){
            RA.push(x[i])
            console.log(RA)
        }
    }
    return RA;
};
console.log(Range(arr,3,11));
*/


// Exercise 2
/*
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ];

let names = users.map(c => c.name)
console.log(names)
*/


// Exercise 3
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    let sum = users.map(c => c.age );
     return sum.reduce( (av, x) => av+=x )/sum.length
}
console.log(getAverageAge(arr))


