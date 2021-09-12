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
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        let currentSum = +arr[i] + +arr[i + 1]
        if (sum < currentSum) sum = currentSum;
    }
    console.log(sum);

    //end-here
});
//Testcase 1
// userInput[0] = '5';
// userInput[1] = '1 5 6 8 3';
// inp.close();