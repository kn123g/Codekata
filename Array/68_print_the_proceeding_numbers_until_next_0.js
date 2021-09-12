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
    let counting = false;
    let current = [],
        final = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            if (!counting) {
                counting = !counting;
            } else {
                final.push(...current);
                current = [];
            }
        } else {
            if (counting) {
                current.push(arr[i])
            }
        }
    }
    console.log(final.join(' ') ? final.join(' ') : -1);

    //end-here
});
// Testcase1
// userInput[0] = '15';
// userInput[1] = '1 1 1 0 1 0 1 1 0 1 0 1 1 0 1';
// Testcase2
// userInput[0] = '5';
// userInput[1] = '1 1 0 1 1'
// inp.close();