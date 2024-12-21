const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./Content/first.txt', 'utf-8',(err,reult) => {
  if(err){  (parameter) err: NodeJS.ErrnoException
    console.log("Error.......")
    return 
}
const first = reult;
readFile('./Content/second.txt', 'utf8', (err, reult) => {
  if(err){
    console.log("Error.......")
    return 
}
const second = reult;
writeFile('./Content/result-async.txt', 
  `here is the results : ${first}, ${second}`,(err,result) =>{
    if(err){
      console.log(err)
      return
    }
    console.log('done with this task')
  }
  )
  })
})
console.log('strating the nxt task ')
