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
    let arr1 = userInput[1].split(' ')
    let arr2 = userInput[2].split(' ')
    let mergedArr = arr1.concat(arr2);
    mergedArr.sort();
    console.log(mergedArr.join(' '));

    //end-here
});

// userInput[0] = '5 4';
// userInput[1] = '1 2 3 4 5';
// userInput[2] = '1 2 3 4';
// inp.close();