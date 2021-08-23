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
    let n = +userInput[0], arr = userInput[1].split(' ');
    let great = arr[0], small = arr[0], greatIndex = 0, smallIndex = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > great) { great = +arr[i]; greatIndex = i; }
        if (arr[i] < small) { small = +arr[i]; smallIndex = i; }
    }

    console.log(greatIndex - smallIndex)
    //end-here
});
// userInput[0] = '5';
// userInput[1] = '1 6 4 0 3';
// inp.close();