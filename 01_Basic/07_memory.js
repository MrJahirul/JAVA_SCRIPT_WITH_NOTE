//statc (Primitive)
//example 

let a=10;
let b=a; //its give a copy of value 
b=20;
console.log(a); //a cant be changed

//Heap (Reference)
//example

let obj={
    name:"JavaScript"

}

let obj2=obj; //its give DIRECT access of object
obj2.name="Java";

console.log(obj.name);//name value now chenge 
console.log(obj2.name);
