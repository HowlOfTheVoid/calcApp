/**
 * @file myMath.js
 * @module myMath
 * @description Implements math functions for calculator use.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Ethan Graupmann
 * @date 8/16/2024
 * @copyright Copyright © 2024 -_ by Ethan Graupmann. All rights reserved.
 */

//Internal Imports

//External Imports
let path = require('path');

// Set up Filename and Namespace
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}.`;

/**
 * 
 * @function add
 * @description Adds two numbers together and returns the result.
 * @param {integer} data1 The first number to be added.
 * @param {integer} data2 The second number to be added to the first
 * @returns {integer} The sum of the two input numbers.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function add(data1, data2) {
    //Setup function name, log starting information.
    let functionName = add.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data1 is: ${data1}`);
    console.log(`Data2 is: ${data2}`);

    let returnData = 0;
    // Checks for existence of numbers, then adds them together.
    if (data1 && data2) {
        returnData = data1 + data2;
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}

/**
 * @function subtract
 * @description Subtracts two numbers, one from another, and returns the result.
 * @param {integer} data1 The base number, the one that gets subtracted from.
 * @param {integer} data2 The second number, that which is subtracted from number 1.
 * @returns {integer} The difference of the two numbers.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function subtract(data1, data2) {
    //Setup function name, log starting information.
    let functionName = subtract.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data1 is: ${data1}`);
    console.log(`Data2 is: ${data2}`);

    let returnData = 0;
    // Checks for existence of numbers, then subtracts the second from the first.
    if (data1 && data2) {
        returnData = data1 - data2;
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}


/**
 * @function multiply
 * @description Multiplies two numbers together, and returns the result.
 * @param {integer} data1 The first number in the multiplication pair.
 * @param {integer} data2 The second number in the multiplication pair.
 * @returns {integer} The product of the two numbers.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function multiply(data1, data2) {
    //Setup function name, log starting information.
    let functionName = multiply.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data1 is: ${data1}`);
    console.log(`Data2 is: ${data2}`);

    let returnData = 0;
    // Checks for existence of numbers, then multiplies them together.
    if (data1 && data2) {
        returnData = data1 * data2;
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}

/**
* @function divide
* @description Divides two numbers- one by another- and returns the result.
* @param {integer} data1 The dividend of the pair.
* @param {integer} data2 The divisor of the pair.
* @returns {integer} The quotient of the two numbers.
* @author Ethan Graupmann
* @date 8/16/2024
*/
function divide(data1, data2) {
    //Setup function name, log starting information.
    let functionName = divide.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data1 is: ${data1}`);
    console.log(`Data2 is: ${data2}`);

    let returnData = 0;
    // Checks for existence of numbers, then divides the first by the second.
    if (data1 && data2) {
        returnData = data1 / data2;
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}

/**
 * @function factorial
 * @description Computes the factorial using recursion and returns the result.
 * @param {integer} data The function to compute factorial for.
 * @returns {integer} The factorial result.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function factorial(data) {
    //Setup function name, log starting information.
    let functionName = factorial.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data is: ${data}`);

    let returnData = 0;
    // Checks that the number provided is not undefined, then recursively multiplies to find the factorial.
    if (data) {
        if (data <= 1) {
            returnData = 1;
        } else {
            returnData = data * factorial(data - 1);
        }
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}

/**
 * @function exponential
 * @description Computes the value of a number to the power of another using recursion and returns the result.
 * @param {integer} data1 The base number of the exponential.
 * @param {integer} data2 The power to which the base number is raised.
 * @returns {integer} The exponent's result.
 * @author Ethan Graupmann
 * @date 8/16/2024
 */
function exponential(data1, data2) {
    //Setup function name, log starting information.
    let functionName = exponential.name;
    console.log(`Begin: ${namespacePrefix}${functionName}`);
    console.log(`Data1 is: ${data1}`);
    console.log(`Data2 is: ${data2}`);

    let returnData = 0;
    // Checks that both numbers provided are not undefined, then calculates the exponent.
    if (data1) {
        // If more than 0, multiply recursively.
        if (data2 > 0) {
            returnData = data1 * exponential(data1, data2 - 1);
        }
        // If less than 0, divide recursively.
        else if (data2 < 0) {
            returnData = exponential(data1, data2 + 1) / data1;
        }
        // If neither are true, Data2 must be 0. Return 1.
        else {
            returnData = 1;
        }
    }

    //Log ending information, and end of function.
    console.log(`returnData is: ${returnData}`);
    console.log(`End: ${namespacePrefix}${functionName}`);
    return returnData;
}


module.exports = {
    ['add']: (data1, data2) => add(data1, data2),
    ['subtract']: (data1, data2) => subtract(data1, data2),
    ['multiply']: (data1, data2) => multiply(data1, data2),
    ['divide']: (data1, data2) => divide(data1, data2),
    ['factorial']: (data) => factorial(data),
    ['exponential']: (data1, data2) => exponential(data1, data2)
}