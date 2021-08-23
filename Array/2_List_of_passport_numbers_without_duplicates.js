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
    let uniqeArr = [];
    arr.forEach(element => {
        let unique = true;
        uniqeArr.forEach(value => {
            if (element == value) {
                unique = false;
            }
        })
        if (unique) {
            uniqeArr.push(element);
        }
    })
    console.log(uniqeArr.join(' ').trim())
    //end-here
});
// userInput[0] = '5';
// userInput[1] = 'A23 B56 B56 C79 D16';
// inp.close();