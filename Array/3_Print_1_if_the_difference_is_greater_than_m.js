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
  let arr = userInput[1].split(' ');
  let diff = +userInput[0].split(' ')[1];
  let print = '';
  for(let i=0;i<arr.length;i++){
      let temp = Math.abs(+arr[i] - +arr[(i+1)%(arr.length)]);
      if(temp > diff) print = print + '1 '
      else print= print + '0 ' ;   
  }
  console.log(print.trim())
});
// userInput[0] = '5 15';
// userInput[1] = '50 65 85 98 35';
// inp.close();