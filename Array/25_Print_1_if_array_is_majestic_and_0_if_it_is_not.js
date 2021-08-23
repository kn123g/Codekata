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
    let arr = userInput[1].split(' ');
    if (arr.length > 5) {
        let first = 0, last = 0;
        for (let i = 0; i < 3; i++) {
            first = first + (+arr[i]);
            last = last + (+arr[arr.length - (i + 1)]);
        }
        //   console.log(first,last)
        if (first === last) console.log(1)
        else console.log(0)
    }
    else {
        console.log(0);
    }

    //end-here
});
// userInput[0] = '7';
// userInput[1] = '1 2 3 4 6 0 0';
// inp.close();