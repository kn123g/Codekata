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
  let input = userInput[0].split(' ');
    for(let i=0;i<input[1];i++){
        console.log(input[0])
    }

  //end-here
});
// userInput[0] = '2 3';
// inp.close();