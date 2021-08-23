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
    let len = +userInput[0], elements = userInput[1].split(' '), print = '';
    var nearest;
    for (let i = 0; i < len; i++) {
        let nearest = -1;
        for (let j = i + 1; j < len; j++) {
            if (+elements[j] < +elements[i]) {
                nearest = elements[j];
                break;
            }
        }
        // console.log(nearest)
        print = print + nearest + ' ';
    }
    console.log(print.trim())
});
// userInput[0] = '7';
// userInput[1] = '10 7 9 3 2 1 15';
// inp.close();