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
    let arr = userInput[1].split(' ')
    let print = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 'visited') {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    print.push(arr[i])
                    arr[i] = 'visited';
                }
            }
        }
    }
    console.log(print.join(' '))
    //end-here
});
// userInput[0] = '7';
// userInput[1] = '1 1 11 121 131 141 98';
// inp.close();