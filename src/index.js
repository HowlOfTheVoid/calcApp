/**
 * @file index.js
 * @module application
 * @description A command line calculator application.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Ethan Graupmann
 * @date 8/16/2024
 * @copyright Copyright © 2024 -_ by Ethan Graupmann. All rights reserved.
 * 
 */

let path = require('path');
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}.`;

/** 
 * @function application
 * @description This is the main program loop, and the init for the entire application.
 * @returns {void}
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function application() {
    let functionName = application.name;
    let argumentDrivenInterface = false;
    let commandInput, commandResult;
    let inputData1 = 0;
    let inputData2 = 0;

    console.log(`Begin: ${namespacePrefix}${functionName} function`);
    console.log('Begin: Main Program Loop');
    // console.log('Begin: Command Parser'); < Good practice, not needed

    if (argumentDriveInterface === false) {
        while (programRunning) {
            commandInput = prompt.prompt('Enter a math operation: ');

            if (commandInput.toUpperCase().trim() === 'EXIT' ||
                commandInput.toUpperCase().trim() === 'QUIT' ||
                commandInput.toUpperCase().trim() === 'Q' ||
                commandInput.toUpperCase().trim() === 'X') {

                console.log('End: Command Parser');
                programRunning = false;
                console.log('End Main Program Loop');
                console.log('Exiting. Good night.');
            }
        }
    }
}
