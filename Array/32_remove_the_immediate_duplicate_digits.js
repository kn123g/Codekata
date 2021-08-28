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
    let str = userInput[0].split(''); let i = 0;
    while (i < str.length) {
        if (str[i] == str[i + 1]) {
            str.splice(i, 2)
        }
        else {
            i++;
        }
    }
    console.log(str.join(''));
    //end-here
});
//Test case 1
// userInput[0] = '5';
// inp.close();
