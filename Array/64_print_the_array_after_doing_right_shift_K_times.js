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
    let nk = userInput[0].split(' ');
    let n = +nk[0];
    let k = +nk[1];
    let arr = userInput[1].split(' ');
    for (let j = 0; j < k; j++) {
        let first = arr[n - 1];
        for (let i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1]
        }
        arr[0] = first;
    }
    console.log(arr.join(' '));

    //end-here
});

// Testcase1
// userInput[0] = '3 2';
// userInput[1] = '7 2 3';
// inp.close();