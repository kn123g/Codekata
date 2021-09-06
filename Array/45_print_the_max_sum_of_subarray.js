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
    let n = userInput[0], arr = userInput[1].split(' ');
    let max = 0;
    let final = arr.reduce((a, b) => {
        let temp = +a + +b;
        if (temp > 0) {
            a = temp;
        }
        if (a > max) max = a;
        return a;
    })
    //printing maximum sum of subarray
    // console.log(max)
    //printing maximum subarray of positive sum
    console.log(final);
    //end-here
});
//Testcase1
// userInput[0] = '5';
// userInput[1] = '1 2 3 -2 5 -5';
// inp.close()