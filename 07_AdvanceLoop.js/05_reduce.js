/*
Reduce loop:
Its a higher order function. its have 3 argument value,index,full array. But its take two argument accumulated,current value
and one initilize value 

syntax:
nameOfArray.reduce(function(accumulated,currentValue,index,array){
    code
},initilizeValue)


*/

//We want to sum all value
const numbers=[1,2,3,4,5,6,7,8,9,10];
const sun=numbers.reduce((accumulated,currentValue)=>{
    return accumulated+currentValue; //accumulated=0, currentValue=1,continue
},0)

console.log(sun);

//Add all course prize in a object

const courses=[
    {id:1,name:"html",prize:1000},//{key:value}=item
    {id:2,name:"css",prize:2000},
    {id:3,name:"js",prize:3000},
    {id:4,name:"php",prize:4000},
    {id:5,name:"c++",prize:5000}
]

const totalPrize=courses.reduce((accumulated,currentValue)=>{
    return accumulated+currentValue.prize
},0)    

console.log(totalPrize)