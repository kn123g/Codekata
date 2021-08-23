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
    let charArr = userInput[0].split('');
    let print ='';
    for(let i=0;i<charArr.length;i++){
        print = print + charArr[i] + ' ';
    }
    console.log(print.trim())

  //end-here
});





