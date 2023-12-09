let firstname ='swati';
let lastname='singh';
firstname=1;
// type of is used to check the type of variable since the first name is assigned now the value as 1 so it will now of type of number
console.log(typeof(firstname));
const num=6;
//num=8;
let flag=true;
console.log(lastname);
console.log(firstname);
console.log(flag);


console.log('hellow world');

// lets learn about arrays and object 


//Object declaration
// this is how we declare the object , we can access object key using dot operter
let person={
    name:'swati',
    age:35
}



console.log(person);
console.log(person.name);
console.log(person.age);


let list12=['swati', 'singh', 32.78];
console.log(list12[2]);
// now lets learn about function


function greet(firstname){
    console.log('hello'+ firstname);
}

function calculate(num){
    return num*num;
}
greet('swati');
console.log(calculate(5));


// loops working in js
let myarr=[2,3,4,65];
for(let j=0;j<myarr.length;j++)
{
    console.log(myarr[j]);
}

// THIS IS CALLING OBJECT OF CLASS DATE AND THAT CLASS CONTAINS FUNCTIONS SUCH AS GETTIME , GETDAY , GETMINUTES
/*let mydate=new Date();
console.log(mydate);

console.log(mydate.getTime());
console.log(mydate.getDate());
console.log(mydate.getMinutes());
console.log(mydate.getMinutes());*/


// another method to implement the for loop
myarr.forEach(function(element){
    console.log(element*element);
})
// Dom manupulation
var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);


function calculateSum() {
    // Get the values entered by the user
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);


    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        var sum = num1 + num2;

        // Display the result
        document.getElementById('result').textContent = sum;
    } else {
        // Display an error message if input is not valid
        document.getElementById('result').textContent = "Invalid input. Please enter valid numbers.";
    }
}



function subtract() {
    // Get the values entered by the user
    
    var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);


    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        var sum = num1 - num2;

        // Display the result
        document.getElementById('result').textContent = sum;
    } else {
        // Display an error message if input is not valid
        document.getElementById('result').textContent = "Invalid input. Please enter valid numbers.";
    }
}
function divide() {
    // Get the values entered by the user
    
    var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);


    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        var sum = num1 / num2;

        // Display the result
        document.getElementById('result').textContent = sum;
    } else {
        // Display an error message if input is not valid
        document.getElementById('result').textContent = "Invalid input. Please enter valid numbers.";
    }
}
function multiply() {
    // Get the values entered by the user
    
    var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);


    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        var sum = num1 * num2;

        // Display the result
        document.getElementById('result').textContent = sum;
    } else {
        // Display an error message if input is not valid
        document.getElementById('result').textContent = "Invalid input. Please enter valid numbers.";
    }
}

let elem=document.getElementsByClassName('container');
let createElem=document.createElement('p');
createElem.innerHTML='this is created para';
elem[0].append(createElem);
createElem2=document.createElement('b');
createElem2.innerHTML='this is bold elemnt ';
elem[0].replaceChild(createElem2, createElem);


//events
/*

on click
onload
id.addEventListner('click', function()
{
    console.log('button was click ');
})



*/
sample.addEventListener('click', function()
{
    console.log("container pe click hua ");
})
sample.addEventListener("mouseenter", function( event ) {   
    sample.style.color= "red";
    sample.style.bgcolor="yellow";
  }, false);
sample.addEventListener("mouseleave", function( event ) {   
    sample.style.color="";
  }, false);
  //almost js, html, css done
  // need to go through th harkirat course


  // difference between async and sync javscript
// sync javascript -- is when js do it work in a flow 
// and async js is when it do many work  
