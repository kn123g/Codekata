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
    if((n%4 ===0) && (n%100 !== 0)) console.log('Y')
    else if((n%4 ===0) && (n%100 === 0) && (n%400 === 0)) console.log('Y')
    else console.log('N')
  
})
// userInput[0]='2020';
// inp.close();