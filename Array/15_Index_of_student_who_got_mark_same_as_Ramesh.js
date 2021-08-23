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
    let n = +userInput[0].split(' ')[0];
    let Rmark = +userInput[0].split(' ')[1];
    let Omarks = userInput[1].split(' ');
    let index = [-1];
    for (let i = 0; i < Omarks.length; i++) {
        if (+Omarks[i] == Rmark) index.push(i);
    }
    if (index.length == 1) console.log(index.join(' '))
    else console.log(index.slice(1).join(' '))


    //end-here
});
// userInput[0] = '2 10';
// userInput[1] = '1 2';
// inp.close();