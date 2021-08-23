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
    let n= +userInput[0],numbers = userInput[1].split(' '),
    m=userInput[2],testcases= userInput[3].split(' '),print = '';
    for(let i=0;i<m;i++){
        let test = testcases[i],count=0;
        for(let j=0;j<n;j++){
            if(test == +numbers[j]) count++;
        }
        if(count != 0) print = print + count + ' ';
        else print = print + 'Not Present ';
    }
    console.log(print.trim());

  //end-here
});
// userInput[0] = '10';
// userInput[1] = '1 1 1 2 2 2 3 8 9 7';
// userInput[2] = '5';
// userInput[3] = '1 2 3 0 5';
// inp.close();