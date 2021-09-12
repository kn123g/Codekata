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
    let str = userInput[0].split(' ');
    if (str[0] == str[1]) console.log('yes')
    else console.log('no')
        //end-here
});

// Testcase1
userInput[0] = 'guvi guvi';
inp.close();