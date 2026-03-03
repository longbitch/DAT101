"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Use JavaScript to calculate the following expression, ensuring the result is -34:")
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut("Original expression 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("Modified expression 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in the answer)");
const millimeters = 25000 + 340;
const inchPrMillimeters = 25.4;
let sumPart2 = millimeters / inchPrMillimeters;
sumPart2 = sumPart2.toFixed(2);
printOut(`25 meters and 34 centimeters is ${sumPart2} inches`)
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The task must be solved with primitives.");
const p3days = 3, p3Hours = 14, p3Minutes = 14, p3Seconds = 34;
let p3Answer = 
    (p3days * 24 * 60) +
    (p3Hours * 60) +
    p3Minutes +
    (p3Seconds / 60)
p3Answer = p3Answer.toFixed(2)
printOut("3 days, 12 hours, 14 minutes and 45 seconds is " + p3Answer + "minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The task must be solved with primitives.");
const p4Minutes = 6322.52;
let p4Rest = p4Minutes / (24*60);
const p4Days = Math.floor(p4Rest);
p4Rest = p4Rest - p4Days;
p4Rest = p4Rest * 24;
const p4Hours = Math.floor(p4Rest);
p4Rest = p4Rest - p4Hours;
p4Rest = p4Rest * 60;
const p4Minute = Math.floor(p4Rest);
p4Rest -= p4Minute;
p4Rest *= 60;
const p4Seconds = Math.floor(p4Rest);

printOut("6,322.52 minutes is " +
    p4Days + " days, " +
    p4Hours + " hours, " +
    p4Minute + " minutes, " +
    p4Seconds + " seconds"

);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Convert 54 dollars to Norwegian kroner, and print the price for both: <br>
NOK → USD and USD → NOK.<br>
Use 76 NOK = 8.6 USD as the exchange rate.<br>
The answer must be in whole "Kroner" and whole "dollars"<br>
`);

const exchangeNOK = 76 / 8.6
let USD = 54;
let NOK = USD * exchangeNOK;
printOut("USD -> NOK = " + NOK.toFixed(2));
const exchangeUSD = 8.6 / 76;
USD = NOK * exchangeUSD;
printOut("NOK -> USD = " + USD.toFixed(2));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Create a variable that contains the following text:
   "There is much between heaven and earth that we do not understand."
 Print the number of characters in the text.
  <ul>
   <li>Print the character at position number 19.</li>
   <li>Print the characters starting at position number 35 and 8 characters forward.</li>
   <li>Print the index at which "earth" starts in the text.</li>
  </ul>
`);

const p6Text = "There is much between heaven and earth that we do not understand.";
printOut(p6Text);
printOut("Number of characters in text: " + p6Text.length);
printOut("Character at pos. #19: " + p6Text.charAt(19))
printOut("Characters starting at pos. #35 and 8 characters forward: " + p6Text.substring(35, 35 + 8));
printOut("Index which 'earth' starts in the text: " + p6Text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* I am aware that my text in the unordered lists aren't closed, I will however correct it further on as this is the best practice */
printOut(`
    Comparison, print the values for the following expressions (evaluate whether the statements are true):
    <ul>
        <li> Is 5 greater than 3?
        <li> Is 7 greater than or equal to 7?
        <li> Is "a" greater than "b"?
        <li> Is "1" less than "a"?
        <li> Is "2500" less than "abcd"?
        <li> "arne" is not equal to "thomas".
        <li> (2 equals 5) is this statement true?
        <li> ("abcd" is greater than "bcd") is this statement false?
    </ul>
`);

printOut(`Is 5 greater than 3? : ${5 > 3}`); 
printOut(`Is 7 greater than, or equal to 7? : ${7 >= 7} `);
printOut(`Is "a" greater than "b"? ${"a" > "b"} NOTE: This is due to the strings representation in ASCII/Unicode as the decimal value of 97` );


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
    Convert and print the following expressions:
    <ul>
        <li> from text "254 to a number </li>
        <li> from text "57.23" to a number </li>
        <li> from text "25 kroner" to a number </li>
    </ul
`);

printOut(`From text "254" to a number: ${Number("254")}`);
printOut(`From text "57.23" to a number: ${Number("57.23")}`);
printOut(`From text "25 kroner" to a number: ${Number("25 kroner")}`);
printOut(newLine);
printOut("Using the Number() function returns NaN for the text '25 kroner'. For this text we can instead use the function parseInt()")
printOut(`From text "25 kroner" to a number: ${parseInt("25 kroner")}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Create a variable 'r' and randomly generate a number from 1 to 360 (1 >= r <= 360).");
printOut(newLine);
let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number between 1 and 360 using floor: " + r);
printOut("Random number between 1 and 360 using ceil: " + (Math.ceil(Math.random() * 360)));
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`Use modulus (%) to calculate how many weeks and days are in 131 days.`);
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;
printOut("131 days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);