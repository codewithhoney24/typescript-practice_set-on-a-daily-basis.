import inquirer from "inquirer";
import { AsyncLocalStorage } from "async_hooks";
import { futimes } from "fs";
import { title } from "process";

import PromptSync from  "prompt-sync";

// OPERATORS
// ARITHMETIC OPERATORS
// ADDITIONS
// EXAMPLES

let number = 1;
let numbers = 2;
console.log(number + numbers);
// ANS = 3
let str1 = "1";
let str2 = "2";
console.log(str1 + str2);
// ANS = 12
let num1: number = 2;
let num2: number = 3;
let cart: number = num1 + num2;
console.log(cart);
// ANS = 5
let numOfFaculty = 4;
let numOfManagement = 3;
console.log(numOfFaculty + numOfManagement);
// ANS  = 7

// COMBINING OPERATORS
// EXAMPLE
let numOfFaculty1 = 4;
let numOfManagement1 = 3;
let numOfAbsentFaculty = 2;
console.log(numOfFaculty1 + numOfManagement1 - numOfAbsentFaculty);
// ANS = 5 

let numOfFacullty = 4;
let numOfManagementt = 3;
let numOfAbsentFacultyy = 2;
let numOfTotalFaculty = numOfFacullty *21;
console.log(numOfTotalFaculty);
// ANS = 84

let numOfFaaculty = 4;
let numOfMaanagement = 3;
let numOfAbsentFaaculty = 2;
let numOfTotalFaculty1 = numOfFaaculty *21;
let totalNumOfKg = 20;
console.log(totalNumOfKg /numOfTotalFaculty1 );

let result = 3 + 4 * 5;
console.log(result);
// ANS = 23

let result1 = 3 + 4 * 5;
result1++;
console.log(result1);
// //  ANS = 24

//   ARITHMETIC OPERATORS
//   SUBBTRACTION
//   EXAMPLES

 let tree = 5;
 let trees = 2;
 console.log(tree - trees);
  //  ANS = 3
 let flower = 1;
 let folwers = 2;
 console.log(flower - folwers);
 // ANS = -1
let cart1 : number = 5;
let num3 : number = 2;
let total : number = cart1 - num3 ;
console.log(total);
//  ANS = 3

//  ARITHMETIC OPERATORS
//   MULTIPLICATION
//   EXAMPLES

let bags: number = 4;
let apples : number = 5;
let totalApples : number = bags * apples ;
console.log(totalApples);
// //  ANS = 20
let chalk = 5;
let chalks = 2;
console.log( chalk * chalks);
// // ANS = 10

// ARITHMETIC OPERATORS
//   DIVISION
//   EXAMPLES

 let table = 4;
 let tables = 2;
 console.log( table / tables);
// // // ANS = 2
let totalApples1: number = 20;
let bags1 : number = 4;
let eachbags : number = totalApples1 / bags1;
console.log(eachbags);
// //  ANS = 5

// ARITHMETIC OPERATORS
// EXPONENTIATION
//   EXAMPLES

 let orange = 2;
 let oranges = 2;
 console.log(orange ** oranges);
// // // // ANS = 4

let layer: number = 5;
let mango : number = 5;
let power : number = layer ** 2 ;
console.log(power);
// // // //  ANS = 25

// // ARITHMETIC OPERATORS
// // MODULUS
// // EXAMPLES

let pencil = 10;
let pencils = 3;
console.log(pencil % pencils);
// // // ANS = 1
let apples1 = 5;
let bags2 = 2;
let reminder = bags2 % apples1 ;
console.log(reminder);
// // // //  ANS = 2  

// ASSIGNMENT OPERATORS
// EXAMPLE
let m8 = 5 ;
console.log(m8);
// // ANS = 5
m8 += 5 ;
console.log(m8);
// // ANS = 10
m8 -= 5 ;
console.log(m8);
// // ANS = 5
let c = 10 ;
c += 5 ;
console.log(c);
// ANS =15   (equivalent to c = c + 5, is now 15.)
let numb : number = 2;
numb += 4; // 6   numb = numb+4
console.log(numb);
// ANS = 6
let numb1 : number = 2;
numb += 2; // 6   numb = numb+2
console.log(numb1);
// ANS = 4
let numb2 : number = 2;
numb2 -= 2;  
console.log(numb2);
// // ANS = 0
let numb3 : number = 8;
numb1 -= 5;
console.log(numb3);
// ANS = 3


// UNARARY OPERATORS
// EXAMPLE
let num = 5;
++num;
--num;
++num;
--num;
++num;
--num;
++num;
--num;
console.log(num);
// ANS = 6

