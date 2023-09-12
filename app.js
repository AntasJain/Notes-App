const yargs = require("yargs");
const command = process.argv[2]
console.log(process.argv);
//customize yargs version
yargs.version('1.1.0')
console.log(yargs.argv);
if(command === 'add')
{
    console.log('Adding Note!')
}else if(command === 'remove'){
    console.log('Removing Note!')
}