// 1) ways to print in javascript
// console.log("hello world !!")
// alert("me");
// document.write("This is document write.")

// 2) javascript console api
// console.log("Hello world!!");
// console.error("This is warning!!");
// console.warn('This is a warning')

// 3) JavaScript Variables
// what are variables ? - containers to store data values
// var number1 = 34;
// var number2 = 104;
// console.log(number1 + number2);

/*
        This is a multiline comment .
        */

// 4) Data types
// Numbers
//  let num1 = 344;
//  let num2 = 2322;

// String
// let str1 = 'This is a string';
// let str2 = 'This is also a string ';

// Object
// let marks = {
//     ravi : 23,
//     aditya : 34,
//     india : 100,
// }

// Booleans
// let a = true;
// let b = false ;

// let und = undefined;
// let und1;

/*
        At a very hight level , there are two types of data types in javascript 
        1. Primitive data types : umdefined , null , number , string , booolean , symbol

        2. Reference data types :Arrays and objects 
         */

// Array

// let arr = [1,3,4,5,7];
// console.log(arr);
// console.log(typeof arr);

// Operators in javaScript
// Aritmetic Operators
// let a = 233;
// let b = 33;
// console.log("The value of a + b is : ", a + b);
// console.log("The value of a - b is : ", a - b);
// console.log("The value of a * b is : ", a * b);
// console.log("The value of a / b is : ", a / b);

// Assignment Operators
// let c = 110;
// console.log(c);
// c += 3;
// console.log(c);
// c -= 2;
// console.log(c);
// c *= 10;
// console.log(c);
// c /=1000;
// console.log(c);

// Camparison Operators
// let x = 22;
// let y = 222;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators
// AND
// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && true);//false
// console.log(false && false);//false

// OR
// console.log(true || true);//true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false

// Logical NOT
// console.log(!false);
// console.log(!true);

// Functions :
// DRY = Do not repeat yourself

// function avg(a,b){
//     return (a +b) / 2 ;
// }
// c1= avg(2,3);
// c2 = avg(33,44);
// console.log(c1,c2);

// Arrow functions
// let myFunction = (a, b) => a * b;

// Conditionals in javaScript

// var age = 4;
//single if statement
//    if(age>18){
//     console.log('You can drink rasna water.')
//    }

//if-else statement
// if(age>3){
//     console.log("You are not a kid .");
// }
// else{
//     console.log('You are a kid.')
// }

// If-else ladder
// if(age>32){

// }
// else if (age>25){

// }else if(age>16){

// }else if(age>18){

// }else{

// }

// Problem1
// let result = (age) =>{
//     if(age>18){
//         return 'You can drive the car .';
//     }else{
//         return 'You can not drive the car .'
//     }
// }
// console.log(result(3));

// Loops in javascript
// var arr = [1,2,3,4,5,6];
// console.log(arr);

// for loop
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// For each loop
// arr.forEach(function(element){
//     console.log(element);
// })

// while
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do-while loop
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// Array Methods
// let myArr = ["Fan","Camera" , 34,null,true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push('Aditya');
// myArr.shift();
// myArr.unshift("aditya");
// myArr.sort();
// console.log(myArr);

// String methods
let myLovelyString = "Harry is a good boy ";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.slice(1,3));
// d = myLovelyString.replace("Harry" , "Rohan");
// console.log(d,myLovelyString)

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes())

// DOM Manipulation
let elem = document.getElementById("click");
//    console.log(elem)
let elemClass = document.getElementsByClassName("contianer");
//    console.log(elemClass);
//    elemClass[0].style.background="Blue";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
//   tn = document.getElementsByTagName('button')
tn = document.getElementsByTagName("div");
// console.log(tn);
createdElement = document.createElement("p");
createdElement.innerText = "This is a created element";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

//    Selecting using query
// sel = document.querySelector(".contianer");
// console.log(sel);

// sel = document.querySelectorAll(".contianer");
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked.')
// }
// window.onload = function(){
//     console.log("The document was loaded ")
// }

// Events in javascript
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.contianer')[1].innerHTML="<b>We have Clicked</b>";
//     console.log('click hua')
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('mouse on container')
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('mouse out of container')
// })
// let prevHtml = document.querySelectorAll('.contianer')[1].innerHTML 
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.contianer')[1].innerHTML = prevHtml;
    
//     console.log('Mouse up when clicked on Container.')
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.contianer')[1].innerHTML = '<b> We have been clicked </b>';
//     console.log('Mouse down when clicked on Container.')
// })

// Arrow Functions 
// function sum(a,b){
//     return a+b;
// }

// sum = (a,b) =>{
//     return a+b;
// }

logKaro = () =>{
    document.querySelectorAll('.contianer')[1].innerHTML = "<b> SET timeout fired </b>";
    console.log("I am your log.")
}

// setTimeout and setTimeInterval
// setTimeout(logKaro,2000);
// setInterval(logkaro,2000)
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// Javascript local storage:
// localStorage.setItem('name','harry');
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem();
// localStorage.clear();


// what is json:
// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand
obj = {name:"harry",length:1}
jso = JSON.stringify(obj);
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length" : 1 , "a":{"This":"that"}}`)
console.log(parsed)