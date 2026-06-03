// Confirm JS is linked
console.log("JS file is linked!");

/* ===============================
   PART 1: SYNTAX PRACTICE
   =============================== */

// PART 1.A: COMPARISON OPERATORS
console.log(`
PART 1.A COMPARISON OPERATORS`); 

let compA = 5;
let compB = 8;
let compC = "8";

// Example
console.log(compA > compC);

// 1) Is compA less than compB?
console.log(compA < compB);

// 2) Is compB greater than or equal to compC?
console.log(compB >= compC);

// 3) Is compB less than or equal to compA?
console.log(compB <= compA);

// 4) Is compB equal to compC?
console.log(compB == compC);

// 5) Is compB strictly equal to compC in value and type?
console.log(compB === compC);

// 6) Is compA not equal to compC?
console.log(compA != compC);

// 7) Is compB not equal to compC?
console.log(compB != compC);

// 8) Is compB strictly not equal to compC?
console.log(compB !== compC);




/* ===============================
   PART 1.B: CONDITIONAL STATEMENT
   =============================== */
console.log(`
PART 1.B CONDITIONAL STATEMENT`); 

let goalA = 15;
let goalB = 30;
let goalC = 90;

// 9)
if (goalA < 30) {
  console.log(`Student A is studying less than 30 minutes each day. Make sure their study methods are effective.`);
}

// 10)
if (goalB >= 30) {
  console.log(`Student B's goal is to study 30 minutes or more.`);
} else {
  console.log(`Student B is planning to study less than 30 minutes each day. Check on their availability.`);
}

// 11)
if (goalC < 30) {
  console.log(`Student C is studying less than 30 minutes each day. Make sure their study methods are effective.`);
} else if (goalC <= 45) {
  console.log(`Student C's goal is to study between 30 and 45 minutes. Keep encouraging them.`);
} else {
  console.log(`Student C's goal is to study more than 45 minutes each day. Check in on their capacity.`);
}




/* ==========================================
   PART 1.C: ARITHMETIC OPERATORS & TYPE CONVERSION
   ========================================== */
console.log(`
PART 1.C ARITHMETIC OPERATORS & TYPE CONVERSION`); 

let mathA = 8;
let mathB = "4";
let mathC = 2;

// Example
console.log(mathA + mathC);

// 12) What is mathA plus mathB?
console.log(mathA + mathB);

// 13) Why doesn't mathA plus mathB equal 12?
console.log("Because mathB is a string, so + performs string concatenation instead of addition.");

// 14) Make mathA + mathB equal 12.
console.log(mathA + Number(mathB));

// 15) What is mathC minus mathB?
console.log(mathC - mathB);

// 16) What is mathA multiplied by mathB?
console.log(mathA * mathB);

// 17) What is 5 raised to the power of 3?
console.log(5 ** 3);

// 18) What is 12 divided by 6?
console.log(12 / 6);

// 19) What is the remainder when dividing 13 by 3?
console.log(13 % 3);

// 20) Add 1 to mathA using increment.
mathA++;
console.log(mathA);

// 21) Subtract 1 from mathA using decrement.
mathA--;
console.log(mathA);

// 22) Explain the difference.
console.log(100 + 5 * 2);     
console.log((100 + 5) * 2);   
console.log("The first multiplies before adding. The second adds first because of parentheses.");




/* ===============================
   PART 2: TEMPERATURE CONVERSION APP
   =============================== */

// Pseudocode:
// 1. Prompt user for Fahrenheit.
// 2. Convert input from string to number.
// 3. Apply Celsius formula: (5/9) * (F − 32).
// 4. Insert Celsius result in #celcius paragraph.
// 5. Based on Fahrenheit:
//      - If < 65: show cold message
//      - If >= 65: show warm message
//      - Else: show error message
// 6. Use document.getElementById().innerHTML

let fahrInput = prompt("Enter temperature in Fahrenheit:");

// Convert string → number
let fahr = Number(fahrInput);

// Calculate Celsius
let celcius = (5 / 9) * (fahr - 32);

// Display Celsius value
document.getElementById("celcius").innerHTML = celcius;

// Display message
