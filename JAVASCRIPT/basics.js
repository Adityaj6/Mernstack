// word vs keyword 

// chacha = word
// for = keyword 

// harsh
// is 
// good meaning



// ===========================================================================


// var const let 

// variables and constant
var aditya = "Topper";
const anju = " jaan";
console.log(aditya + anju);

// ==============================
// hoisting 
var a;
a =12;

// ===================================================================
// types in js
// primitives
// reference = [] , () , {}
// aisi koi bhi value jisko copy karne par real copy nahi hota , balki us main vlaue ka reference pass hojata hai , use hum reference value kahte hai , aur jiska copy karne per real copy ho jaye wo primitive hota hai.
// primitve value do not have bracket


// ==================================================================
// conditionals-if else else-if
// jab bhi bat agar magar par ayegi , yaa fir baat aayegi aisa hua to ye karo waise hua to wo karo
// syntax 
if(condiiton1){
    // statement is executed if condition1 is true 
}else if(condition2){
    // statement is executed if condition2 is true and condition1 is false 
}else{
    // statement is executed if all condition is false
}

// ======================================================================
// Loops - for and while loops
// loop ka matlab repeat
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// for loops
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

// example
// for(var i = 0 ; i<11;i++){
//     console.log(i);
// }

// while loops
// The while loop loops through a block of code as long as a specified condition is true.
// while (condition) {
//     // code block to be executed
//   }

// example
let a = 12; 
while(a<20){
    console.log(a)
    a++;

}


// ===========================================
// functions
// functions ka matlab aap kuch code ko likh kar koi naam de sakte ho and baad mein usey use kar sakte ho with that name as many times 
// functions- It for 3 works
// 1) jab aapka code aap turant nahi chalana chaahte future main chalaana chaahte ho
// 2) jab aapka code aap reuse karna chahte ho 
// 3) jab aap code chalan chaahte hoi har baar with different data
// example 
function helobolo(){
    console.log("hello");
}
helobolo();
// arguments = real value jo hum dete hai fnc chalaate waqt 
// parameter = varibles jisme value store hoti hai arguments wali


// ======================================================================
// Arrays 
// an array is special variable which can hold more than on value
// const array_name = [item1, item2, ...];      

// push pop shift and unshift

// var arr = [1,32,33 ,244, 22 ,44 ];
// // arr.push(333);
// // arr.pop();
// // arr.unshift(); add value in the begninning 
// // arr.shift(); remove valud from begininning
// console.log(arr);


// ===============================================
// ek se jaada bande ki baat ki to huea array , ek bande ki baare mein saari  baat ki to hua object
// object hai ek nbande ki details ko hold karna , in a key vlue pair 

// 1)blank object
var  a = {};
// 2) filled object 
var a = {
    age : 22 , 
    name :"Harsh",
    email:"email.1233@gmail.com",
    contact:2123123123,
    kuchboolo : function(){}
}
a.name="Aditya";
a.age
console.log(a)
console.log(a.email);