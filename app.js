// //QUESTION NO 1

// let number1 = prompt("Enter the first number:");
// let number2 = prompt("Enter the second number:");

// if (number1 > number2) {
//   console.log(number1 );
// } else if (number2 > number1) {
//   console.log(number2   );
// } else {
//   console.log("Both numbers are equal.");
// }

// //QUESTION NO 2

// let number = prompt("Enter a number:"); 
// let sign;

// if (number > 0) {
//   sign = "+";
// } else if (number < 0) {
//   sign = "-";
// } else {
//   sign = "zero";
// }

// console.log("The sign  is " + sign);

// //QUESTION NO 3

// let num1 = prompt("entetr the 1st number");
// let num2 = prompt("entetr the 2st number");
// let num3 = prompt("entetr the 3st number");
// let num4 = prompt("entetr the 4st number");
// let num5 = prompt("entetr the 5st number");

// if( num1 > num2 ){
//     console.log(num1);
// } else if (num2 > num3){
//    console.log(num2);
// }else if (num3 > num4 ){
//    console.log(num3);
// } else if ( num4 > num5){
//    console.log( num4);
//  } else if ( num5 > num1){
//     console.log(num5);
//  } else {
//     console.log("both num are not true ")
//  }

//  //QUESTION NO 4

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }

//  //QUESTION NO 5

// var num = +prompt("Type your percentage");
// var grade;

// if (num >= 0 && num <= 100) {
//   if (num >= 80) {
//     grade = "A+";
//   } else if (num >= 70) {
//     grade = "A";
//   } else if (num >= 60) {
//     grade = "B";
//   } else if (num >= 50) {
//     grade = "C";
//   } else {
//     grade = "D";
//   }
//   console.log(grade);
// } else {
//     console.log("Wrong input");
// }

//  //QUESTION NO 6

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }


//  //QUESTION NO 7

// const rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

 //QUESTION NO 1

// function createAdder (num){ //1
//   return function(x){
//     return x + num ;
//   }
// }
// const addFive = 
// createAdder (5) 
// console.log(addFive(10));

//  //QUESTION NO 2

// function searchArray(arr, value) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === value) {
//       return true;
//     }
//     return searchArray(arr.slice(1), value);
//   }
  
  
//   const myArray = [1, 2, 3, 4, 5];
//   console.log(searchArray(myArray, 3)); 
//   console.log(searchArray(myArray, 6));

//  //QUESTION NO 3

//  function addParagraph(text) {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = text;
//     const body = document.querySelector("body");
//     body.appendChild(newParagraph);
//   }
//   addParagraph("Hello, world!");

//  //QUESTION NO 4

// function addListItem(text) {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = text;
//     const list = document.querySelector("ul");
//     list.appendChild(newListItem);
//   }

//   addListItem("Apples");
  
 //  //QUESTION NO 5

 function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  } 
  const myElement = document.querySelector("#my-element");
  changeBackgroundColor(myElement, "red");
  
  
  
