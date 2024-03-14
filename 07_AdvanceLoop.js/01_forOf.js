/*
For Of loop 
syntax: 
    for(const NewVariable of array/object/string){
        code
    }

Object in Array:
    [{},{},{}]



*/

//Example OF for Of loop in array

const array=[1,2,3,4,5,6,7,8,9,10];

for(const value of array){
    console.log(value);
}

//Example OF for Of loop in String

const greeting="Hello Good Morning";

for(const letter of greeting) {
    console.log(letter);
} 
