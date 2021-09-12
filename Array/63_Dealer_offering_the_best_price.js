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
    let best = arr[0];
    let bestIndex = 0;
    for (let i = 1; i < n; i++) {
        if (best > +arr[i]) {
            best = +arr[i];
            bestIndex = i;
        }
    }
    console.log(`Dealer${bestIndex}`);

    //end-here
});
//Testcase 1
// userInput[0] = '3';
// userInput[1] = '10000 11200 12030';
// Testcase2
// userInput[0] = '10';
// userInput[1] = '10000 9000 8000 7000 6000 5000 40000 3000 2000 1000';
// inp.close();