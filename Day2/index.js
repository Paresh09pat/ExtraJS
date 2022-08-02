// Q.1) What are the Different data types available in JS

// There are mainly two data types- i) Primitive data type    ii) Non-primitive data type

// Primitive data type - 1) Number         2) String           3) Boolean
//                       4) Undefined      5) Null

// Non Primitive data type - 1) Array     2) Object


// Q.2) Ways of variable declaration and difference between them

// There are three ways of variable declaration- 1) let     2) var      3) const

// let - 1) let is a block scope.
//       2) let can't be redeclare.
//       3) let can be modified later. 

// var - 1) var is a global scope.
//       2) var can be redeclare.
//       3) var can be modified. 

// const - 1) const is a block scope.
//         2) const can't be redeclare.
//         3) const can't be modified. 


// Q.3) Explain what is hoisting 

// Hoisting is a JS mechanism where variables and function declaration are moved to the top of there scope before the code execution.
// Note - only declarations are hoisted not initialization.


// Q.4) Explain Temporal dead zone

// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// TDZ is a term to describe the state of variables where they are not accessible. 
// A variable declared using let & const is in TDZ from the start of the block until the initialization has completed.


// Q.5) Difference between '==' and '==='

// Both are the comparison operators.

// Double Equals ( == ) checks for value equality only. It is not check data type.  
// This means that before checking the values, it converts the types of the variables to match each other.

// Triple Equals ( === ) check value equality as well as data type of variable also.