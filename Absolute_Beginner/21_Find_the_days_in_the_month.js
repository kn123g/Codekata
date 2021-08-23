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
  // 1 - 31 // 2 - 28 // 3 - 31 // 4- 30 // 5- 31 // 6- 30 // 7-31 
  //8-31 // 9-30 // 10 -31 // 11 -30 // 12 -31
  let n = userInput[0];
    if(n== 1 || n==3 || n== 5 || n==7 || n==8 || n== 10 || n==12) console.log(31)
    else if (n==4 || n==6 || n==9 || n==11) console.log(30)
    else if(n==2) console.log(28)
    else console.log('Error')
  //end-here
});

// userInput[0] = '8';
// inp.close();