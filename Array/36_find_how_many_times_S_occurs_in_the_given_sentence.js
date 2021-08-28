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
    let sentence = userInput[0].split(' ');
    let str = userInput[1], count = 0;
    sentence.forEach(element => {
        if (element === str) count = count + 1;
    })
    console.log(count > 0 ? count : -1)
    //end-here
});
//Test case 1
// userInput[0] = 'I enjoy doing codekata';
// userInput[1] = 'codekata';
// inp.close();