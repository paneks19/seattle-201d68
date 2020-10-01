'use strict';

function greeting(){
  var sayHello = 'Hello Class'
  
  if(sayHello){
    // console.log(sayHello);
  }
}

// CALL or INVOKE a function to make it run
greeting();

/////////////////////////////////////
// var sayHi = 'Hello all';

// function betterGreeting(greeting = 'yo'){ // parameter
//   // console.log(greeting);
// }

// betterGreeting(sayHi); // argument

// functions take in a PARAMETER
// the ARGUMENT is the information that we send to the function that becomes the parameter

///////////////////////////////////SCOPE/////////////////

function nameGreeting(name){
  var newName = 'Hello ' + name;
  // console.log(newName);
}

// newName ONLY exists inside of the function. It cannot come outside
// console.log(newName);

nameGreeting('Jordan');

// the SCOPE of a variable declared with a var ONLY exist inside of a function

//////////////////MULTIPLE PARAMETERS///////////////

function sayHi(name, greeting){
  // console.log(greeting + ' ' + name);
}

sayHi('Simon', 'Hello');

//////////////////////RETURN///////////////////

function addNumbers(a, b){
  var c = a + b;
  // console.log(c);
  return c;
}

var sum = addNumbers(4, 5);

// RETURN is a magic word that lets us get information out of a function