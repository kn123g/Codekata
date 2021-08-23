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
    let n = userInput[0].split(' ');
    let x1 = (( -n[1] ) + (Math.sqrt((n[1]*n[1]) - (4* n[0] * n[2])))) / (2 * n[0]);
    
    let x2 = (( -n[1] ) - (Math.sqrt((n[1]*n[1]) - (4* n[0] * n[2])))) / (2 * n[0]);

    console.log(x1.toFixed(2))
    console.log(x2.toFixed(2))
  //end-here
});
// userInput[0] = '1 5 6';
// inp.close();