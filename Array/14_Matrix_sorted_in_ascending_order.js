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
    let row = +userInput[0].split(' ')[0];
    let col = +userInput[0].split(' ')[1];
    let arr = [];
    for (let i = 1; i < userInput.length; i++) {
        arr.push(...userInput[i].split(' '));
    }
    arr.sort((a, b) => a - b);
    let twoArr = [];
    for (let i = 0; i < (+row * +col); i = i + col) {
        twoArr[i] = arr.slice(i, col + i);
        console.log(twoArr[i].join(' '))
    }
});
// userInput[0] = '3 3';
// userInput[1] = '87 21 34';
// userInput[2] = '89 32 78';
// userInput[3] = '12 23 45';
// inp.close();