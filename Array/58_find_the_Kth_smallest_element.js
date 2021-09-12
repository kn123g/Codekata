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
    let n = +userInput[0].split(' ')[0];
    let k = +userInput[0].split(' ')[1];
    let array = userInput[1].split(' ').map(element => +element);
    let arr = array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    for (let i = 0; i < k; i++) {
        for (let j = i; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    if (arr.length >= k - 1) console.log(arr[k - 1]);
    else console.log(-1);

    //end-here
});

//Testcase 1
// userInput[0] = '5 2';
// userInput[1] = '1 1 2 4 5';
// inp.close();