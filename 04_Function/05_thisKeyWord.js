/*
Question: What is context in function ?
=> The context in a function is the object that is "this" in that function.
    'this' refer current object. In node it is empty object.In brower its windwo object.
    Basically its use in Object


Question: This in normal function ?
=> This in normal function its a global object. Its use in normal function.

Question: This in arrow function ?
=> This in arrow function its a empty object.



*/

//This in Normal Function 
function myFunction(){
    console.log(this);
}
myFunction()

//This in arrow function
let myFunction1=()=>{
    console.log(this);
}
myFunction1()