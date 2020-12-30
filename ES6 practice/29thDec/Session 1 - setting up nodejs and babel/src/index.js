
console.log("Hello there! It is working fine now.");

console.log("Let's begin today's assignment and start with destructuring...");

console.log(`"Destructuring can happen only in arrays and objects:"
DESTRUCTURING IN OBJECTS- `);

//Exmaple 1

let person = {name:"Akshay", age:28, gender:"Male",height:"175cm"};
console.log("Person = ", person)
const {name, age, height} = person;

console.log(`
Name => ${name} 
Age => ${age}
Height => ${height}
`);

// Example 2 - If the variables have same name, then we can use : to give it a pseudo name

let person1 = {name:"Ravish", age:35, gender:"Male",height:"170cm"};
console.log("Person1 = ", person1);
const {name:name1,age:age1, gender} = person1;
console.log(`
Name of person1 => ${name1}
Age of person1 => ${age1}
Gender of person1 => ${gender} 
`);

// Example 3 - Rest operator

let person2 = {name:"Kiran", age:30, gender:"Female",height:"150cm", nationality:"Indian"};
console.log("Person2 = ", person2);
const {name:name2, gender:gender2, ...rest} = person2;
console.log(`
Name of person2 => ${name2}
Gender of person2 => ${gender2}
remaining items of person2 => 
`,rest);

// Destructuring in Arrays:

console.log(`
DESTRUCTURING IN ARRAYS- `);

const nums = [1,2,3,4,5,6,7,8,9];
console.log(`
Nums = ${nums}`);
const [a1,a2,a3,a4,a5,a6,a7,a8,a9] = nums;
console.log(`
The first THREE numbers are: ${a1}, ${a2}, ${a3},
The last TWO numbers are: ${a8} & ${a9} `)

const nums2 = [1,2,3,4,5,6,7,8,9,10];
console.log(`
Nums2 = ${nums2}`);
const [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10] = nums2;
console.log(`
Even numbers in Nums2 are: ${l2}, ${l4}, ${l6}, ${l8}, ${l10} 
Odd number in Nums2 are: ${l1}, ${l3}, ${l5}, ${l7}, ${l9}`)

const numbers = [1,2,3,4,6,7,8,9];
console.log(`
Numbers = ${numbers}`);
const [n1,n2,n3, ...remaining] = numbers;
console.log(`
The first three numbers are: ${n1}, ${n2}, ${n3},
rest of the numbers are: ${remaining} `)
