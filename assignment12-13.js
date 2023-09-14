// 1.  Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3”. 
 
// var a = prompt("Enter a number")
// if (a % 3 == 0){
//     alert( a + ` is divisible by 3`)
// }
// else{
//     alert( a + ` is not divisible by 3`)
// }


// 2. Write a program that checks whether the given input is an even 
// number or an odd number. 

// var a = prompt("Enter a number")
// if (a % 2 == 0){
//     alert("This is an even number")
// }
// else{
//     alert("This is an odd number")
// }


// 3. Write an if/else statement with the following condition: 
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young". 

// var a = prompt("Enter age");
// if (a >= 18){
//     alert("Old enough")
// }
// else if(a < 18){
//     alert( "Too young" )
// }

// 4. Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output. 

// var a = prompt("Enter a name", "zohaib") 
// if (a == "zohaib"){
//     document.write("Hello King");
// }


// 5. Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”. 

// var number = prompt("Enter a number");
// switch (number % 3) {
//     case 0:
//              alert("Number is divisible by 3")
//         break;
    
//         default:
//             alert("Number is not divisible by 3")
// }


// 6. Write a program that takes a character(number or string) in a 
// variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. (Hint: ASCII codes:- 
// A=65, Z=90, a=97, z=122).


// var a = +prompt("Enter a variable")
// if(!a){
// if(a.toUpperCase() == a )
// alert("The variable is String")
// elseif
// }
// else{
//     alert('The variable is number')
// }
// // if 


// 7. Write a program to create a calculator for +, -, *, /, % using 
// switch case statements. (number1, number2 and operator will 
// be input)

    // var a = +prompt("Enter first number")
    // var b = +prompt("Enter second number")
    // var c = prompt("Enter operator", " +, -, *, % ")

    // switch (c) {
    //     case "+":
    //         var d = a + b
    //         alert(d);
    //         break;

    //     case "-":
    //         var d = a - b
    //         alert(d);
    //         break;

    //     case "*":
    //         var d = a * b
    //         alert(d);
    //         break;

    //     case "%":
    //         var d = a % b
    //         alert(d);
    //         break;

    //     default:
    //         alert("Enter a valid number and operator")
    //         break;
    // }

// 8. Write a program that takes time as input from user in 24 hours 
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statements 
     
// var time = +prompt("Enter time in 0000")
// if (time >= 0000 && time < 1200){
//     alert("Good morning")
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good afternoon");
// }

// else if (time >= 1700 && time < 2100){
//     alert("Good evening");
// }

// else if (time >= 2100 && time < 2359){
//     alert("Good night");
// }

// else{
//     alert("Enter a valid time")
// }


// 9. Write a program that takes a calendar year in YYYY format in 
// a variable. Check & notify the user whether it is a leap year or 
// not. 

// var a = +prompt("Enter a year:");

// if (a % 4 == 0 && a % 100 != 0){
//   document.write(a + " is a Leap Year")
// }
// else if (a % 400 == 0){
//   document.write(a + " is a Leap Year")
// }
// else{
//   document.write(a + " is not a Leap Year")
// }


// 10.  Write a program that  
// a. Store correct password in a JS variable. 
// b. Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i.  Check if user has entered password. If not, then give 
// message “ Please enter your password” 
// ii.  Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise. 
 
// var password = ("zohaib450");
// var a = prompt("Enter the password")
// if (a == password){
//     alert("Correct! The password you entered matches the original password")
// } 
// else if (a != password){
//     alert("Incorrect password")
// }
// else(a == wps)
//     alert("Please enter your password")


// 11.  Write a program that adds an else statement to the following 
// script to display “You are not Fahad” 
// var firstName = "Ali"; 
// if (firstName === "Fahad") { 
//        document.write("Hello Fahad!"); 
// } 

// var firstName = "Ali"; 
// if (firstName === "Fahad") { 
//        document.write("Hello Fahad!"); 
// } 
// else{
//     document.write("You are not Fahad");
// }


// 12. This if/else statement does not work. Try to fix it: 
//         var greeting; 
//         var hour = 13; 
//         if (hour < 18) { 
//             greeting = "Good day"; 
//        else 
//            greeting = "Good evening"; 
//         }  


// var hour = "13";
// if (hour < 18){
//     alert("greeting = Good day")
// }
// else{
//     alert("greeting = Good evening")
// }


// 13. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal. 
 

// num1 = +prompt("Input the First integer", "0");
// num2 = +prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)){
//     alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   

// else if(parseInt(num2, 10) > parseInt(num1, 10)) {
//   alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  

// else{
//    alert("The values "+ num1+ " and "+num2+ " are equal.");
//   }
  

// 14. Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero.  

// let a = []
// var b = prompt("Enter a number")

// if(b.includes("-")){
// alert("This is a negative value")
// }
// else if(b == 0){
//     alert("This number is zero")
// }
// else{
//     alert("This is a positive value")
// }


// 15. Ask the user what the current hour is. If the hour is between 
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is 
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If 
// the hour is between 5 and 8 p.m., tell the user, "It's dinner 
// time." For any other hours, tell the user, "Sorry, you'll have to 
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock 
// format i.e. 14 for 2pm , 15 for 3pm) 

    
// var time = +prompt("Enter time in 24 hours", "24 am/pm")
// if (time >= 6 && time < 9){
//     alert("Breakfast is served")
// }
// else if (time >= 11 && time < 13){
//     alert("Time for lunch");
// }

// else if (time >= 17 && time < 20){
//     alert("Sorry, you'll have to wait, or get a snack.");
// }

// else{
//     alert("Enter a valid time")
// }


// 16. Write a program that stores value in a variable & tell whether 
// the type of that variable is a "number", "string", "boolean" or 
// “undefined” 


// var numberOfpushUpsToday = 34; 

// if(typeof numberOfpushUpsToday === 'number' ){
//     alert('It is a number')
// }


// 17. Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise. 

// let vowels = ["a", "e", "i", "o", "u"];
// var a = prompt("Enter a letter");

// if (vowels.includes(a)){
//     alert("True")
// }
// else{
//     alert("False")
// }


// 18. Choose the correct comparison operator to display "true", 
// when: 
// 10 is NOT equal to 8.

// var a = 10;
// var b = 8;
// if(a = b){
//     alert("True");
// }

// 19. Use a switch statement to rewrite the following JavaScript 
// code. Prompt the user for the number of a month rather than 
// setting it to 8: 

// var month = prompt("Enter month");

// switch(month){

//         case "0":
//             alert("Enter valid month");
//         break;

//         case "1":
//             alert("January");
//         break;

//         case "2":
//             alert("February");
//         break;
        
//         case "3":
//             alert("March");
//         break;
        
//         case "4":
//             alert("April");
//         break;

//         case "5":
//             alert("May");
//         break;

//         case "6":
//             alert("June");
//         break;

//         case "7":
//             alert("July");
//         break;

//         case "8":
//             alert("August");
//         break;

//         case "9":
//             alert("September");
//         break;

//         case "10":
//             alert("October");
//         break;

//         case "11":
//             alert("November");
//         break;

//         case "12":
//             alert("December");
//         break;

//         default:
//             alert("Enter a valid month");
// }       

// 20. Use a conditional (ternary) operator for this exercise: 
// If the variable age is a value below 18, the value of the variable  
// voteable should be "Too young",  
// otherwise the value of voteable should be "Old enough". 
 
// var a = +prompt("Enter age");
// a = (a >= 18)? "Old enough" : "Too young";
// alert(a);
