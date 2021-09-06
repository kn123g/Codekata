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
    let str = userInput[0].split('');
    let odd = '', even = '';
    str.forEach((str, i) => {
        if ((i + 1) % 2 == 0) even = even + str;
        else odd = odd + str;
    });
    console.log(`${odd} ${even}`);

    //end-here
});
//Test case 1
// userInput[0] = 'XCODE';
// inp.close();