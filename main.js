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
let num1 = 2;
let num2 = 3;
let cart = num1 + num2;
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
let numOfTotalFaculty = numOfFacullty * 21;
console.log(numOfTotalFaculty);
// ANS = 84
let numOfFaaculty = 4;
let numOfMaanagement = 3;
let numOfAbsentFaaculty = 2;
let numOfTotalFaculty1 = numOfFaaculty * 21;
let totalNumOfKg = 20;
console.log(totalNumOfKg / numOfTotalFaculty1);
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
let cart1 = 5;
let num3 = 2;
let total = cart1 - num3;
console.log(total);
//  ANS = 3
//  ARITHMETIC OPERATORS
//   MULTIPLICATION
//   EXAMPLES
let bags = 4;
let apples = 5;
let totalApples = bags * apples;
console.log(totalApples);
// //  ANS = 20
let chalk = 5;
let chalks = 2;
console.log(chalk * chalks);
// // ANS = 10
// ARITHMETIC OPERATORS
//   DIVISION
//   EXAMPLES
let table = 4;
let tables = 2;
console.log(table / tables);
// // // ANS = 2
let totalApples1 = 20;
let bags1 = 4;
let eachbags = totalApples1 / bags1;
console.log(eachbags);
// //  ANS = 5
// ARITHMETIC OPERATORS
// EXPONENTIATION
//   EXAMPLES
let orange = 2;
let oranges = 2;
console.log(orange ** oranges);
// // // // ANS = 4
let layer = 5;
let mango = 5;
let power = layer ** 2;
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
let reminder = bags2 % apples1;
console.log(reminder);
// // // //  ANS = 2  
// ASSIGNMENT OPERATORS
// EXAMPLE
let m8 = 5;
console.log(m8);
// // ANS = 5
m8 += 5;
console.log(m8);
// // ANS = 10
m8 -= 5;
console.log(m8);
// // ANS = 5
let c = 10;
c += 5;
console.log(c);
// ANS =15   (equivalent to c = c + 5, is now 15.)
let numb = 2;
numb += 4; // 6   numb = numb+4
console.log(numb);
// ANS = 6
let numb1 = 2;
numb += 2; // 6   numb = numb+2
console.log(numb1);
// ANS = 4
let numb2 = 2;
numb2 -= 2;
console.log(numb2);
// // ANS = 0
let numb3 = 8;
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
let i1 = 10;
//             11 + 12  + 6 + 11 - 2
let resullt = ++i1 + ++i1 + 6 + --i1 - 2;
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
let isGreaterThan = !(a > b);
// ANS  = TRUE
let isLessThan = !(a < b);
//  ANS = FALSE
let $num = 5;
let $num1 = 5;
console.log($num != $num1);
// ANS = FALSE
// LOGICAL OPERATORS
// EXAMPLE
let m7 = 5;
console.log(m7 >= 5 && m7 < 10);
// ANS = TRUE
console.log(m7 > 5 && m7 < 10);
// ANS = FALSE
console.log(m7 >= 5 || m7 < 10);
// ANS = TRUE
console.log(m7 > 5 || m7 < 10);
// ANS = TRUE
console.log(!(m7 < 10));
// ANS = FALSE
console.log(!(m7 > 10));
// ANS = TRUE
let a1 = 5;
let b1 = 2;
console.log((a1 > 0) && (b1 > 0));
// ANS = TRUE
console.log((a1 > 0) || (b1 > 0));
//  ANS = TRUE
console.log(!(a1 > 0));
export {};
// ANS  = FALSE
