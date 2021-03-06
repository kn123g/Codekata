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
    let words = userInput[1].split(' '), n = +userInput[0];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (words[i].localeCompare(words[j]) > 0) {
                let temp = words[i];
                words[i] = words[j];
                words[j] = temp;
            }
        }
    }
    
    console.log(words.join(' '))
    //end-here
});
// userInput[0] = '3';
// userInput[1] = 'InfinityWar EndGame Avengers';
// inp.close();