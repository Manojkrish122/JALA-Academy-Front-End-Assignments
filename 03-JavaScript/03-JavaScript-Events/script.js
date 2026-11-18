// =============================================================================
// JavaScript Events, Validation & Cookies Script
// Demonstrating Event Listeners, Form Validation, Console Debugging, Cookies & JSON
// =============================================================================

// -----------------------------------------------------------------------------
// Question 1: Add Event Listener to Button to Display Current Date and Time
// -----------------------------------------------------------------------------
const dateTimeBtn = document.getElementById('dateTimeBtn');
const dateTimeDisplay = document.getElementById('dateTimeDisplay');

dateTimeBtn.addEventListener('click', function() {
    const now = new Date();
    
    // Formatting date and time nicely
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    const formattedTime = now.toLocaleTimeString('en-US');
    
    dateTimeDisplay.textContent = `📅 Current Date: ${formattedDate}\n⏰ Current Time: ${formattedTime}\n⚡ Timestamp:    ${now.toISOString()}`;
});

// -----------------------------------------------------------------------------
// Question 2: JavaScript Form Validation (Non-empty input check)
// -----------------------------------------------------------------------------
const studentRegistrationForm = document.getElementById('studentRegistrationForm');
const candidateNameInput = document.getElementById('candidateNameInput');
const validationFeedback = document.getElementById('validationFeedback');

studentRegistrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default page reload

    const enteredName = candidateNameInput.value.trim();

    // Validation rule: The textbox doesn't need to be empty (must contain characters)
    if (enteredName === "" || enteredName.length === 0) {
        validationFeedback.className = "validation-message val-error";
        validationFeedback.textContent = "❌ Validation Failed: Name field cannot be empty! Please provide a valid full name.";
        candidateNameInput.focus();
    } else {
        validationFeedback.className = "validation-message val-success";
        validationFeedback.textContent = `✅ Validation Passed: Registration accepted for candidate "${enteredName}".`;
    }
});

// -----------------------------------------------------------------------------
// Question 3: How console.log() can be used for Debugging
// -----------------------------------------------------------------------------
const runConsoleDemoBtn = document.getElementById('runConsoleDemoBtn');
const consoleOutput = document.getElementById('consoleOutput');

runConsoleDemoBtn.addEventListener('click', function() {
    // 1. console.log(): General purpose string and object logging
    console.log("%c[DEBUG LOG] Initializing Application Health Check...", "color: #0284c7; font-weight: bold;");

    // 2. Logging variable states & objects
    const debugUser = { id: 101, username: "candidate_01", role: "Frontend Dev", active: true };
    console.log("Inspecting user object state:", debugUser);

    // 3. console.warn(): Highlights potential issues without halting execution
    console.warn("[WARNING] Deprecated API call simulated: Please update to modern ES6 syntax!");

    // 4. console.error(): Signals runtime exceptions or network failures
    console.error("[ERROR] Simulated Network Timeout: HTTP 504 Gateway Timeout on /api/data");

    // 5. console.table(): Formats tabular arrays of objects into neat visual tables
    const learners = [
        { id: 1, name: "Aarav", course: "HTML5 & CSS3", score: 98 },
        { id: 2, name: "Priya", course: "JavaScript ES6", score: 95 },
        { id: 3, name: "Vikram", course: "AngularJS", score: 92 }
    ];
    console.table(learners);

    // 6. console.time() and console.timeEnd(): Benchmarking algorithm performance
    console.time("Array Transformation Benchmark");
    const transformed = Array.from({ length: 10000 }, (_, i) => i * 2);
    console.timeEnd("Array Transformation Benchmark");

    consoleOutput.textContent = "✅ Console debugging messages dispatched!\n\nPlease open your browser DevTools (Press F12 -> Console tab) to inspect:\n- Styled console.log()\n- Formatted console.table()\n- console.warn() warning message\n- console.error() error message\n- console.time() performance benchmark";
});

// -----------------------------------------------------------------------------
// Question 4: Functions to Set, Get and Check a Cookie in a Single Program
// -----------------------------------------------------------------------------
const cookieUserNameInput = document.getElementById('cookieUserNameInput');
const cookieStatusDisplay = document.getElementById('cookieStatusDisplay');
const setCookieBtn = document.getElementById('setCookieBtn');
const getCookieBtn = document.getElementById('getCookieBtn');
const checkCookieBtn = document.getElementById('checkCookieBtn');
const deleteCookieBtn = document.getElementById('deleteCookieBtn');

