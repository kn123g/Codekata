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
    let n = userInput[0],print ='';
    for(let i=1; i<=n; i++){
        print = print + (9 * i) + ' ';
    }    
        console.log(print.trim())
  //end-here
});
// userInput[0] = '3';
// inp.close();