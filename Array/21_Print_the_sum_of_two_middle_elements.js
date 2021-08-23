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
    let arr = [...userInput[1].split(' '), ...userInput[2].split(' ')]; let len = +userInput[0];
    arr = arr.sort((a, b) => a - b);
    console.log(+arr[len - 1] + +arr[len])

    //end-here
});
// userInput[0] = '5';
// userInput[1] = '1 9 16 25 46';
// userInput[2] = '2 3 4 5 6';
// inp.close();