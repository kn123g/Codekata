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
  userInput.forEach(val=>{
     let temp = val.split(' ')
     let print='';
     temp.forEach(val => {
         print = print + val + ' ';
     })
      console.log(print.trim());
  })
  //end-here
});