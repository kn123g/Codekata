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
    let len = +userInput[0], arr = userInput[1].split(' ');
    let sum = arr.reduce((a, b) => (+a) + (+b), 0);
    let beautiful = false;
    if ((sum % 2 === 0) && (sum % 3 === 0) && (sum % 5 === 0)) beautiful = true;
    console.log(beautiful ? 1 : 0);

    //end-here
});
// userInput[0] = '5';
// userInput[1] = '5 25 35 -5 30';
// inp.close();