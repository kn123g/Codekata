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
    let n = +userInput[0];
    let print = `${n} ${n*2} ${n*3}`
    console.log(print)
  //end-here
});
// userInput[0] = '2';
// inp.close();