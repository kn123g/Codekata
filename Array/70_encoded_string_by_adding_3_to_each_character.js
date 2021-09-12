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
    //way1
    // let str = userInput[0];
    // let print = '';
    // for (let i = 0; i < str.length; i++) {
    //     let charCode = str.charCodeAt(i) + 3;
    //     if (charCode > 90) {
    //         charCode = (charCode - 90) + 64;
    //         // console.log(charCode)
    //     }
    //     print = print + String.fromCharCode(charCode);
    // }
    // console.log(print);
    //way2
    let str = userInput[0].split('');
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0) + 3;
        if (charCode > 90) {
            charCode = (charCode - 90) + 64;
            // console.log(charCode)
        }
        str[i] = String.fromCharCode(charCode);
    }
    console.log(str.join(''))
        //end-here
});
//Testcase1
// userInput[0] = 'RADAZ';
// inp.close()