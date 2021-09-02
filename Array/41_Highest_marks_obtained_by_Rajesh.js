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
    let n = +userInput[0], marks = userInput[1].split(' '), large = +marks[0];
    for (let i = 1; i < n; i++) {
        if (+marks[i] > large) large = +marks[i];
    }
    console.log(large);
    //end-here
});
//Test case 1
// userInput[0] = '3';
// userInput[1] = '82 96 72';
// inp.close();