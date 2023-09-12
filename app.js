const yargs = require("yargs");
const command = process.argv[2]
//console.log(process.argv);
//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    handler: function(){
        console.log('adding a new note!')
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe:'Remove an existing note',
    handler: function(){
        console.log('Removing the note!')
    }
})
yargs.command({
    command: 'read',
    describe:'Read an existing note',
    handler: function(){
        console.log('Reading the note!')
    }
})
yargs.command({
    command: 'list',
    describe:'Listing all existing notes',
    handler: function(){
        console.log('Notes list here!')
    }
})
console.log(yargs.argv);
