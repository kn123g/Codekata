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
    let n = +userInput[0];
    let arr = userInput[1].split(' ').map(element => +element)
    console.log(Math.min(...arr));

    //end-here
});
//Testcase1
// userInput[0]='5'
// userInput[1]='3 4 9 1 6'
// inp.close()