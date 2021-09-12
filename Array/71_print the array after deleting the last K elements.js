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
    let nk = userInput[0].split(' ');
    let arr = userInput[1].split(' ')
    let n = +nk[0];
    let k = +nk[1];
    //way1
    // for (let i = 0; i < k; i++) {
    //     arr.pop();
    // }
    //way2
    arr.splice(n - k, k)

    console.log(arr.join(' '));
    //end-here
});
//Testcase1
// userInput[0] = '5 4'
// userInput[1] = '1 2 3 4 5'
//Testcase2
// userInput[0] = '5 2'
// userInput[1] = '1 2 3 4 5'
// inp.close()