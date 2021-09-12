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
    let arr = [];
    let point = false;
    for (let i = 0; i < +userInput.length; i++) {
        let temp = userInput[i].split(' ');
        arr.push(temp)
        if (temp[0] == 0 && temp[1] == 0) {
            point = true;
            break;
        }
    }
    if (point) {
        console.log('yes')
    } else {
        console.log('no')
    }
    //end-here
});
//Testcase1
// userInput[0] = '0 1';
// userInput[1] = '0 0';
// userInput[2] = '0 2';

// userInput[0] = '1 1';
// userInput[1] = '0 0';
// userInput[2] = '2 2';
// inp.close();