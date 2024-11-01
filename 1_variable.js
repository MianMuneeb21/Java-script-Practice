/**
 * Create variables for your name, age, and favorite color, then display them in a sentence.
 */

let name = "Mian Muneeb";
let age = 20; 
let favoriteColor = "black"; 

console.log("Hello, my name is " + name + ", I am " + age + " years old and my favorite color is " + favoriteColor + ".");

/**
 * Write a program that swaps the values of two variables.
 */

let q = 44;
let w = 45;
let temp = q;
q = w;
w = temp;

console.log("After swapping: q = " + q + ", w = " + w);

/**
 * Calculate the area of a rectangle with given width and length stored in variables.
 */

let width = 2
let lenght = 4
let area = lenght * width
console.log ("The area of triangle is"  + area )

/**
 * Build a simple calculator for addition, subtraction, multiplication, and division.
 */

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return result;
}

console.log(calculate(18, 5, '+'));
console.log(calculate(19, 5, '-'));
console.log(calculate(20, 5, '*'));
console.log(calculate(10, 8, '/'));

/**
 * Calculate the remainder when a number is divided by 3.
 */

let number = 8;
let remainder = number % 3;

console.log(remainder);

/**
 * Compare the age of two people and determine who is older.
 */

let age1 = 25;
let age2 = 30;

if (age1 > age2) {
    console.log("Person 1 is older.");
} else if (age2 > age1) {
    console.log("Person 2 is older.");
} else {
    console.log("Both are the same age.");
}

/**
 * Write a program that checks if a number is even or odd.
*/

let number1 = 7;

if (number * 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}