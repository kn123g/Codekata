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
    let len = +userInput[0];
    let arr = userInput[1].split(' ');
    let temp = {};
    for (let i = 0; i < len; i++) {
        temp[arr[i]] = 1 + +(temp[arr[i]] ? temp[arr[i]] : 0);
    }
    for (let i in temp) {
        if (temp[i] == 2) {
            console.log(i)
            break;
        }
    }

    //end-here
});
// userInput[0] = '5';
// userInput[1] = '13 12 13 12 13';
// inp.close();