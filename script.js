//* A. Q + A---------------------------------------------
//Q:How do we assign a value to a variable?
//A: Start the variable with either 'const' or 'let' and then place the  assignment operator (=) after.

//Q:How do we change the value of a variable?
//A: Reassign the variable with a new value and make the variable equal itself & /or the changes

//Q: How do we assign an existing variable to a new variable?
//A: by changing const to let or vice versa, so that it's value can change.

//Q:Remind me, what are declare, assign, and define?
//A: Declaring in javascript is to create a variable
// Assign is to copy or merge an object
// Define in javascript is to calculate a value or perform a task to basically load the output.

//Q:What is pseudocoding and why should you do it?
//A: Pseudocode is not actual coding but a description of an algorthm/code.//
// It is popular to do because it is 'time saving' and simplifies the language.

//Q:What percentage of time should be spent thinking about how you're going to solve a problem 
//vs actually typing in code to solve it?
// A:90 of the time in coding is spent thinking and reflecting on the problem. 10% should be used on actually 
//typing the code in.

// //B.Strings-------------------------------------------------------

// let firstVar = "hello world";
//  firstVar = 17;
// let secondVar = firstVar;
// secondVar = "Greetings World";
// console.log(firstVar);
// // const yourName = "Hello, my name is" + " Tiffany Isaac" ;
// //  console.log (yourName)


//*C.Booleans---------------------------------------
//  const a = 4
//  const b = 53
// console.log(a+b);
// const c = 57
// const d = 16
// console.log (c+d)
// const e = 'kevin' == 'kevin2'
// console.log('kevin'=='kevin2')
 
//* FOR THE NEXT TWO, USE ONLY && OR ||---------------------------------------
//  console.log(true || false);
//  console.log(false && false && false && false || true);
//  console.log(false === false)
//  console.log(e == 'kevin');
//  console.log(e == 'Kevin');
//  console.log((a != b) != c); 
//  console.log(a == a||d);
 //console.log(48 && '48')

// //*D. The farm-----------------------------------------------------
// let animal = "cow";
// const moo = (a) => {
//     return a.toLowercase === "cow"? "mooooo" : "hey, that's not a cow"
// }
// console.log(moo(animal));

//write a code  that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,'
// a message should print "Sorry, you're too young."---------------------------------------------

// let personAge = 17;
// if (personAge >= 16){
//     console.log ("Here are the keys!");
// }else {
//     console.log ("sorry, you're too young.");
// }
// //  PersonAge = 8;
//  //personAge = 16;
// //  personAge = 33;

