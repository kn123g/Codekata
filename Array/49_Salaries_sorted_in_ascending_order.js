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
    let arr = userInput[1].split(' ');
    let result = arr.sort((a, b) => a - b).join(' ');
    console.log(result);

    //end-here
});
//Test case 1
// userInput[0] = 8;
// userInput[1] = '7000 8000 6500 1200 4000 2800 3000 5230';
// inp.close();