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
    let arr = userInput[1].split(' '), len = +userInput[0] * 2;
    for (let i = 1; i < len; i = i = i + 2) {
        for (let j = i; j < len; j = j + 2) {
            if (+arr[i] > +arr[j]) {
                let temp_salary = arr[i];
                let temp_name = arr[i - 1];
                arr[i] = arr[j];
                arr[i - 1] = arr[j - 1];
                arr[j] = temp_salary;
                arr[j - 1] = temp_name;
            }
        }
        console.log(arr[i - 1])
    }
    //end-here
});
// userInput[0] = '3';
// userInput[1] = 'Karthik 23000 rohan 81734 varshini 12343';
// inp.close();