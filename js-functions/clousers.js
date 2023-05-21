//Hoisting and clousrs
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//Closure gives you access to an outer function's scope from an inner function.

var variable = 10;
(()=>{
   console.log(variable); // undefined
   var variable = 20;
   console.log(variable); //20
})();

//hoisting
/* javascript leaves the variable assignment ( variable = 20 ) as is and takes the variable declaration ( var variable; ) to the top of the "function scope".
hence the variable is never initialized before the first console log. */

//clousers 
/* the answer to this one is pretty simple, 10 and 20 this is because of "closures" as the first console log gets its value from the variable described outside its scope. */
var variable = 10;
(()=>{
   console.log(variable); //10
   variable = 20;
   console.log(variable);   //20
})();



/*Question 3 */
var variable = 10;
(()=>{
   console.log(variable);   //10 - closures
   variable = 20;
   console.log(variable);   // 20
})();
var variable = 30;
console.log(variable); //30


/*The answer to this one is also pretty simple 10 20 30 but here's how javscript interprets the snippet. The first and the last declaration both undergo hoisting but in the same scope. */
// var variable;
// variable = 10;
// (()=>{
//    console.log(variable);   
//    variable = 20;
//    console.log(variable);   
// })();
// variable = 30;
// console.log(variable);

/* Question 4 */
var variable = 10;
(()=>{
   console.log(variable);   //10
   var variable = 20;
   console.log(variable);  //20
})();

console.log(variable); //20
var variable = 30;

/*Question 5 */
var variable = 10;
(()=>{
   variable_3 = 35;
   console.log(variable_3); //35
   var variable_3 = 45;
   variable_2 = 15;
   console.log(variable);   // 10
})();

console.log(variable_2); // 15
// console.log(variable_3); //undefined
var variable=30;