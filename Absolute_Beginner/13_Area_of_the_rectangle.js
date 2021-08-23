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
  //Your code goes here … replace the below line with your code logic 
    let a = userInput[0],b = userInput[1];
    console.log(a*b);
  //end-here
});
// userInput[0] = '2';
// userInput[1] = '3';
// inp.close();