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
  let nums = userInput[0].split(''),sum=0;
    nums.forEach(num => {
        sum = sum + +num;
    })
    console.log(sum)
  //end-here
});
// userInput[0] = '124';
// inp.close();