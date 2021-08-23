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
    let print = '';
  userInput[0].split('').forEach(char => {
      print = print + char + ','
  });
  print = print.substring(0,print.length-1);
    console.log(print);
  //end-here
});








