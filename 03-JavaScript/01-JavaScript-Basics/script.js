// =============================================================================
// JavaScript Basics Assignment Script
// Demonstrating Comments, Array Sorting, For/In, Property Access, Hoisting & Strict Mode
// =============================================================================

// Question 1: Single Line Comment
// This is a single-line comment using two forward slashes.

/*
   Question 1: Multi-line Comment
   This is a multi-line comment block.
   It spans across several lines and is wrapped inside forward slash and asterisk.
*/

// Initial data array for Question 2
const defaultFruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Grapes"];
let currentFruits = [...defaultFruits];

// -----------------------------------------------------------------------------
// Question 2: Sort Fruit Array in Descending Order on Button Click
// -----------------------------------------------------------------------------
const sortFruitsBtn = document.getElementById('sortFruitsBtn');
const resetFruitsBtn = document.getElementById('resetFruitsBtn');
const fruitsOutput = document.getElementById('fruitsOutput');

function displayFruits() {
    fruitsOutput.textContent = `Current Fruits Array:\n[ "${currentFruits.join('", "')}" ]`;
}
displayFruits();

sortFruitsBtn.addEventListener('click', function() {
    // Sort ascending, then reverse for descending (Z to A)
    currentFruits.sort().reverse();
    fruitsOutput.textContent = `✅ Sorted Descending (Z-A):\n[ "${currentFruits.join('", "')}" ]`;
});

resetFruitsBtn.addEventListener('click', function() {
    currentFruits = [...defaultFruits];
    displayFruits();
});

// -----------------------------------------------------------------------------
// Question 3: Program with FOR/IN Loop
// -----------------------------------------------------------------------------
const runForInBtn = document.getElementById('runForInBtn');
const forInOutput = document.getElementById('forInOutput');

runForInBtn.addEventListener('click', function() {
    // Sample object to iterate over
    const candidateProfile = {
        name: "Rohit Sharma",
        targetRole: "Front-End Developer",
        experienceYears: 3,
        primarySkill: "JavaScript ES6+",
        status: "Interview Ready"
    };

    let logText = "Iterating over 'candidateProfile' object using FOR/IN:\n-----------------------------------------------------\n";
    for (let propertyKey in candidateProfile) {
        if (candidateProfile.hasOwnProperty(propertyKey)) {
            logText += `Key: ${propertyKey.padEnd(16)} -> Value: ${candidateProfile[propertyKey]}\n`;
        }
    }
    forInOutput.textContent = logText;
});

// -----------------------------------------------------------------------------
// Question 4: Person Object & 2 Different Ways of Accessing Properties
// -----------------------------------------------------------------------------
const accessPersonBtn = document.getElementById('accessPersonBtn');
const personOutput = document.getElementById('personOutput');

accessPersonBtn.addEventListener('click', function() {
    // Create person object with firstname and lastname
    const person = {
        firstname: "Priya",
        lastname: "Venkatesh"
    };

    // Way 1: Dot Notation (person.firstname)
    const way1First = person.firstname;
    const way1Last = person.lastname;

    // Way 2: Bracket Notation (person["firstname"])
    const way2First = person["firstname"];
    const way2Last = person["lastname"];

    let output = "Object: person = { firstname: 'Priya', lastname: 'Venkatesh' }\n\n";
    output += `Method 1 (Dot Notation):     person.firstname  = "${way1First}", person.lastname  = "${way1Last}"\n`;
    output += `Method 2 (Bracket Notation): person["firstname"] = "${way2First}", person["lastname"] = "${way2Last}"\n\n`;
    output += "Note: Bracket notation also allows dynamic variable keys, e.g., person[keyName].";

    personOutput.textContent = output;
});

// -----------------------------------------------------------------------------
// Question 5: Variable Hoisting (Initialization first, then Declaration)
// -----------------------------------------------------------------------------
const runHoistingBtn = document.getElementById('runHoistingBtn');
const hoistingOutput = document.getElementById('hoistingOutput');

runHoistingBtn.addEventListener('click', function() {
    // Hoisting Demonstration:
    // In JavaScript with 'var', declarations are hoisted to the top of the scope during creation phase.
    
    // 1. Initialization (Assigning value first)
    hoistedScore = 95;
    
    // 2. Declaration (Declaring variable later with var)
    var hoistedScore;

    let explanation = "Variable Hoisting Execution Result:\n";
    explanation += `hoistedScore value is: ${hoistedScore}\n\n`;
    explanation += "Explanation of Hoisting Mechanism:\n";
    explanation += "1. Code written:\n";
    explanation += "   hoistedScore = 95;  // Assignment first\n";
    explanation += "   var hoistedScore;   // Declaration later\n\n";
    explanation += "2. How JS engine interprets it under the hood:\n";
    explanation += "   var hoistedScore;   // Declaration hoisted to top of scope\n";
    explanation += "   hoistedScore = 95;  // Assignment executed at line of occurrence\n\n";
    explanation += "Note: Unlike 'var', modern 'let' and 'const' are also hoisted but reside in the 'Temporal Dead Zone' (TDZ), throwing a ReferenceError if accessed prior to declaration.";

    hoistingOutput.textContent = explanation;
});

// -----------------------------------------------------------------------------
// Question 6: Strict Mode ("use strict";) & Undeclared Variable Error
// -----------------------------------------------------------------------------
const runStrictModeBtn = document.getElementById('runStrictModeBtn');
const strictModeOutput = document.getElementById('strictModeOutput');

runStrictModeBtn.addEventListener('click', function() {
    let resultLog = "";

    try {
        // We invoke an isolated function executing in strict mode
        (function strictTest() {
            "use strict";
            // In strict mode, assigning to an undeclared variable without 'let', 'const', or 'var'
            // throws an explicit ReferenceError instead of silently creating a global variable!
            undeclaredVariable = 500; // Will throw ReferenceError!
        })();
    } catch (error) {
        resultLog += `🚨 Caught Expected Exception in "use strict" mode:\n`;
        resultLog += `Error Name:    ${error.name}\n`;
        resultLog += `Error Message: ${error.message}\n\n`;
        resultLog += `Why does this happen?\n`;
        resultLog += `Without "use strict", assigning to undeclaredVariable would silently pollute the global window object (window.undeclaredVariable = 500).\n`;
        resultLog += `With "use strict", JavaScript prevents accidental global variable leaks by raising a strict ReferenceError!`;
    }

    strictModeOutput.className = "output-box error-box";
    strictModeOutput.textContent = resultLog;
});

