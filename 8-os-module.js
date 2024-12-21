const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method retruns the system uptime in seconds

console.log(`The system uptime is: ${os.uptime}  sec`)

const currentOS = {
  name: os.type(),
  relesae: os.release(),
  totalMemory: os.totalmem(),
  freemem:os.freemem()
}
console.log(currentOS)