console.log("Feeling indescisive? Give me a shake!");

const firstName = "Jane";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;

let question = "What number did I roll?!"
// prints prompt to console and following question as uppercase
console.log(`Hello, my name is ${fullName} and my question is:\n${question.toUpperCase()}`);

// randomly chooses a number from 1 to 8 and rounds to the nearest whole integer
const randomNum = Math.round(Math.random() * 8) + 1;
// prints randomNum to console and returns either odd or even 
console.log(`The answer to your question is ${randomNum}.\nThis number is ${randomNum % 2 === 0? 'even' : 'odd'}.`);