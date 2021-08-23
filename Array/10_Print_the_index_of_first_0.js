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
    let size = userInput[0].split(' ')[1];
    let print = '';
    for (let i = 0; i < (arr.length - +size); i = i + +size) {
        //   console.log(i)
        if ((arr[i] == 0 && arr[i + 1] == 0)) {
            print = `${print}${i + 1} ${i + 2} `;
        }
        else if (arr[i] == 0 || arr[i + 1] == 0) {
            if (arr[i] == 0) {
                print = `${print}${i + 1} ${i + 1} `;
            }
            else {
                print = `${print}${i + 2} ${i + 2} `;
            }
        }
        else {
            print = print + '-1 -1 '
        }
    }
    console.log(print.trim());

    //end-here
});
// userInput[0] = '7 2';
// userInput[1] = '1 0 6 7 4 0 9';
// inp.close();