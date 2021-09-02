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
    let initial = 1000,first=initial + 1000;
        for(let i=1;i<userInput[0]; i++){
        total = initial + first + 1000;
        initial=first;
        first=total;
    }
    console.log(first)
    
  //end-here
});
//Test case 1
// userInput[0] = '3';
// inp.close();


