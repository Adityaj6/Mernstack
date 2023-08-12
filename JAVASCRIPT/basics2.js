//  external linking 
// console.log("hello from extenal linking")

// variables 

// 1)var 

// javascript is a loosely type language

// var age = 22;
// var num1 = 10;
// var num2= 20;
// console.log(num1+num2);

//  naming conventions
// firstname
// firtstName(camle case mostly used)
// Firstname
// first_name

// var-> global

// 1)var 
// $ var is global 
// $ value can be reassigned 
// $ used in older version browser

// 2)let
// +let is local 
// +let is also loosely typed 
// +use let for most times

// 3)const
// $ const is also local 
// $ it value once assigned cannot be changed 
// $ 


// =================================================================
// DATATYPES
// Numbers
// let num = 21.4
// let num2 = 333
// console.log(num+num2);

// // Strings 
// const first_name = 'Aditya';
// const lastName = 'Srivastava';


// // booleans
// // true -> 1
// // false-> 0
// let isLoggedIn = false;
// console.log(isLoggedIn);

// // NULL
// let lastlogIn = null;
// console.log(lastlogIn);

// // undefined 
// let checkedIn = undefined;
// console.log(checkedIn);

// // object 
// const person = {
//     firstName:'Aditya',
//     lastName:'Srivastava',
//     age:22,
//     isLoggedIn : false
// }
// console.log(person);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Operators 
// // +,-,*,/

// // string '1'+'1'
// console.log('1' + 1);//output-> 11
// console.log('123' * 2 )//output -> 246


// // =====================================================
// // /typeof operator 
// console.log(typeof person);



// ===================================================================================
// conditional statements


// if-else 
// const age =22;
// if(age>=20){
//     console.log('Yes , you can vote')
// }
// else{
//     console.log('No, you cannot vote')
// }
// // ternary operator 
// age >=18 ?console.log("Yes"):console.log('No')


// switch case 
// let option = 3; 
// switch(option){
//     case 1:{
//         console.log("Namaste");
//         break;
//      }
    
//     case 2:{
//         console.log("Hello");
//         break;
//     }
//     case 4:{
//         console.log("Bonjor!");
//         break;
//     }
//     default:console.log('Invalid input')
// }


// ===============================================================================
// logical operators 
//  And -> all condition must be true(&&)
// let age = 20 ;
// const gender = 'male';
// if(age >=18 && gender == 'male'){
//     console.log("You are an adult male")
// }


// Or(||) -> atleast one condition must be true

// if(age>=18 ||  gender == 'male'){
//     console.log("You are male")
// }

// NOT (!)
// const number = 5;
// if(number %2 !=0){
//     console.log('odd')
// }

// ==================================================================================
// loops

// for loops -> if you know how many times to run the code 

// for(let i =1; i<=10;i=i+1){
//     console.log('Piyush'+i);
// }


// while loops ->The while loop loops through a block of code as long as a specified condition is true.

let ip = 0 ;
let house  =100;
// while(ip!= house){
//     ip = ip + 1;
//     console.log('Step Taken' +' ' +ip);
// }

// do while -> The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// do{
//     ip = ip + 1;
//     console.log('Step Taken' +' ' +ip);
// }while(ip <= house);


// GUESS THE NUMBER game
// let number =40;
// let guess =0;
// do{
//     guess = parseInt(prompt("Guesss a number"));
//     if(guess == number){
        
//         alert('!Winner');
//         break;
//     }

// }while(guess !=0)


// Functions 
// function sayHello(){
//     console.log("hello aditya")
// }

// sayHello();//calling a function 

// function add(num1 , num2){
//     //num1 and num2 are parameters 
//     // console.log(num1 + num2);
//     return num1 + num2;
// }
// let result = add(9,3);
// console.log(result)
// add(3,2);
// //here 3 and 2 are arguments
// add(45,344);

// // multiple arguments functions
// function add1(){
//     let sum = 0 ;
//     for(var i=0; i<arguments.length;i++){
//          sum = sum + arguments[i];
//     }
//     return sum;
// }
// let result2 = add1(1,2,3);
// console.log(result2);



//  ====================================================================
// Arrow functions : 
let sayHello = () =>{
    console.log("hello baby!");
}

sayHello();
//one liner (used only for one statement to execute)
const add = (a, b ) => a+b;
console.log(add(4,5));

// 'argumets' keyword in arrow function do not work instead we use spread keywords 
// example 
const addnum = (...nums) =>{
    console.log(nums);
};
addnum(1,23,4,5,6,7,5);
// hoisting in arrow function do not work .
const sayhey = () =>{
     console.log("hey there !!!");

};

sayhey();

// This keyword  in arrow function refer to the browser that is global scope.


// +===================================================================
// Higher order function and call backs 
// Higher order function are those function that takes a function as argument 
// example
function add(a,b , cb){
  let result = a+b;
  cb(result);
}
add(2,4 ,function (val){
    console.log(val);
});



















