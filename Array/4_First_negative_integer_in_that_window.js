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
    let winSize = +userInput[2];
    let print = '';
    for (let i = 0; i < arr.length - (winSize - 1); i++) {
        let windowfirstSmall = arr.slice(i, i + winSize).sort()[0]
        if (windowfirstSmall < 0) {
            print = print + windowfirstSmall + ' ';
        }
        else {
            print = print + 0 + ' ';
        }
    }
    console.log(print.trim())
    //end-here
});
// userInput[0] = '7';
// userInput[1] = '1 -2 -3 -4 5 6 -7';
// userInput[2] = '3';
// inp.close();