const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let count = 0;
let N = 0;
let obj = {};
rl.on('line', (line) => {
    if (count == 0) {
        N = parseInt(line);
    }
    else {
        let array = line.split(' ').sort().toString();
        if (Object.keys(obj).includes(array)) {
            obj[array]++;
        }
        else {
            obj[array] = 1;
        }
    }
    count++;
    if (count == N+1){
        console.log(Math.max(...Object.values(obj)));
  } 
})