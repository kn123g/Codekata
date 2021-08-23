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
  let n = userInput[0],sum = 0;
  for (i=1;i<=n;i++){
      sum = sum + i;
  }
  console.log(sum)
  //end-here
});

// userInput[0] = '10';
// inp.close();