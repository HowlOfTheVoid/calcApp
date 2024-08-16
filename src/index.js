/**
 * @file index.js
 * @module application
 * @description A command line calculator application.
 * 
 * @requires module:prompt
 * 
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Ethan Graupmann
 * @date 8/16/2024
 * @copyright Copyright © 2024 -_ by Ethan Graupmann. All rights reserved.
 * 
 */

//Internal Imports
let prompt = require('./prompt');

//External Imports
let path = require('path');

//Set up roots, Filename and Namespace
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

    //Set up function name and variables used.
    let functionName = application.name;
    let argumentDrivenInterface = false;
    let commandInput, commandResult;
    let inputData1 = 0;
    let inputData2 = 0;

    //Console logs for beginning of function call.
    console.log(`Begin: ${namespacePrefix}${functionName} function`);
    console.log('Begin: Main Program Loop');
    // console.log('Begin: Command Parser'); < Good practice, not needed

    //If not running argument driven interface (Right now, always passes as true).
    if (argumentDrivenInterface === false) {
        //Infinite loop for program, only stops on exit or quit command.
        while (programRunning) {
            commandInput = prompt.prompt('Enter a math operation: ');
            // Handles if input was empty.
            if (commandInput !== undefined) {
                // Exit/Quit/X/Q command handling
                if (commandInput.toUpperCase().trim() === 'EXIT' ||
                    commandInput.toUpperCase().trim() === 'QUIT' ||
                    commandInput.toUpperCase().trim() === 'Q'    ||
                    commandInput.toUpperCase().trim() === 'X') {

                        console.log('End: Command Parser');
                        programRunning = false;
                        console.log('End Main Program Loop');
                        console.log('Exiting. Good night.');
                }
            }
        }
    }
    // Logging the end of the function call.
    console.log(`End: ${namespacePrefix}${functionName} function`);
}

//Set up programRunning, bootstrap, then set to true
let programRunning = false;
// bootStrapApplication < Not used yet
programRunning = true;
//Run Application
application();
