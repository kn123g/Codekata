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
  let arr = userInput[1].split(' '),print ='';
  for(let i=0;i<arr.length;i++){
      let count = 1;
      if(arr[i] != -1){
        for(let j=i+1;j<arr.length;j++){
          if(arr[i] == arr[j]){
              arr[j] = -1;
              count = count + 1;
          }
      }
      if(count == 1) print = print + arr[i] + ' ';
      }
  }  
  console.log(print.trim());
  //end-here
});
//Test case 1
// userInput[0] = '5';
// userInput[1] = '1 1 2 5 5';
// inp.close();