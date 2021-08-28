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
    let n = +userInput[0], prev = '';
    for (let i = 0; i < n; i++) {
        if (i == 0) prev = `${prev}1 `;
        else prev = `${prev}1 1 `;
        console.log(prev.trim())
    }
    //end-here
});
//Test case 1
userInput[0] = '3';
inp.close();