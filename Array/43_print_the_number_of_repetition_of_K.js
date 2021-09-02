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
    let nk = userInput[0].split(' '), arr = userInput[1].split(' '), count = -1;
    for (let i = 0; i < nk[0]; i++) {
        if (nk[1] == arr[i]) count = count + 1;
    }
    console.log(count == -1 ? -1 : count);
    //end-here
});
//Testcase1
// userInput[0] = '6 2';
// userInput[1] = '1 2 3 5 7 8';
// Testcase2
// userInput[0] = '4 4';
// userInput[1] = '1 3 2 3';
// inp.close();