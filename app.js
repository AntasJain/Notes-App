const validator = require('validator')
const chalk = require('chalk')//new version removed require, uses import
console.log(chalk.red.bold.inverse('Success!'))
console.log(process.argv[2])