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
    let arr = userInput[1].split(' ').map(element => +element);
    arr = arr.filter((element, i, arr) => arr.indexOf(element) == i ? true : false).sort((a, b) => a - b);
    console.log(arr[1] ? arr[1] : -1)

    //end-here
});
//Testcase1
// userInput[0] = '5';
// userInput[1] = '1 2 3 4 5'
// userInput[0] = '6';
// userInput[1] = '1 1 1 1 1 1';
// inp.close();