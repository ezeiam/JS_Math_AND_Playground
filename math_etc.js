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

function raiseIt(number1, number2){
    return number1 ** number2
}
console.log(`Raising bases to powers: ${raiseIt(3,2)}`)

/**
 * Write a JS function that takes a number as input and
 * returns true if it is even (divisible by 2) and false 
 * if it is odd.
 * 
 */

function isItEven(number){
    if(number % 3 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(`Is it even: ${isItEven(3)}`)

/**
 * Write a JS function that takes a number as input and
 * returns the next even number greater than the input
 * 
 */
// Return to MATH!

function returnGreater(number){
    return number 
}


// Return to MATH!

//More data structures
/**
 * write a JS function that takes an array of 
 * strings and returns the total number of 
 * characters in the array
 * 
 */

let stringArray = ["world","school","fun","create","cool"]

function lengthOfstringsArray(array){
    let totalCharacters = 0;
    for(let i =0; i !== array.length; i++){
       totalCharacters += array[i].length
    }
    return totalCharacters;
}
console.log(`Total characters: ${lengthOfstringsArray(stringArray)}`)

/**
 * Create an object representing a school board and implement a 
 * method to display all the information
 * 
 */

const schoolBoard = {
    trustee: "James Cool",
    council: ["Ryan","Patrick","Merideth","Susan"],
    districts: ["Valley District","SunCrest District","OrangSmile District"],
    displayBoardDetails: function() {
        const details = `School board:\nTrustee - ${this.trustee} | Council - ${this.council} |\nDistrict - ${this.districts}`;
        console.log(details)
    }
}
schoolBoard.displayBoardDetails();

/**
 * Write a JS function that takes an array of numbers and returns the index of the first negative number in the array. If there are no negative numbers return -1
 * 
 * OK!...
 */

function search_for_index(array_of_numbers){
    for(let i = 0; i < array_of_numbers.length; i++){
        if(array_of_numbers[i] < 0){
        console.log(`Negative: ${array_of_numbers[i]}`)
        }
        else{
        }
    }
    return -1;

}
let numberNew = [3, 4, -2, -4, 2, 5] 
console.log(search_for_index(numberNew));

// Back to JS Objects
const person = {
     name: 'Fred',
     occupation: 'farmer',
     pet: true,
     display: function(){
        console.log(`Name: ${this.name}\nOccupation: ${this.occupation} Pet: ${this.pet}`)
     }
}
person.city = 'britaTown'
delete person.occupation
person.occupation = 'Gardener'
person.display()
console.log(person)
console.log("display" in person)

let string_data = "pet"
function check_existence(key){
    return key in person;
}
console.log(`Your cool check program: ${check_existence(string_data)}`);