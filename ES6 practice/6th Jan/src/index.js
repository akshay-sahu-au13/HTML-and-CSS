// console.log("It works!")

import * as calc from './functions.js' ;

let a;
let b;

console.log(`
Test case 1:
`);

a = 9;
b = 2;

console.log(`Addition:       ${a} + ${b} = ${calc.add(a,b)}`);
console.log(`Substraction:   ${a} - ${b} = ${calc.sub(a,b)}`);
console.log(`Multiplication: ${a} X ${b} = ${calc.mul(a,b)}`);

// Test case 2
console.log(`
Test case 2:
`);
a = 5;
b = 3;

console.log(`Addition:       ${a} + ${b} = ${calc.add(a,b)}`);
console.log(`Substraction:   ${a} - ${b} = ${calc.sub(a,b)}`);
console.log(`Multiplication: ${a} X ${b} = ${calc.mul(a,b)}`);