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
    let k = +userInput[0].split(' ')[1]
    let arr = userInput[1].trim().split(' ').map(element => +element)
    let output = arr.filter(element => element < k).sort((a, b) => a - b);
    //   console.log(output.join(' '))
    console.log(output.length > 0 ? output.join(' ') : -1)
        //end-here
});
//Testcase 1
// userInput[0] = '5 3';
// userInput[1] = '1 2 4 1 1';
// inp.close();