const COOKIE_KEY = "jala_candidate_user";

// Function 1: Set a Cookie with Expiration in Days
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    // Using SameSite=Lax and path=/
    document.cookie = `${encodeURIComponent(cname)}=${encodeURIComponent(cvalue)};${expires};path=/;SameSite=Lax`;
}

// Function 2: Get a Cookie by Name
function getCookie(cname) {
    const name = encodeURIComponent(cname) + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function 3: Check if Cookie Exists
function checkCookie(cname) {
    const user = getCookie(cname);
    if (user !== "") {
        return { exists: true, value: user };
    } else {
        return { exists: false, value: null };
    }
}

// UI Event Handlers for Cookie Operations
setCookieBtn.addEventListener('click', function() {
    const val = cookieUserNameInput.value.trim() || "Priya_Sharma";
    setCookie(COOKIE_KEY, val, 7);
    cookieStatusDisplay.textContent = `🍪 Cookie Saved Successfully!\nKey:   "${COOKIE_KEY}"\nValue: "${val}"\nExpires: 7 Days from now\nRaw document.cookie: "${document.cookie}"`;
});

getCookieBtn.addEventListener('click', function() {
    const fetchedVal = getCookie(COOKIE_KEY);
    if (fetchedVal) {
        cookieStatusDisplay.textContent = `🔎 Fetched Cookie Value:\nKey:   "${COOKIE_KEY}"\nValue: "${fetchedVal}"`;
    } else {
        cookieStatusDisplay.textContent = `⚠️ Cookie "${COOKIE_KEY}" not found! (It may have expired or was not yet set).`;
    }
});

checkCookieBtn.addEventListener('click', function() {
    const checkResult = checkCookie(COOKIE_KEY);
    if (checkResult.exists) {
        cookieStatusDisplay.textContent = `✅ Cookie Exists!\nWelcome back, ${checkResult.value}!`;
    } else {
        cookieStatusDisplay.textContent = `ℹ️ Cookie Does Not Exist.\nPlease enter a username and click "Set Cookie".`;
    }
});

deleteCookieBtn.addEventListener('click', function() {
    // Delete cookie by setting expiry date to past timestamp
    setCookie(COOKIE_KEY, "", -1);
    cookieStatusDisplay.textContent = `🗑️ Cookie "${COOKIE_KEY}" has been deleted (expired in the past).\nRaw document.cookie: "${document.cookie}"`;
});

// -----------------------------------------------------------------------------
// Question 5: JSON Object & Dot Notation Access
// -----------------------------------------------------------------------------
const runJsonDemoBtn = document.getElementById('runJsonDemoBtn');
const jsonOutput = document.getElementById('jsonOutput');

runJsonDemoBtn.addEventListener('click', function() {
    // 1. JSON String format
    const rawJsonString = `{
        "candidate": {
            "fullName": "Kiran Rao",
            "careerGoal": "Senior UI Specialist",
            "experienceYears": 4,
            "skills": ["JavaScript", "HTML5", "CSS3", "AngularJS"],
            "education": {
                "degree": "B.Tech in Computer Science",
                "university": "State Technical University"
            },
            "isInterviewReady": true
        }
    }`;

    // 2. Parse JSON string to JavaScript Object
    const parsedData = JSON.parse(rawJsonString);

    // 3. Access attributes using Dot Notation
    const name = parsedData.candidate.fullName;
    const goal = parsedData.candidate.careerGoal;
    const primarySkill = parsedData.candidate.skills[0];
    const degree = parsedData.candidate.education.degree;
    const status = parsedData.candidate.isInterviewReady;

    let output = "=== Accessing JSON Properties Using Dot Notation ===\n\n";
    output += `parsedData.candidate.fullName          -> "${name}"\n`;
    output += `parsedData.candidate.careerGoal        -> "${goal}"\n`;
    output += `parsedData.candidate.skills[0]         -> "${primarySkill}"\n`;
    output += `parsedData.candidate.education.degree  -> "${degree}"\n`;
    output += `parsedData.candidate.isInterviewReady  -> ${status}\n\n`;
    output += "Dot notation provides intuitive, typed traversal through nested object structures!";

    jsonOutput.textContent = output;
});

