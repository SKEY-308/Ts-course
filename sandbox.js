var character = 'carlos';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// -----------------------------------------------  Type Basics
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
// -----------------------------------------------  Objects & Arrays
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
// -----------------------------------------------  Explicit Types
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
// -------union types
//--------- objects
