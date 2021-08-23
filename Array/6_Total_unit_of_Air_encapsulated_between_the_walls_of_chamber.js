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
    let ans = 0;
    let l = userInput[1].split(' ')
    for (let i = 1; i < +userInput[0]; i++) {
        if ((l[i] < l[i - 1]) && (l[i] < l[i + 1])) {
            ans += Math.min(l[i + 1], l[i - 1]) - l[i]
        }
    }
    console.log(ans)
    //end-here
});
// userInput[0] = '3';
// userInput[1] = '7 4 9';
// inp.close();