//commonJs, every file is module (by default)
// Modules - Encapsulated code ( only share minimun)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(names)

sayHi('susan')
sayHi('yassin')
sayHi('som3a')