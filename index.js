// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values

/*
multi 
line 
commment
*/

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem)
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass)
//elemClass[0].style.background = 'yellow'
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
tn  = document.getElementsByTagName('div')
//console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "live is good bro acheiving good things in my life";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is bold";
 tn[0].replaceChild(createdElement2 , createdElement);
//  tn[0].removeChild(createdElement2);

//selecting using query
se1 = document.querySelector('.container');
// console.log(se1);
// se1 = document.querySelector('.container');
// console.log(se1);

//Events In JavaScript
// function clicked(){
//     console.log("You are Hero")
// }
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b> Hero Name Is Abdul Wahab Alpial</b>"
// })
// window.onload = function(){
//         console.log("The document was loaded")
// }
// firstContainer.addEventListener('click',function(){
//      console.log("clicked on container") 
// })
// firstContainer.addEventListener("mouseover",function(){
//     console.log("Mouse On Container")
// })
// firstContainer.addEventListener("mouseout",function(){
//     console.log("Mouse out of Container")
// })
// firstContainer.addEventListener("mouseup",function(){
//     console.log("Mouse up when clicked  on Container")
// })
// firstContainer.addEventListener("mousedown",function(){
//     console.log("Mouse down when clicked  on Container")
// // })
// let prevHtml = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup",function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHtml
// })
// firstContainer.addEventListener("mousedown",function(){

//     document.querySelectorAll(".container")[1].innerHTML = "Abdul Wahab Alpial Genius Of Software Engineering World"
// })
//draging event of javascript we must learn
// Arrow Functions
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b
}
//Set Timeout and setinterval
logkaro = ()=>{
    document.querySelectorAll(".container")[1].innerHTML = "Abdul Wahab Alpial Genius Of Software Engineering World"
    console.log('today is a good day to get knowlwdge and i appreciate my self')
}
//setTimeout(logkaro,10000) // for once
//setInterval(logkaro,10000) // for repitition
// clr = setInterval(logkaro,10000)
// javascript local Storage
// localStorage.setItem('name','Abdul Wahab Alpial');
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
//localStorage.clear()

//json
// obj  = {name:"Abdul Wahab Alpial",length:1,a:{this:'tha"t'}}
// jso = JSON.stringify(obj)
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse('{"name":"Abdul Wahab Alpial","length":1,"a":{"this":"tha\\"t"}}')
// console.log(parsed)

//tempelate literals-backticks
a = 64;
console.log(`this is my ${a}`)