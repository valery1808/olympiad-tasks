const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let count = 0;
let arr_x = [];
let arr_y = [];
rl.on('line', (line) => {
    let array = line.split(' ').map(int => parseInt(int, 10));
    arr_x.push(array[0]);
    arr_x.push(array[2]);
    arr_y.push(array[1]);
    arr_y.push(array[3]);
    count++;
    if (count == 2){
        let x = Math.max(...arr_x) - Math.min(...arr_x);
        let y = Math.max(...arr_y) - Math.min(...arr_y);
        console.log(Math.pow(Math.max(x,y), 2));
  }
})