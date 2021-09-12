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
    let n = +userInput[0]
    let arr = userInput[1].split(' ');
    let odd = { len: 0, value: [] };
    let even = { len: 0, value: [] };
    arr.forEach(element => {
        if (+element % 2 == 0) {
            even.len++;
            even.value.push(element)
        } else {
            odd.len++;
            odd.value.push(element)
        }
    });
    console.log(odd.len == 1 ? odd.value[0] : (even.len == 1 ? even.value[0] : -1));

    //end-here
});
//Testcase 1
userInput[0] = '5';
userInput[1] = '1 3 4 5 7';
inp.close();