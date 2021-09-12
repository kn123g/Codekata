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
    let binary = userInput[0].split('').reverse();
    let bin = 1;
    let dec = +binary[0] * bin;
    for (let i = 1; i < binary.length; i++) {
        bin = bin * 2;
        dec = dec + (+binary[i] * bin);
    }
    let oct = '';
    while (dec != 0) {
        oct = oct + (dec % 8);
        dec = Math.floor(dec / 8);
    }
    console.log(oct.split('').reverse().join(''));
    //end-here
});
// userInput[0] = '1100100';
// inp.close();