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
    let firstArray = userInput[1].split(' ').sort((a,b)=> a-b).join(' ')
    let secondArray = userInput[2].split(' ').sort((a,b)=> b-a).join(' ')
    console.log(`${firstArray} ${secondArray}`)
});
// userInput[0] = '3 3';
// userInput[1] = '23 15 16';
// userInput[2] = '357 65 10';
// inp.close();

