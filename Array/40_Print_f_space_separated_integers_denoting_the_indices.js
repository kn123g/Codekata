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
    let n = +userInput[0];
    let nums = userInput[1].split(' '), print = ''; temp = []
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i == 0) {
                temp[j] = j;
            }
            if (+nums[i] < +nums[j]) {
                let temp1 = nums[i];
                nums[i] = nums[j];
                nums[j] = temp1;
                let temp2 = temp[i]
                temp[i] = temp[j]
                temp[j] = temp2;
            }
        }
    }
    console.log(temp.join(' '));
    //end-here
});
//Test case 1
// userInput[0] = '3';
// userInput[1] = '1 5 4';
// inp.close();