var character = 'carlos';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// -----------------------------------------------  #3 - Type Basics
var karacter = 'james';
var age = 30;
var isBlackBelt = false;
// karacter = 20;
karacter = 'naomi';
// age = 'james';
age = 40;
// isBlackBelt = 50;
isBlackBelt = true;
// ------------
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(9));
var sauceTomate = function (eau) {
    return 2 * eau;
};
console.log(sauceTomate(7));
// -----------------------------------------------  #4 - Objects & Arrays
// Arrays
var names = ['james', 'mario', 'blanca'];
names.push('israel');
console.log(names);
// names.push(3);
// names[0] = 3;
var numbers = [12, 34, 56];
numbers.push(43);
// numbers.push('mario');
// numbers[1] = 'shaun';
console.log(numbers);
var mixed = [23, "boul", 56, 'gal'];
mixed.push('allower');
mixed.push(5);
mixed[1] = 'goal';
console.log(mixed);
// Objects
var keys = {
    name: 'Severus',
    belt: 'Black',
    age: 46
};
keys.name = 'Hallow';
keys.age = 30;
// keys.age = '30'
// keys.skills = ['fighting', 'sneaking']
keys = {
    name: 'Aomi',
    belt: 'Blue',
    age: 89
};
console.log(keys);
// -----------------------------------------------  #5 - Explicit Types
//------- explicit types
var caracter;
var ages;
var isLoggedIn;
ages = 78;
// ages = 'marc'
caracter = 'strong';
// caracter = 54
// isLoggedIn = 67
isLoggedIn = false;
//-------- arrays
var key = [];
// key = [12, 23]
key = ["blanc", "blue", '45'];
console.log(key);
key.push('Manioc', 'Noir');
// -------union types
var mixen = [];
mixen.push('hello', 45, true);
console.log(mixen);
var id;
id = '89';
id = 123;
//--------- objects
var keyOne;
keyOne = {
    name: "Severus",
    age: 5
};
console.log(keyOne);
// Or
var keyTwo;
keyTwo = {
    name: "Kanan",
    age: 56,
    beltColor: 'Black',
    isColored: true
};
console.log(keyTwo);
// -----------------------------------------------  #6 - Dynamic(any) types
var Age = 25;
Age = true;
console.log(Age);
Age = { name: 'mario' };
console.log(Age);
var Mixed = [];
Mixed.push('mario', 45, true);
console.log(Mixed);
var ninja;
ninja = { name: 'Severus', age: 3 };
console.log(ninja);
ninja = { name: 23, age: 'fourty nine' };
console.log(ninja);
// -----------------------------------------------  #7 - Better Workflow & tsconfig
