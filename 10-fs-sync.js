const {readFile, writeFile, readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./Content/first.txt','utf8')
const second = readFileSync('./Content/second.txt','utf8')

writeFileSync(
  './Content/result-sync.txt',
  `here is the results : ${first}, ${second}`,
  {flag: 'a'} 
)
console.log('done with this task');
console.log('starting the next one');