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
    let nums = userInput[0].split(''), odd = '', even = ' ';
    nums.forEach((num) => {
        if ((+(num) % 2 === 0)) even = even + num + ' ';
        else odd = odd + num + ' ';
    })
    console.log(even.trim().split(' ').sort().join(' ')); console.log(odd.trim().split(' ').sort().join(' '));
    //end-here
});
// userInput[0] = '1234';
// inp.close();