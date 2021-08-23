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
    //  using for loop
    let n=userInput[0]
    // ,fact=1;
    // for(let i=1;i<=n;i++){
    //     fact = fact*i;
    // }
    //  using recursive function
    function fact(n){
        if(n === 1) return 1;
        else  return fact(n-1) * n;
    }
  console.log(fact(n));
  //end-here
});





