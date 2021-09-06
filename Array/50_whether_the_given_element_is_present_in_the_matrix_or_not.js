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
    let r = +userInput[0].split(' ')[0];
    let c = +userInput[0].split(' ')[1];
    let arr = userInput[1].split(' ');
    let find = +userInput[2];
    let matrix = [];
    for (let i = 0; i < r; i++) {
        matrix.push(arr.splice(0, c))
    }
    console.log(matrix)
    let result = 'no'
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (+matrix[i][j] == +find) {
                result = 'yes';
                break;
            }
        }
    }
    // console.table(matrix)
    console.log(result)
    //end-here
});
//Test case 1
// userInput[0] = '3 5';
// userInput[1] = '2 3 0 7 1 5 3 4 1 8 11';
// userInput[2] = 11;
// inp.close();