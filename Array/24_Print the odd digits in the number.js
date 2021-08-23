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
    let arr = userInput[0].split(''), print = '';
    for (let i = 0; i < arr.length; i++) {
        if ((+arr[i]) % 2 !== 0) {
            print = `${print}${arr[i]} `;
        }
    }
    if (print === '') {
        console.log(-1)
    } else {
        console.log(print.trim())
    }
    //end-here
});
// userInput[0] = '2143';
// inp.close();