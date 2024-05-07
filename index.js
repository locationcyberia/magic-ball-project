console.log("Feeling indescisive? Give me a shake!");

const firstName = "Jane";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;

let question = "What number did I roll?!"

console.log(`Hello, my name is ${fullName} and my question is:\n${question.toUpperCase()}`);


const randomNum = Math.round(Math.random() * 8) + 1;
 
console.log(`The answer to your question is ${randomNum}.\nThis number is ${randomNum % 2 === 0? 'Even' : 'Odd'}.`);