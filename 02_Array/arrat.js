/*
Arrar: array  is object we can store multipale value . Orginal array can not be change

create::
let arry=[1,2,3,4,5,"Ami",true]
let arr=new Array(1,2,3,4,5,"Ami",true);

Shallow copy: A shallow copy of an object whoes properties share the same reference
Deep Copy: A deep copy of an object whoes properties do not share the same reference

**Method:**
1. push():Add value at the end. Its text value
2. pop():Remove last value
3. unshift(): Add value at the start. But it is time consuming
4. shift(): Remove first value
5. splice(): Add or remove value at specific index .Array is modified 
6. includes(value): Return true of false
7. indexOf(value): Return index of value
8. join(): Array to String
9. reverse(): Reverse array
10. sort(): Sort array
11. toString(): Array to String
12. concat(): Merge array .Return new array
13. fill(): Fill array with specific value
14. slice(startIndex, Last-1 index): Slice array orginal arry can not be change
15. spread operator: Marge array (...array1,...array2)
16. map(): Map array
17. forEach(): For each array
18. reduce(): Reduce array
19. filter(): Filter array
20. find(): Find array
21. flat(): Flat array marge into one array


*/


let arry=[1,2,3,4,5,]
let arr2=['Rahul','Raj','Ravi']
let arr3=[1,2,3,[1,2,3],9,7]

console.log(arry );
console.log(arr2 );
console.log(arr3 );

// arry.push(10)
// console.log(arry );

// arry.pop()
// console.log(arry );

// arry.slice(0,3)
// console.log(arry);

// arry.splice(0,2)
// console.log(arry);


// arry.reverse()
// console.log(arry);

// arry.fill(0)
// console.log(arry);

// let margeArry=arry.concat(arr2)
// console.log(margeArry);

// let sparadeOperator=[...arry,...arr2]
// console.log(sparadeOperator);

// let flatArray=arr3.flat()
// console.log(flatArray);







