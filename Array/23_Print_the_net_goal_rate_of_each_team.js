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
    let len = +userInput[0]; let arr = userInput[1].split(' ');
    let sum = (+arr[len - 1]) + (+arr[len - 2]) + (+arr[len - 3]);
    let print = '';
    for (let i = 0; i < len; i++) {
        //   print = print + (+arr[i] - sum) + ' ';
        print = `${print}${(+arr[i]) - sum} `;
    }
    console.log(print.trim());
    //end-here
});
// userInput[0] = '5';
// userInput[1] = '95 85 75 12 11';
// inp.close();