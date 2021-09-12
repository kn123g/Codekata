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
    let arr = userInput[0].split('')
    for (let i = 0; i < arr.length; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log(arr.join(''));

    //end-here
});
//Testcase1
// userInput[0] = 'codekata';
// inp.close();