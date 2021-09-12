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
    let k = 'kabali'.split('').sort().join(''),
        count = 0;
    let n = +userInput[0];
    for (let i = 1; i <= n; i++) {
        if (userInput[i].split('').sort().join('') == k) count++;
    }
    console.log(count);

    //end-here
});
//Testcase1
// userInput[0] = '5';
// userInput[1] = 'kabali';
// userInput[2] = 'kaabli';
// userInput[3] = 'kababa';
// userInput[4] = 'kab';
// userInput[5] = 'kabail';
// inp.close();