//Remember: USE let when you initialize your for loops!-------------------
//A***********
//Write a loop that will print out all the numbers from 0 to 10, inclusive-
// for (let i = 0; i < 11; i++){
//     console.log(i)
// }
//Write a loop that will print out all the numbers from 10 up to and including 400-
// for (let i = 10; i < 401; i++){
//     console.log(i)
// }
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (i = 12; i < 4001; i+= 3){
//     console.log(i);
// };

//B.Get even----------------------------------------------
// for (let a = 2; a < 100; a += 2){
//     console.log (a + "is an even number");
// }

//C.give me five-----------------------------------------
// for (let b = 1; b < 101; b++){
//     if (0 === b % 5 && b % 3 === 0){
//     console.log(" I found a " + b + ". High five!");
// }
// console.log("I found a" + b + "Three is a crowd");
// } if (b % 5 === 0){
//     console.log("I found a " + b + ". High five!");

// } else if (b % 3 === 0){
//     console.log("I found a" + b + ".Three is a crowd");
// }

//D. Savings account

// let bank_account = 0;
// for (let t = 1; t < 11; t++){
//     bank_account += t;
// };
// console.log(bank_account);
//     bank_accounts = 0;
// for ( t = 1; t < 101; t++){
//     bank_account += t * 2;
// };
// console.log(bank_account);

// A. Talk about it:-----------------------------
// What are the things in an array called?//
// **** The things in an array is called an 'element'  and we distinguish bettwen the elements with an index number.

// Do Arrays guarantee those things will be in order?
//****Yes if an array is not in order then it is refered to as a set

// What real-life thing could you model with an array?
//****You can model inventory for a specific item at a grocery store with an array


//B. Easy Does It--------------------------------------------------------------------------
//Create an array that contains three quotes and store it in a variable called quotes
// var qoutes = ["Ello Moto!", "Break my off a peice of that apple sauce!", "Prince outlived Mike Jack!"];

//C.Accessing elements------------------------------------------------
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello" to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// const randomThings = [1, 10,"Hello", true];
// randomThings[0]; //returns the value of the first element:1
// randomThings[2] = "World";
// console.log(randomThings);

//D. Change values-------------------------------------------------------------------------
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// OurClass [2]; //since Arrays start at 0 the 2 would return the value of the 3rd element
// ourClass[4] = "octocat";
// ourClass.push("Cloud City");
// console.log(ourClass)

//E. Mix It Up----------------------------------------------------------------------------
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon");
// myArray.push("Game of thrones");
// myArray.pop(1);
// myArray.unshift("Bob Marley");
// myArray.pop(4);
// myArray.reverse();
// console.log(myArray);

// // //F. Biggie Smalls------------------------------------------------------------------------------
// let n = 75;
// if(n < 100){
//     console.log("little number");
// } else {
//  console.log ("big number");
// }

// n = 75
//n = 101;

//G. Monkey in the Middle----------------------------------------------------------------------------------------
// let monkeyNumer =15;
// if (monkeyNumer < 5){
//     console.log('little number');
// } else if (monkeyNumer > 10){
//     console.log ("big number");
// } else {
//     console.log("monkey");
// }
// monkeyNumer= 2;
// monkeyNumer = 15;

//H. What's in Your Closet?------------------------------------------------------------------------
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
  
//   console.log("Kristyn is rocking that" +  kristynsCloset [3] + "today!");
// kristynsCloset.splice(5, 0, "raybans");
// console.log(kristynsCloset)
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset)
//  thomsCloset[0][0];
//  thomsCloset[1][1];
//  thomsCloset[2][1];
// console.log("Thom is looking fierce in a grey button-up,jeans and wool scarf" );
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset)

//IV. Functions----------------------------------------------------------------------------

// const printCool = (agrument) => {
//     return  agrument + "is cool";
// };
// console.log(printCool("Captian Reynolds"));

// const calculateCube = (singleNumber) => {
//     return singleNumber * singleNumber * singleNumber;
// };
// console.log(calculateCube(5));

// const isAvowel = (character) => {
//     if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" ||
//         character === "I" || character === "o" || character === "O"|| character == "u"|| character === "U"){
//     return true;
// } else {
//     return false;
//         }
// };
// console.log(isAvowel("e"));

// function lengths(arr) {
//     return arr.map(str => str.length);
// }
// console.log(lengths(['Hank', 'Hippopalous']));

//F. getMultipleLengths=-------------------------------
// const getMultipleLengths = (strArr) => {
//     const getMultipleLengthArray = [];
//     for (f = 0; f <strArr.length; f++){
//         getMultipleLengthArray.push(strArr[f].length);
//     };
//     return getMultipleLengthArray;
// }
// console.log(getMultipleLengths(["hello","what","is","up","dude"]));

//G. maxOfThree----------------------------------------------------
// const maxofThree = (n1,n2,n3) => {
//     const threeNumArray = [n1, n2, n3];
//     threeNumArray.sort(function(a,b){return a-b});
//     return threeNumArray[2];
// };
// console.log(maxofThree(6,9,1))

//H.printLongestWord

// function longest(str){  
   
//     return str.sort((a, b) => b.length - a.length)[0] 
// } 

// console.log(longest(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//Objects
// const objectName = {
//     prop1 : name,
//     prop2 : email,
//     prop3 : AbstractRange,
//     prop4 :purchased 
// }

// const me = {
//     name: "Tiffany Isaac",
//     age: 32,
//     email : "Lashay_isaac@yahoo.com"
// };
// me.name;
// me.age 
