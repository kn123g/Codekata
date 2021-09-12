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
    let arr = userInput[1].split(' ');
    let print = '';
    for (let i = 0; i < n - 1; i++) {
        print = print + (arr[i] > arr[i + 1] ? `${arr[i]} ` : `${arr[i+1]} `)
    }
    console.log(print.trim())
        //end-here
});
//Testcase1
userInput[0] = '5';
userInput[1] = '1 1 3 0 5';
inp.close();