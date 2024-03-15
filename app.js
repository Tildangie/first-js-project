let numbers=[1,2,3,4,5]
numbers.splice(1,0, "number", "new")
console.log(numbers)

let first= 2;
let second= 5;
function compvalue(){
    return first > second ? console.log("2 is greater") : console.log("5 is greater"); 
}
 compvalue()

let input =document.querySelector('#input');
let button= document.querySelector('#btn');


let num1 = 10
let num2 = 20
let num3 = 50

function addvalues(){console.log(num1 + num2 + num3)

}
addvalues()