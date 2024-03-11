/*
Question: What is arrow Function ?
=> Arrow function is a new function syntax in ES6.Not need to write function keyword

example:
    const functionName=(parameter)=>{
        log(Hello)
    }

Question: What is implicit return ?
=> In arrow function we don't need to write return keyword. We write a code in a single line

Example:
    const addNumber=(a,b)=>a+b

Question: What is explicit return ?
=> In arrow function we need to write return keyword. 

Example:
    const addNumber=(a,b)=>{
        return a+b
    }

Question: How to return a object in implicite function ?
=> Using ()
Example:
    const addNumber=(a,b)=>({a:a+b})

*/

//1. Implicit return
const  addNumber=(a,b)=> a+b
console.log(addNumber(2,3));

//2. Explicit return
const  addNumber1=(a,b)=> {
    return a+b
}
console.log(addNumber1(2,3));

//3. Implicit return with object
const numFunc=()=>({name:"Jahirul"})
console.log(numFunc());
