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
    let s = userInput[0]; let len = s.length;
    let middle = (len / 2) + 1;
    if (len % 2 == 0) console.log(s.substring(0, middle - 2) + '**' + s.substring(middle, len));
    else console.log(s.substring(0, middle - 1) + '*' + s.substring(middle, len));
    //end-here
});
// userInput[0] = 'hello';
// inp.close();