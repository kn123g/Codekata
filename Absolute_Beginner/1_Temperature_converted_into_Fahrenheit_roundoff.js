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
  let celcius = userInput[0]
//   let fahrenheit = (((+celcius * 9/5) + 32 ) * 100 )/100;
  let fahrenheit = ((+celcius * 9/5) + 32 );
  console.log(fahrenheit.toFixed(2))
  //end-here
});