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
    let startingIndex = 2, print = [];
    for (i = 0; i < +userInput[0]; i++) {
        print.push(...(userInput[startingIndex].split(' ').sort((a, b) => a - b)))
        startingIndex = startingIndex + 2;
    }
    console.log(print.join(' '))
    //end-here
});
// userInput[0] = '3';
// userInput[1] = '2';
// userInput[2] = '98 12';
// userInput[3] = '6';
// userInput[4] = '1 2 3 8 5 9';
// userInput[5] = '1';
// userInput[6] = '11';
// inp.close();