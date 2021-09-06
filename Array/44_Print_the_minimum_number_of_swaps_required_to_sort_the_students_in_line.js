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
  let n, arr = userInput[1].split(' ').map(element => +element), count = 0;
  function checkOrder() {
    let ret = true;
    for (let i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[i + 1]) {
        ret = false;
        break;
      }
    }
    return ret;
  }
  for (let i = 0; i < arr.length; i++) {
    let swaped = false;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swaped = true;
      }
    }
    if (checkOrder()) {
      break;
    }
    if (swaped) {
      count++;
    }
  }
  console.log(count)
  //end-here
});
//Testcase1
// userInput[0] = '5';
// userInput[1] = '1 5 4 3 2';
// inp.close();