let numbers1 = 5;
++numbers1;
--numbers1;
--numbers1;
--numbers1;
--numbers1;
--numbers1;
--numbers1;
--numbers1;
console.log(numbers1);
// // ANS = -1

let numberss = 5;
--numberss;
++numberss;
--numberss;
++numberss;
--numberss;
++numberss;
--numberss;
console.log(numberss);
// // ANS = 4;

let i1  = 10;
//             11 + 12  + 6 + 11 - 2
let resullt = ++i1 +  ++i1 + 6 + --i1 -2;
console.log(resullt);
// ANS = 38


// COMPRASION OPERATORS
// EXAMPLE
let m9 = 5;
console.log(m9 == 5);
// ANS = TRUE
console.log(m9 === 5);
// ANS = TRUE
console.log(m9 != 5);
// ANS = FALSE
console.log(m9 > 8);
// ANS = FALSE
console.log(m9 < 8);
// ANS = TRUE
console.log(m9 >= 8);
// ANS = FALSE
console.log(m9 <= 8);
// ANS = TRUE

let a = 5;
let b = 2;
let isEqual = (a == b);
// ANS = FALSE
let isNotEqual = (a != b);
//  ANS = TRUE
let isGreaterThan =  !(a > b);
// ANS  = TRUE
let isLessThan =  !(a < b);
//  ANS = FALSE
let $num : number = 5;
let $num1  : number = 5;
console.log($num != $num1);
// ANS = FALSE

// LOGICAL OPERATORS
// EXAMPLE
let m7 = 5;
console.log(m7 >= 5 && m7 < 10);
// ANS = TRUE
console.log(m7 >  5 && m7 < 10);
// ANS = FALSE
console.log(m7 >= 5 || m7 < 10);
// ANS = TRUE
console.log(m7 > 5 || m7 < 10);
// ANS = TRUE
console.log(!( m7 < 10));
// ANS = FALSE
console.log(!( m7 > 10));
// ANS = TRUE

let a1 = 5;
let b1 = 2;

console.log((a1 > 0) && (b1 > 0));
// ANS = TRUE
console.log((a1 > 0) || (b1 > 0)); 
//  ANS = TRUE
console.log(!(a1 > 0));
// ANS  = FALSE

// LOGICAL STATEMENT
// IF , ELSE SATAEMENT
// EXAMPLE


const prompt =  PromptSync();
let z1 = prompt("Where does the people live?");
let correctAnswer = "Pakistan";
if(z1 == correctAnswer){
    console.log("correct");
}
// // ANS = correct

const name1 =prompt("what is your name");
console.log("Hello ! " + name1);
// ANS = Hello ! .....


let z3 = prompt("Where does the people live?");
let correctAnswer1 = "Pakistan";
if(z3 = correctAnswer1){
    console.log("correct");
}else{
    console.log("Wrong");
}
// ANS = correct

let isRaining  = true;
if (isRaining) {
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}
// ANS = Wear a raincoat.

let isRaining1  = false;
if (isRaining1) {
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}
// ANS = Wear sunglasses.

// SELF---CHECK QUIZ
let answer : string = "corrcet";
if(answer === "correct"){
console.log("you got it right");
} else {
    console.log("sorry! that's not correct");
}
//  ANS =sorry! that's not correct

