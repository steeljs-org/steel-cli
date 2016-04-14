
var inquirer = require('inquirer');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = function(command, env) {

    // steel install <pkg>
    // steel install <pkg>@<tag>
    // steel install <pkg>@<version>
    // steel install <pkg>@<version range>
    // steel install <folder>
    console.log('help')
    var defaultChoices = [{
            name: 'all',
            value: 'all',
            default: true
        }, {
            name: 'install',
            value: 'install'
        }, {
            name: 'update',
            value: 'update'
        }, {
            name: 'init',
            value: 'init'
        }, {
            name: 'server',
            value: 'server'
        }, {
            name: 'exit',
            value: 'exit'
        }];


    inquirer.prompt([{
        name: 'whichCommander',
        type: 'list',
        message: 'Which commander?',
        choices: _.flatten([
            new inquirer.Separator(),
            defaultChoices,
            new inquirer.Separator()
        ])
    }], function(answer) {

        var answer = answer.whichCommander;
        if (answer === 'exit') {
            return;
        }
        var helpmap = initHelp();
        if (answer === 'all') {
            for (var i in helpmap) {
                helpmap[i]();
            }
            return;
        }

        helpmap[i]();

    });

}


function initHelp() {

    var cmd = chalk.bold.cyan;

    function install() {
        console.log(cmd("steel install"), "  -- Install all dependences of steel project.")
        console.log("       If there's no package.json, steel will produce default package.json.If the project has a package.json file, steel will add it own dependences in the file.")
        console.log("       If the project has a package.json file, steel will add it own dependences in the file.")    
    }

    function update() {
        console.log(cmd("steel update"), "  -- Update the golbal steel core package");
    }

    function server() {
        console.log(cmd("steel server"), "  -- if there's no pkg,json,produce default pkg.json");
        console.log(cmd("steel init --dist"), "");
        console.log(cmd("steel init --pm2"), "");
    }

    function init() {
        console.log(cmd("steel init"), "-- help you initialize a steel project");
        console.log(cmd("steel init -t <type>"), "  -- choose template type");
        console.log(cmd("steel init -f"), "  -- overwritten files");

    }


    return {
        'install': install,
        'update': update,
        'server': server,
        'init': init
    }
}