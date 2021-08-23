const readline = require("readline");

const read = readline.createInterface({input:process.stdin});

let input;
read.on('line',(line)=>{
    input = +line;
})

read.on('close',()=>{
    console.log(input)
})