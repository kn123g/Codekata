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
    let years = userInput[1].split(' ');
    let party = userInput[2].split(' ');
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (+years[i] > +years[j]) {
                let temp1 = years[i];
                let temp2 = party[i];
                years[i] = years[j];
                party[i] = party[j];
                years[j] = temp1;
                party[j] = temp2;
            }
        }
    }
    let current = party[0];
    for (let i = 1; i < n; i++) {
        if (party[i] != current) {
            console.log(years[i]);
            current = party[i];
        }
    }

    //end-here
});
//Test case 1
// userInput[0] = '5';
// userInput[1] = '2004 1999 2019 2009 2014';
// userInput[2] = 'JDU JDU CON JDU CON';

//Test case 2
// userInput[0] = '5';
// userInput[1] = '2005 1990 1995 1985 2000';
// userInput[2] = 'A B B B B';
// inp.close();




