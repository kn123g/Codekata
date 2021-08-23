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
    let n =userInput[0];
    if(n<0){
        console.log('Error');
    }
    else{
        console.log((2*(Math.PI)*n).toFixed(2))
    }
  //end-here
});







