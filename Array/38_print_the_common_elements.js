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
    let arr1 = userInput[1].split(' '),print =''
    let arr2 = userInput[2].split(' ');
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                print = print + arr1[i] + ' ';
                break;
            }
        }
    }
  console.log(print == '' ? -1 : print.trim());

  //end-here
});
//Test case 1
userInput[0] = '5';
userInput[1] = '1 1 1 1 1';
userInput[2] = '1 2 3 4 5';
inp.close();