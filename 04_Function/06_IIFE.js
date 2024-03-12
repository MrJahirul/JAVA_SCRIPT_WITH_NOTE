/*
What is IIFE ?
=> IIFE is an Immediately Invoked Function Expression.(WRAP_Function)(For Execution) .
  Its using for be aware polucation of global variable.If write IIFE it will execute two time then we use it if we use ';'.

Example:
   (function sayHello(){
       console.log("Hello");
   })()

Type of IIFE ?
1. NAMED IIFE
2. PARAMETER IIFE
3. Arrow Function IIFE

We can also pass a parameter in IIFE

example:
   ((name)=>{
    console.log("Hello ${name}");
})('Only Argumane')


*/
//Named IIFE
(function sayHello(){
    console.log("Hello");
})();

//If we use to time then we need to use semicolone ; at the first function

(()=>{
    console.log("Hello 2");
})();

//Pass a argument

((name)=>{
    console.log(`Hello ${name}`);
})("Panda")