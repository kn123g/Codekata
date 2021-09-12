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
    let nk = userInput[0].split(' ')
    let n = +nk[0];
    let k = +nk[1];
    let arr = userInput[1].split(' ');

    function binarySearch(arr, start, end, x) {
        if (end >= start) {
            let mid = start + Math.floor((end - start) / 2);
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, start, mid - 1, x);
            return binarySearch(arr, mid + 1, end, x);
        }
        return -1;
    }

    let result = binarySearch(arr, 0, n - 1, k);
    console.log(result != -1 ? 'yes' : 'no');

    //end-here
});

userInput[0] = '6 8';
userInput[1] = '0 1 2 3 7 8';
inp.close();