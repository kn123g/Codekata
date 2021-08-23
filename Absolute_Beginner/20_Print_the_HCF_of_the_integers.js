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

    let a = +userInput[0].split(' ')[0], b = +userInput[0].split(' ')[1]
    let quant = a > b ? a : b;
    let divisor = a > b ? b : a;
    let rem = (quant % divisor);
    let hcf = quant;
    if (rem === 0) {
        hcf = divisor;
    }
    else if (rem === 1) {
        hcf = 1;
    } else {
        while ((rem !== 0) && (rem !== 1)) {
            // console.log(a, ' ', b, ' ', quant, ' ', divisor, ' ', hcf, ' ', rem)
            quant = divisor;
            divisor = rem;
            rem = quant % divisor;
            if (rem === 1) hcf = 1
            else if (rem === 0) hcf = divisor;
        }
    }
    console.log(hcf)
});
// userInput[0] = '2 3';
// inp.close();