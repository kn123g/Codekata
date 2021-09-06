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
    let arr = userInput[1].split(' ').sort((a, b) => +a - +b);
    console.log(arr[n - 2])
    //end-here
});
//Testcase
// userInput[0] = '6';
// userInput[1] = '75 76 34 98 65 67';
// inp.close();