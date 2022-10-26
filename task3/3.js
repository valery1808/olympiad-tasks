const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let count = 0;
let odd = [];
let even = [];
rl.on('line', (line) => {
    if (count == 0) {
        let N = line;
    }
    else {
        let array = line.split(' ');
        for (let num in array) {
            if (num % 2 == 0) {
                odd.push(parseInt(array[num]));
            }
            else {
                even.push(parseInt(array[num]));
            }
        }
    }
    count++;
    if (count == 2){
        let min = Math.min(...odd);
        let max = Math.max(...even);
        console.log(odd, min, even, max)
        let sum = odd.reduce((partialSum, a) => partialSum + a, 0) - even.reduce((partialSum, a) => partialSum + a, 0);
        if (max > min) {
            sum = sum + max * 2 - min * 2;
            
        }
        console.log(sum);
  } 
})