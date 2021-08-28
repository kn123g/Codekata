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
    let n = +userInput[0],list=[],printResult='';
    for(let i=1;i<userInput.length;i++){
        let line = userInput[i].split(' ');
        switch(+line[0]){
            case 1:
                list.push(line[1]);
                break;
            case 2:
              let print = '';
              if(list.length == 0) {
                list.push(-1)
                continue;
              }
                list.forEach((element)=>{
                    print = print + element + ' ';
                })
                printResult = print;
                break;
        }
    }
    console.log(printResult.trim())
  //end-here
});


//Test case 1
// userInput[0] = '5';
// userInput[1] = '1 60';
// userInput[2] = '2';
// userInput[3] = '1 58';
// userInput[4] = '2';
// userInput[5] = '1 69';

//Test case 2
// userInput[0] = '4';
// userInput[1] = '2';
// userInput[2] = '1 60';
// userInput[3] = '2';
// userInput[4] = '1 58';

// inp.close();