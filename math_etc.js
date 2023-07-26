//Area calculations
let width = 3;
let length = 7;

function calculateAreaOfRectangle(width, length) {
  return width * length;
}
let area = calculateAreaOfRectangle(width, length);
console.log("Area calculation: " + area + "\n");

//Function for converting tempretures from celcius to fr
function convertCelciusToFr(c) {
  return c * (9 / 5) + 32;
}
console.log(`Celcius to Fr: ${convertCelciusToFr(3)}`);

function convertFrToCelcius(f) {
  return (f - 32) * (5 / 9);
}
console.log(`Fr to Celcius: ${convertFrToCelcius(70)}`);

//Arrays Array methods and Objects
/* 
Write a JS function that takes an array of numbers as input and
returns the sum of all elements in the array
 */
let numbers = [2, 2, 3, 4, 5, 6, 7, 8, 9];
function sumNumberData(numbers) {
  let sum = 0;

  for (let number = 0; number < numbers.length; number++) {
    sum += numbers[number];
  }
  return sum;
}

console.log(`Sum of numbers in Array: ${sumNumberData(numbers)}`);

/* 
Create an object representing a book with properties like title, author, 
and year of publication. Implement a method to display the books details
*/
const book = {
  title: "You are redeemed",
  author: "J The C",
  yearOfPublication: "Done",
  displayBookDetails: function () {
    console.log(
      `Here are the book details\nTitle: ${this.title} | Author: ${this.author} | Year Published: ${this.yearOfPublication}`
    );
  },
};
//call the displayBookDetails method in book object
book.displayBookDetails();

//Modifying Arrays plus more practice
/**
 * Write a JS function that takes an array of strings and a new string as inputs. The function should add the new string to the end of the array and return the updated array.
 *
 * let words = ["hello","bright","story","country",];
 * let newString = "celebrate";
 * fn(arrayOfStrings, newString){
 *    arrayOfStrings.push(newString);
 *    return arrayOfStrings;
 * }
 */

let storage = ["hello", "bright", "story", "country"];
let newString = "celebrate";

//add newItem(s) to beginning of storage
function addToStorage(storageBox, newItem) {
  storageBox.unshift(newItem);
  console.log(storageBox);
  return storageBox;
}

console.log(`Pushing to Array Storage: ${addToStorage(storage, newString)}`);

/**
 * Write a JS function that takes an array of numbers as
 * input. The function should remove the first and last
 * elements from the array and return the modified array.
 * let numbers = [1,2,3,4,5];
 * Fn(arrayOfNumbers){
 *  return arrayOfNumbers.shift() && arrayOfNumbers.pop
 * ();
 * }
 */

let numbersArray = [1, 2, 3, 4, 5];

function removeFirstLast(arrayOfNumbers) {
  arrayOfNumbers.shift();
  arrayOfNumbers.pop();
  console.log(numbersArray);

  return arrayOfNumbers;
}

console.log(
  `Removed first and last elements: ${removeFirstLast(numbersArray)}`
);

// Modifying arrays
/**
 * write a JS function that takes an array of numbers and
 * replaces all negative numbers with zero. Return the 
 * modified array.
 * 
 * fn name(arrayOfNumbers){
 *   for(let i = 0; i !== arrayOfNumbers.length; i++){
 *      if(arrayOfNumbers[i] < 0){
 *         arrayOfNumbers[i] = 0;
 *      }
 *      else{
 *          console.log("There is no negative number")
 *      }
 *   }
 * return arrayOfNumbers;
 * }
 */

let moreNumbers = [1, 4, 3, 5, -2, -3, 6, -8, 9, -5];

function replaceNegativeNumbers(array){
    for(let i = 0; i !== array.length; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
        else{
            console.log(`At index: ${i} No negative number here - ${array[i]}`)
        }
    }
    return array;
}

console.log(`modifying arrays: replace zeros: ${replaceNegativeNumbers(moreNumbers)}`)

//MAATTHH!!!!!!!!
/**
 * Write a JS function that takes two numbers as inputs and returns the sum of their squares.
 */
// let firstNumber = 2;
// let secondNumber = 4;

function sumofSquares(number1, number2){
    firstSquare = number1 * number1;
    secondSquare = number2 * number2;
    return firstSquare + secondSquare;
}
console.log(`Squares [] : ${sumofSquares(5,8)}`)

/**
 * Create a function that calculates the area of a 
 * triangle given its base and height.
 * 
 */

function areaOfTriangle(base, height){
    let area = base * height / 2;
    return area;
}
console.log(`Area of triangle given base and height: ${areaOfTriangle(3,7)}`)

/**
 * Write a JS function that takes two numbers as inputs 
 * and returns the first number raised to the power of 
 * the second number.
 * 
 */