// FRIEND CHEACKER GAME
// EXAMPLE
let isFriend : string = "Ameen";
if(isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend`);
} else {
    console.log(`${isFriend} is not your friend`);
}
//  ANS  = Ameen is your friend.

let isFriend1 : string = "Humza";
if(isFriend1 === "Ameen" || isFriend1 === "Daniyal") {
    console.log(`${isFriend1} is your friend`);
} else {
    console.log(`${isFriend1} is not your friend`);
}
//  ANS =   Hamza is not your friend.

let isFriends = await inquirer.prompt  ([{
    name : "name",
    type : "string",
    messeage : "enter your friend name: "
}]);
if(isFriends === "Ameen" || isFriends === "Daniyal") {
     console.log("MR Daniyal is your friend");
} else {
       console.log("Ameen is not your friend");
}
// ANS = MR Daniyal/ Ameen is /not friend

// ELSE-IF EXAMPLE

let  weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raincoat");
} else if (weather === "cloudy") {
    console.log("wear a light  jacket");
} else {
    console.log("wear a sunglassess");
}
//  ANS = WAER A LIGHT JACKET.

// EVALUATING A NUMBER GEME
// EXAMPLE
let guess : number = 7;
let target : number = 5;
if ( guess < target) {
    console.log("your guess is too low!");
} else if (guess > target) {
    console.log("your guess is too high!");
} else {
    console.log("your guessed correctly!")
}
// ANS = your guess is too high!

// ROCK PAPER SCISSORS GAME.
// EXAMPLE
 let player1 : string = "Rock";
 let player2 : string = "Scissors";
 if (player1 === player2) {
  console.log("it a tie!");
 } else if ((player1 === "Rock" && player2 === "Scissors") || (player1 === "Scissors" && player2 === "paper") || (player1 === "paper" && player2 === "rock")) {
  console.log("player 1 win!");
 } else {
  console.log("player 2 wins!");
 }
// //   ANS = player 1 win!

const input =  PromptSync();
let name = input("Where does the people live?");
// let correctAnswer = "Pakistan";
if(name == "japan"){
    console.log("incorrect!");
 }else if(name == "Pakistan"){
     console.log("close!");
 }else{
    console.error("Wrong!!");
 }
// ANS = wrong!!

// IF STATEMENT NESTED
// EXAMPLE
// TICKETING SYSTEM
let country = "Pakistan";
let age = 10;
if (country === "pakistan"){
    if (age >= 18){
        console.log("Here is your ticket");
    } else {
        console.log("age restriction");
    }
} else {
    console.log("invalid country");
}
// ANS = invalid country

// CONDITIONAL TERNARY OPERATORS
// EXAMPLE
let isHungry = true;
let snack = isHungry ? "apple" : "water";
console.log(`you should have some ${snack},`);
//  ANS = YOU SHOULD HAVE SOME APPLLE.

let isHungry1 = false;
let snack1 = isHungry1 ? "apple" : "water";
console.log(`you should have some ${snack1},`);
//  ANS = YOU SHOULD HAVE SOME WATER.

// SWITCH STATEMENTS
// EXAMPLE
let dayOff = "sunday";
switch (dayOff) {
  case "saturday":
  console.log("Go hiking");
  break;
  case "sunday":
    console.log("Read a book");
    break;
    default :
    console.log("work on a hobby");
}
// ANS = Read a book.


// BASIC FUNCTION
// EXAMPLE
function halfFryEgg() {
    let cocked = 1 + 1.5 + 2;
            //egg + butter +salt
    console.log(cocked);
}
 halfFryEgg()
//  i invoking the function
//  ANS = 4.5

// RETURN FUNCTION VALUE
// EXAMPLE

function halfFryEggs() {
        let cocked = 1 + 1.5 + 2;
             //egg + butter +salt
        return cocked
     }
    // i invoking the function
    let response: number =  halfFryEggs()
    console.log (response)
// ANS = 4.5

// PARAMETER AND ARGUMENTS.
// EXAMPLE
 function halfFrryEggs(egg: number, butter: number, salt: number) : number {
    return egg + butter + salt;
 }
 let response1: number =  halfFrryEggs(1,1.5,2)
     console.log (response1)
// //  ANS =4.5

function addNumbers(a: number, b: number) : number {
       return a + b;
      }
    let responses: number =  addNumbers(5,3)
    // invoking the function
        console.log (responses);
// //  ANS = 8

    function calculationArea(width: number, height: number) : number {
        return width * height;
       }
       let response2: number =  calculationArea(100,50)
       //     // invoking the function
       console.log (response2);
// //  ANS = 5000

// DEFAULT PARAMETERS
// if you foget an ingredient you have a backup
// EXAMPLE
function hallfFryEgg(
    egg: number = 1, butter: number = 1.5, salt: number = 2
) : number {
      return egg + butter + salt;
}
let response3: number =  hallfFryEgg()
    console.log (response3)
// OR
// ANS = 4.5

function haalfFryEgg(
        egg: number = 1, butter: number = 1.5, salt: number = 2
    ) : number {
          return egg + butter + salt;
    }
    let response4: number =  haalfFryEgg(1,1.5,3)
        console.log (response4)
//     //   ANS = 5.5

// REST PARAMETERS
// accepting an unknown number of ongredients
// EXAMPLE
function halfFryyEgg( egg: number = 1,...ingredients: number[]) {
    console.log(egg);
    console.log(ingredients);
}
halfFryyEgg(1,1.5,2,5)
// ANS = 1
// ANS =[1.5,2,5]

// SPREAD OPERATORS
// like spreading out ingredients on the counter
function halfFryEgg1( egg: number = 1,...ingredients: number[]) {
    console.log(egg);
    console.log(...ingredients);
}
halfFryEgg1(1,1.5,2,5)
//  ANS = 1
//  ANS = 1.5  2  5

