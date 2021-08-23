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
    for(let i=2 ; i<=userInput[0];i=i+2)
    {
        console.log(i)
    }
  //end-here
});
// userInput[0] = '7';
// inp.close();