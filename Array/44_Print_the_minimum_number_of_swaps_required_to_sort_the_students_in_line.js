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
    let n = userInput[0], arr = userInput[1].split(' '), count = 0;
    for (let i = 0; i < n;) {
        if (arr[i] == i + 1) {
            i++;
        }
        else {
            let temp1 = arr[i];
            let temp2 = arr[arr[i] - 1];
            arr[i] = temp2;
            arr[temp1 - 1] = temp1;
            count = count + 1;
        }
    }
    console.log(arr.join(' ') , '               ',count)

    //end-here
});
//Testcase2
userInput[0] = '5';
userInput[1] = '1 5 4 3 2';
inp.close();