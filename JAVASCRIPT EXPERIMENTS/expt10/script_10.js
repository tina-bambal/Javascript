// Get the command-line arguments
const args = process.argv;

// The third argument (index 2) will be the number provided by the user
const num = parseInt(args[2]);

if (isNaN(num)) {
  console.log("Please provide a valid number as an argument.");
  process.exit(1); // Exit if the argument is not a number
}

// For loop implementation
console.log(`\nMultiplication Table of ${num} using For Loop:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// While loop implementation
console.log(`\nMultiplication Table of ${num} using While Loop:`);
let j = 1;
while (j <= 10) {
  console.log(`${num} x ${j} = ${num * j}`);
  j++;
}

// Do-while loop implementation
console.log(`\nMultiplication Table of ${num} using Do-While Loop:`);
let k = 1;
do {
  console.log(`${num} x ${k} = ${num * k}`);
  k++;
} while (k <= 10);
