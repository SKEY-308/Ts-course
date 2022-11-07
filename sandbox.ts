const character = 'carlos';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});  






// -----------------------------------------------  Type Basics

let karacter = 'james';
let age = 30;
let isBlackBelt = false;

// karacter = 20;
karacter = 'naomi';

// age = 'james';
age = 40;

// isBlackBelt = 50;
isBlackBelt = true;

// ------------
const circ = (diameter: number) => {
   return diameter * Math.PI
}

console.log(circ(9));







// -----------------------------------------------  Objects & Arrays

// Arrays
let names = ['james', 'mario', 'blanca'];

names.push('israel')
console.log(names)

// names.push(3);
// names[0] = 3;

let numbers = [12, 34, 56];
numbers.push(43)
// numbers.push('mario');
// numbers[1] = 'shaun';

console.log(numbers)

let mixed = [23, "boul", 56, 'gal'];
mixed.push('allower')
mixed.push(5)
mixed[1] = 'goal'
console.log(mixed)

// Objects
let keys = {
   name: 'Severus',
   belt: 'Black',
   age: 46
}

keys.name = 'Hallow';
keys.age = 30;
// keys.age = '30'
// keys.skills = ['fighting', 'sneaking']

keys = {
 name : 'Aomi',
 belt : 'Blue',
 age: 89
}
console.log(keys)



  

// -----------------------------------------------  Explicit Types

//------- explicit types
let caracter: string
let ages: number
let isLoggedIn: boolean

ages= 78
// ages = 'marc'
caracter = 'strong'
// caracter = 54
// isLoggedIn = 67
isLoggedIn = false


//-------- arrays


// -------union types


//--------- objects