//Its a object

console.log(Math.ceil(3.1)); //Take +1 value with outpoint

console.log(Math.floor(4.2)); //Take value with out point

let arr=[1,2,3,5,6,78,4,2,-1]

console.log(Math.min(...arr));
console.log(Math.max(...arr));
 
//Random value with floor value
console.log(Math.floor(Math.random()*10));


//we need min value 10 or max value 20
let min=10;
let max=20;

value=Math.floor(Math.random()*(max-min)+min);
console.log(value);