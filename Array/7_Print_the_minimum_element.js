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
    //Your code goes here … replace the belo
    let array = userInput[1].split(' ');
    let min = array[0]
    for (let i = 1; i < userInput[1].length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }

    console.log(+min)
});
// userInput[0] = '5';
// userInput[1] = '3 4 9 1 6';
// inp.close();