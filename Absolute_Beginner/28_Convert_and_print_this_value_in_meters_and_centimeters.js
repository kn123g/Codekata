// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace t
  console.log(+(userInput[0]) * 1000)
  console.log(+(userInput[0]) * 100000)
  //end-here
});
// userInput[0] = '2';
// inp.close();