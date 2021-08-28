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
    let n = userInput[0].split(' ')[0], num = userInput[0].split(' ')[1]
    let arr = userInput[1].split(' ');
    arr.indexOf(num) > -1 ? console.log('yes') : console.log('no');
    //end-here
});
//Test case 1
userInput[0] = '4 2';
userInput[1] = '1 2 3 3';
inp.close();