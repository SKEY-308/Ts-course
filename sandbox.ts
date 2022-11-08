const character = 'carlos';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});  






// -----------------------------------------------  #3 - Type Basics

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


const sauceTomate = (eau: number) => {
   return 2*eau
}
console.log(sauceTomate(7))






// -----------------------------------------------  #4 - Objects & Arrays

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



  

// -----------------------------------------------  #5 - Explicit Types

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
let key: string[] = []
// key = [12, 23]
key = ["blanc", "blue", '45']
console.log(key)
key.push('Manioc', 'Noir')

// -------union types
let mixen: (string|number|boolean)[] = []
mixen.push('hello', 45, true)
console.log(mixen)

let id: string|number
id = '89'
id = 123

//--------- objects
let keyOne: object;
keyOne = {
   name: "Severus", 
   age: 5
}
console.log(keyOne)

// Or
let keyTwo: {
   name: string
   age: number
   beltColor: string
   isColored: boolean
} 
keyTwo = {
   name: "Kanan",
   age: 56,
   beltColor: 'Black',
   isColored: true
}
console.log(keyTwo)



// -----------------------------------------------  #6 - Dynamic(any) types

let Age: any = 25
Age = true;
console.log(Age)
Age = {name: 'mario'}
console.log(Age)

let Mixed: any[] = []
Mixed.push('mario', 45, true)
console.log(Mixed)

let ninja: {name: any, age: any}

ninja = {name: 'Severus', age: 3}
console.log(ninja)

ninja = {name: 23, age: 'fourty nine'}
console.log(ninja)


// -----------------------------------------------  #7 - Better Workflow & tsconfig
