/*
For in loop
=> Its using for access key of object(arrary/Object,String,Set,Map,etc )
syntax:
    for(key in object){
        code
    }

we can also print valaue
synatx:
    for(key in object){
        console.log(object[key]);
    }

*/
//For in loop in Object
const myObject={
    name:"Panda",
    "full name":"Panda Khanna",
    age:20
}

//accsess key 
for(const key in myObject){
    //console.log(key);
}
//accsess value using key
for(const key in myObject){
   // console.log(myObject[key]);
}


//For in loop in array

const myArray=['a','b','c','d'];

//ACCESSING KEY
for(const key in myArray){
    //console.log(key);
}
//ACCESSING VALUE USING KEY
for(const key in myArray){
    console.log(myArray[key]);
}




