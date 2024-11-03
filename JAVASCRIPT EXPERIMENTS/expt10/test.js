const prompt = require("prompt-sync")();

const num = prompt("Enter a number to print its multiplication table: ");

//for loop implementation
console.log(`\nMultiplication Table of ${num} using For Loop:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

//while loop implementation
console.log(`\nMultiplication Table of ${num} using While Loop:`);
let j = 1;
while (j <= 10) {
  console.log(`${num} x ${j} = ${num * j}`);
  j++;
}

//do-while loop implementation
console.log(`\nMultiplication Table of ${num} using Do-While Loop:`);
let k = 1;
do {
  console.log(`${num} x ${k} = ${num * k}`);
  k++;
} while (k <= 10);
