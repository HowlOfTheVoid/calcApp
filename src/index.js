/**
 * @file index.js
 * @module application
 * @description A command line calculator application.
 *
 * @requires module:myMath
 * @requires module:prompt
 * 
 * @requires {@link https://www.npmjs.com/package/path|path}
 * 
 * @author Ethan Graupmann
 * @date 8/16/2024
 * @copyright Copyright © 2024 -_ by Ethan Graupmann. All rights reserved.
 * 
 */

//Internal Imports
let myMath = require('./myMath');
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
    let inputValueData1 = 0;
    let inputValueData2 = 0;

    //Console logs for beginning of function call.
    console.log(`Begin: ${namespacePrefix}${functionName} function`);
    console.log('Begin: Main Program Loop');
    // console.log('Begin: Command Parser'); < Good practice, not needed

    //If not running argument driven interface (Right now, always passes as true).
    if (argumentDrivenInterface === false) {
        //Infinite loop for program, only stops on exit or quit command.
        while (programRunning) {
            commandInput = prompt.prompt('Enter a math operation: ');
            // Skips over if input was empty.
            if (commandInput !== undefined) {

                // Reset Values for re-entry.
                inputValueData1 = 0;
                inputValueData2 = 0;

                // Exit/Quit/X/Q command handling
                if (commandInput.toUpperCase().trim() === 'EXIT' ||
                    commandInput.toUpperCase().trim() === 'QUIT' ||
                    commandInput.toUpperCase().trim() === 'Q' ||
                    commandInput.toUpperCase().trim() === 'X') {

                    console.log('End: Command Parser');
                    programRunning = false;
                    console.log('End Main Program Loop');
                    console.log('Exiting. Good night.');
                }
                // Addition Handling
                else if (commandInput.toUpperCase().trim() === 'ADD' ||
                         commandInput.toUpperCase().trim() === 'ADDITION' ||
                         commandInput.trim() === '+') {

                    inputValueData1 = getUserInput("Enter the first number to add: ");
                    inputValueData2 = getUserInput("Enter the second number to add: ");

                    let addResult = myMath.add(inputValueData1, inputValueData2);
                    console.log(`The sum is: ${addResult}`);
                }
                // Subtraction Handling
                else if (commandInput.toUpperCase().trim() === 'SUBTRACT' ||
                         commandInput.toUpperCase().trim() === 'SUB'||
                         commandInput.trim() === '-') {

                    inputValueData1 = getUserInput("Enter the first number to subtract from: ");
                    inputValueData2 = getUserInput("Ender the second number to subtract by: ");

                    let subResult = myMath.subtract(inputValueData1, inputValueData2);
                    console.log(`The difference is: ${subResult}`);
                }
                // Multiplication Handling
                else if (commandInput.toUpperCase().trim() === 'MULTIPLY' ||
                         commandInput.toUpperCase().trim() === 'MULT' ||
                         commandInput.trim() === '*') {

                    inputValueData1 = getUserInput("Enter the first number to multiply: ");
                    inputValueData2 = getUserInput("Enter the first number to multiply: ");

                    let multResult = myMath.multiply(inputValueData1, inputValueData2);
                    console.log(`The product is: ${multResult}`);

                }
                // Division handling
                else if (commandInput.toUpperCase().trim() === 'DIVIDE' ||
                         commandInput.toUpperCase().trim() === 'DIV' ||
                         commandInput.trim() === '/') {

                    inputValueData1 = getUserInput("Enter the dividend, the number you wish to divide: ");
                    inputValueData2 = getUserInput("Enter the divisor, the number that is being divided by: ");

                    let divResult = myMath.divide(inputValueData1, inputValueData2);
                    console.log(`The quotient is: ${divResult}`);

                }
                // Factorial handling
                else if (commandInput.toUpperCase().trim() === 'FACTORIAL' ||
                         commandInput.toUpperCase().trim() === 'FACT' ||
                         commandInput.trim() === '!') {

                    inputValueData1 = getUserInput("Enter the number you want the factorial of: ");

                    let factResult = myMath.factorial(inputValueData1);
                    console.log(`The factorial is: ${factResult}`);

                }
                // Exponent handling
                else if (commandInput.toUpperCase().trim() === 'EXPONENT' ||
                         commandInput.toUpperCase().trim() === 'EXP' ||
                         commandInput.trim() === '^') {

                    inputValueData1 = getUserInput("Enter the base number of the exponent: ");
                    inputValueData2 = getUserInput("Enter the power of which to raise the base number: ");

                    let expResult = myMath.exponential(inputValueData1, inputValueData2);
                    console.log(`The result is: ${expResult}`);

                }

                // Reset validInputString flag at the end, to be ready for next command.
                validInputString = false;
            }
        }
    }
    // Logging the end of the function call.
    console.log(`End: ${namespacePrefix}${functionName} function`);
}

/**
 * @function getUserInput
 * @description Gets an input number from the user and validates that it is an integer
 * @param {string} message The string message to query the user for input
 * @returns {integer} An integer value converted from the user input
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function getUserInput(message){
    //Setup function name, log starting information.
    let functionName = getUserInput.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Message is: ${message}`);

    let returnData = 0;
    let inputUserData = '';
    let validInputString = false;

    // While loop to validate first number.
    while (!validInputString) {
        inputUserData = prompt.prompt(message);
        if (!isNaN(parseInt(inputUserData))) {
            validInputString = true;
            returnData = parseInt(inputUserData);
        } else {
            console.log("It seems that what you entered is not a valid number. Please enter a number.");
        }
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}

//Set up programRunning, bootstrap, then set to true
let programRunning = false;
// bootStrapApplication < Not used yet
programRunning = true;
//Run Application
application();
