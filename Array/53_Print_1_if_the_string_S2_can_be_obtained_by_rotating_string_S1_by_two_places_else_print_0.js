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
    let str = userInput[0], n = +str.length, temp = [];
    let rotated = userInput[1];
    for (let i = 0; i < n; i++) {
        temp.push(str[(i + 2) % n])
    }
    if (temp.join('') == rotated) console.log(1)
    else console.log(0)

    //end-here
});
//Testcase1
// userInput[0]='amazon'
// userInput[1]='azonam'
// inp.close()