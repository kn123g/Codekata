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
    let n = +userInput[0], arr = userInput[1].split(' ');
    for (let i = 0; i < n; i = i + 2) {
        for (let j = i; j < n; j = j + 2) {
            if (arr[i] > arr[j]) {
                arr[i] = +arr[i] + +arr[j];
                arr[j] = arr[i] - +arr[j];
                arr[i] = arr[i] - arr[j];
                // let temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;

            }
        }
    }

    console.log(arr.join(' '));
    //end-here
});
// userInput[0] = '5';
// userInput[1] = '3 9 1 44 6';
// inp.close();