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
    let n = userInput[0];
    if(n == 0) console.log('Zero')
    else if(n-Math.floor(n) === 0) {
        n = Math.round(n)
        if(n%2 === 0) console.log('Even')
        else console.log('Odd')
    }
  //end-here
});