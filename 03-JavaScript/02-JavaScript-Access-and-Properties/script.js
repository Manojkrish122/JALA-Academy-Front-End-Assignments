// =============================================================================
// JavaScript Access and Properties Script
// Demonstrating 'this', call() vs apply(), Counter, Getters/Setters & Prototypes
// =============================================================================

// -----------------------------------------------------------------------------
// Question 1: "this" Keyword Disappearing Button
// -----------------------------------------------------------------------------
// In the HTML inline handler: onclick="this.style.display='none';"
// Here is the programmatic equivalent:
const disappearingBtn = document.getElementById('disappearingBtn');
if (disappearingBtn) {
    disappearingBtn.addEventListener('click', function() {
        // 'this' refers to the HTML element that dispatched the click event
        this.style.display = 'none';
    });
}

// -----------------------------------------------------------------------------
// Question 2: call() vs apply() and Spotting the Difference
// -----------------------------------------------------------------------------
const runCallApplyBtn = document.getElementById('runCallApplyBtn');
const callApplyOutput = document.getElementById('callApplyOutput');

runCallApplyBtn.addEventListener('click', function() {
    // Target function that uses 'this' context and additional parameters
    function introduceDeveloper(role, location, experience) {
        return `Hello, I am ${this.firstName} ${this.lastName}. I work as a ${role} in ${location} with ${experience} years of experience.`;
    }

    // Context objects
    const candidateA = { firstName: "Kavya", lastName: "Nair" };
    const candidateB = { firstName: "Suresh", lastName: "Raina" };

    // 1. Invoking with call(): Arguments passed individually as comma-separated values
    const resultCall = introduceDeveloper.call(candidateA, "React UI Engineer", "Bangalore", 4);

    // 2. Invoking with apply(): Arguments passed collectively inside an Array
    const resultApply = introduceDeveloper.apply(candidateB, ["Full-Stack Developer", "Hyderabad", 5]);

    let output = "=== DEMONSTRATION OF call() vs apply() ===\n\n";
    output += `1. Output using .call():\n   ${resultCall}\n\n`;
    output += `2. Output using .apply():\n   ${resultApply}\n\n`;
    output += "---------------------------------------------------------\n";
    output += "KEY DIFFERENCE SPOTLIGHT:\n";
    output += "• Function.prototype.call(thisArg, arg1, arg2, arg3...)\n";
    output += "  Arguments are listed INDIVIDUALLY separated by commas.\n\n";
    output += "• Function.prototype.apply(thisArg, [arg1, arg2, arg3...])\n";
    output += "  Arguments are bundled together in a single ARRAY (or array-like object).\n\n";
    output += "Memory aid: 'C' for Call = Comma-separated; 'A' for Apply = Array!";

    callApplyOutput.textContent = output;
});

// -----------------------------------------------------------------------------
// Question 3: Standard Incremental Counter
// -----------------------------------------------------------------------------
let count = 0;
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const resetCountBtn = document.getElementById('resetCountBtn');

incrementBtn.addEventListener('click', function() {
    count += 1;
    countDisplay.textContent = count;
});

resetCountBtn.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
});

// -----------------------------------------------------------------------------
// Question 4: Counter with Getter and Setter Accessors
// -----------------------------------------------------------------------------
const runAccessorCounterBtn = document.getElementById('runAccessorCounterBtn');
const accessorOutput = document.getElementById('accessorOutput');

runAccessorCounterBtn.addEventListener('click', function() {
    // Counter object employing getter and setter accessors
    const smartCounter = {
        _internalValue: 10, // private backing store
        
        // Getter accessor: intercepts read access
        get count() {
            return `[Accessor GET] Current count is: ${this._internalValue}`;
        },

        // Setter accessor: intercepts write access with validation
        set count(newValue) {
            if (typeof newValue !== 'number') {
                throw new TypeError("Counter value must be a valid number!");
            }
            if (newValue < 0) {
                console.warn("Counter cannot be negative. Resetting to 0.");
                this._internalValue = 0;
            } else {
                this._internalValue = newValue;
            }
        }
    };

    let log = "=== Counter with Getter & Setter Accessors ===\n\n";
    log += `Initial state via Getter: ${smartCounter.count}\n`;
    
    // Using Setter to update value
    smartCounter.count = 25;
    log += `After setting smartCounter.count = 25:\n  ${smartCounter.count}\n\n`;

    // Incrementing via getter and setter
    smartCounter.count = smartCounter._internalValue + 1;
    log += `After incrementing (+1):\n  ${smartCounter.count}\n\n`;

    // Attempting invalid negative assignment
    smartCounter.count = -5;
    log += `After setting smartCounter.count = -5 (validated by setter):\n  ${smartCounter.count}`;

    accessorOutput.textContent = log;
});

// -----------------------------------------------------------------------------
// Question 5: Add Properties via Object Prototype
// -----------------------------------------------------------------------------
const runPrototypeBtn = document.getElementById('runPrototypeBtn');
const prototypeOutput = document.getElementById('prototypeOutput');

runPrototypeBtn.addEventListener('click', function() {
    // 1. Existing Constructor Function
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Creating instance before adding prototype property
    const candidate1 = new Person("Ananya", "Deshmukh", 26);

    // 2. Adding new properties and methods to existing function using Prototype
    Person.prototype.gender = "Female"; // Shared prototype property
    Person.prototype.nationality = "Indian";

    Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName} (${this.gender}, ${this.nationality})`;
    };

    // Creating second instance after prototype definition
    const candidate2 = new Person("Rajesh", "Verma", 29);
    // Overriding prototype property for candidate2
    candidate2.gender = "Male";

    let result = "=== Adding Properties using Object Prototype ===\n\n";
    result += `Candidate 1: ${candidate1.getFullName()}\n`;
    result += `-> Inherited gender from Person.prototype: "${candidate1.gender}"\n\n`;
    
    result += `Candidate 2: ${candidate2.getFullName()}\n`;
    result += `-> Own property gender: "${candidate2.gender}"\n\n`;

    result += "Why Prototypes Matter:\n";
    result += "• Memory Efficiency: Methods added to prototype are stored ONCE in memory and shared across all instances.\n";
    result += "• Dynamic Inheritance: All existing and new instances instantly inherit updates made to the prototype.";

    prototypeOutput.textContent = result;
});

