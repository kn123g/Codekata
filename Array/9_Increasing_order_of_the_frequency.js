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
    arr.sort((a, b) => a - b);
    let maxFreq = 0;
    arr.forEach(element1 => {
        let max = 0;
        arr.forEach(element2 => {
            if (+element1 == +element2) max = max + 1;
        });
        if (max > maxFreq) maxFreq = max;
    });
    // console.log(maxFreq)
    let print = [];
    for (let i = 0; i <= maxFreq; i++) {
        arr.forEach(element1 => {
            let max = 0;
            arr.forEach(element2 => {
                if (+element1 == +element2) max = max + 1;
            });
            // console.log(max)
            if (max == i) print.push(element1);
        });
    }
    for (let i = 0; i < print.length; i++) {
        if (print[i] != 'visited') {
            for (let j = i + 1; j < print.length; j++) {
                if (print[i] == print[j]) print[i] = 'visited';
            }
        }
        //   console.log(print)
    }
    console.log(print.filter(element => element != 'visited').join(' '))
    //end-here
});
// userInput[0] = '4';
// userInput[1] = '1 1 3 2';
// inp.close();