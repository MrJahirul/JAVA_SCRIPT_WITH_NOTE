/*
forEach loop: Its a higher order function. its have 3 argument value,index,full array

const languages=["html","css","js","php","python","c++"]

syntax:
nameOfArray.forEach(function(value,index,array){
    code
})


 
 */

const languages=["html","css","js","php","python","c++"]
 languages.forEach(element => {
    console.log(element);
});

//WE can print item,index,full Array
languages.forEach((item,index,array)=>{
    console.log(array);
})

//Access array of Object

const languages1=[
    {id:1,name:"html"},
    {id:2,name:"css"},
    {id:3,name:"js"},
    {id:4,name:"php"},
    {id:5,name:"python"},
    {id:6,name:"c++"}
]
languages1.forEach((item,index,array)=>{
    console.log(item.id , item.name);
})