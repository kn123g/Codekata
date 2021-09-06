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
    let arr = userInput[1].split(' ');
    let m = +userInput[2];
    let newArr = userInput[3].split(' ');
    let print = '';
    for (let j = 0; j < m; j++) {
        let i = 0;
        for (i = 0; i < n; i++) {
            if (+newArr[j] > +arr[i]) {
                arr.splice(i, 0, newArr[j]);
                // console.log(arr)
                break;
            }
        }
        print = `${print}${i + 1} `;
    }
    console.log(print.trim());

    //end-here
});
//Test case 1
// userInput[0] = '7';
// userInput[1] = '95 68 62 58 55 41 30';
// userInput[2] = '3';
// userInput[3] = '45 61 100';
// inp.close();