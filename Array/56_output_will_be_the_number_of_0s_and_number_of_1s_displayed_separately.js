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
    let rc = userInput[0].split(' ');
    let ram = 0, sita = 0;
    let matrix = [];
    let rows = +rc[0];
    for (let i = 1; i <= rows; i++) {
        let row = userInput[i].split(' ');
        row.forEach(result => {
            if (result == 0) ram++;
            else sita++;
        })
    }

    console.log(`RAM: ${ram}`);
    console.log(`SITA: ${sita}`);

    //end-here
});
//Testcase 1
// userInput[0] = '1 3';
// userInput[1] = '1 1 1';
// inp.close();
//Testcase 2
// userInput[0] = '2 4';
// userInput[1] = '0 0 1 1';
// userInput[1] = '0 1 0 1';
// inp.close();