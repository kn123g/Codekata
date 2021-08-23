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
    let n = +userInput[0]; let arr = userInput[1].split(' '); let occ = 0, nums = [];
    for (let i = 0; i < n; i++) {
        occ = 1;
        if (arr[i] != '#') {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    occ = occ + 1;
                    arr[j] = '#';
                }
            }
            nums.push({ num: arr[i], count: occ });
        }
        // console.log(JSON.stringify(nums))
    }
    let small = nums[0].count;
    for (let i in nums) {
        small = (+nums[i].count < small) ? +nums[i].count : small;
    }
    let print = [];
    for (let i in nums) {
        if (nums[i].count == small) print.push(nums[i].num);
    }
    console.log(print.sort((a, b) => b - a).join(' '))
    //end-here
});
// userInput[0] = '9';
// userInput[1] = '1 6 4 56 56 56 6 4 2';
// inp.close();