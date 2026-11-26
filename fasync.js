
const {readFileSync, writeFileSync} = require('fs');
console.log('start')

const first = readFileSync('./content/subfolder/first.txt','utf8');

const second = readFileSync('./content/subfolder/second.txt','utf8');

writeFileSync('./content/subfolder/result-sync.txt', `Here is the result : ${first} , ${second}`,
  {flag:'a'}
)
console.log("I am done with this task")
console.log("starting the next one")