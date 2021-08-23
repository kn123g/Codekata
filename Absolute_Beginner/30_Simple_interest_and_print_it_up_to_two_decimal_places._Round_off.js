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
    let PNR = userInput[0].split(' ');
    console.log(((+PNR[0] * +PNR[1] * +PNR[2]) / 100).toFixed(2));
    //end-here
});
// userInput[0] = '1000 2 5';
// inp.close();