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
    let arr = userInput[1].split(' ')
    let sum = arr.reduce((a, b) => {
        if ((+b) < 0) return +a + +b
        else return a;
    }, 0)
    //end-here
    console.log(sum)
    //end-here
});
userInput[0] = '2';
userInput[1] = '3 0';
inp.close();