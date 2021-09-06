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
    let n = userInput[0];
    let arr = userInput[1].split(' '), count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != -1) {
            let current = 1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    current++;
                    arr[j] = -1;
                }
            }
            if (current > count) count = current;
            // console.log(arr[i],' ',current,' ',count)
        }
    }
    if (count > 1) console.log(count);
    else console.log(-1)
    //end-here
});
// userInput[0] = '8';
// userInput[1] = '1 2 2 2 3 4 5 6';
// inp.close();