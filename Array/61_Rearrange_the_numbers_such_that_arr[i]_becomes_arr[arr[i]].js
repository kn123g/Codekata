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
    let n = +userInput[0]
    let arr = userInput[1].split(' ')
    let narr = [];
    for (let i = 0; i < n; i++) {
        narr.push(arr[arr[i]]);
    }
    console.log(narr.join(' '));

    //end-here
});
//Testcase 1
// userInput[0] = '5';
// userInput[1] = '4 0 2 1 3';
// inp.close();