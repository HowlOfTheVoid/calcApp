/**
 * @file prompt.js
 * @module prompt
 * @description Prompt module to get input from the user. Uses process.stdin.
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Ethan Graupmann
 * @date 8/16/2024
 * @copyright Copyright © 2024 -_ by Ethan Graupmann. All rights reserved.
 */

//External Imports
let fs = require('fs');
let path = require('path');

//Building Namespace and Filename
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `prompt.${baseFileName}.`;
let term = 13; // Carriage return

/**
 * @function prompt
 * @description Prompts the user for some input, then returns the input provided.
 * @param {string} ask What the display should say, when asking the user for input.
 * @return {string} A string of whatever the user gave in response.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function prompt(ask) {

    //Setting up function name and logging start of function.
    let functionName = prompt.name;
    console.log(`Begin: ${namespacePrefix}${functionName} function.`);
    console.log(`Ask is: ${JSON.stringify(ask)}`);
    let input = '';

    // If there was ask input, print it out.
    if (ask) {
        process.stdout.write(ask);
    }

    //Allocate buffer, then set up the readSize for the user's input.
    let buffer = Buffer.alloc(1024),
        fd = process.platform === 'win32' ? process.stdin.fd : fs.openSync('dev/tty', 'rs'),
        readSize = fs.readSync(0, buffer, 0, 1024);

    //Get user's input.
    input = buffer.toString('UTF8', 0, readSize);

    //Trim off any new lines the user enters into the input.
    if (input.includes(String.fromCharCode(term))) {
        input = input.slice(0, input.indexOf(String.fromCharCode(term)));
    } else if (input.includes('/r/n')) {
        input = input.slice(0, input.indexOf('/r/n'));
    }

    //Log input and end function call.
    console.log(`Input is: ${JSON.stringify(input)}`);
    console.log(`End: ${namespacePrefix}${functionName} function.`);
    return input;
}

//Module exports
module.exports = {
    ['prompt']: (ask) => prompt(ask)
}