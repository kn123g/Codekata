const readline = require("readline");

const read = readline.createInterface({input:process.stdin});

let input =[];
read.on('line',(line)=>{
    input.push(line);
})

read.on('close',()=>{
    let print ='';
    input.forEach(val=>{
       print = print + val + ' ';
    });
    console.log((print).trim())
})