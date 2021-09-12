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
    let arr = userInput[1].split(' ')
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp;
            if (i % 2 == 0) {
                if (+arr[i] < +arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
            else {
                if (+arr[i] > +arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }

        }
        // console.log(arr.join(' '));
    }
    console.log(arr.join(' ').trim());

    //end-here
});
//Testcase 1
// userInput[0] = '5';
// userInput[1] = '1 7 11 16 19';
//Testcase 2
// userInput[0] = '11';
// userInput[1] = '10 20 30 40 50 60 70 80 90 100 110';
// inp.close();