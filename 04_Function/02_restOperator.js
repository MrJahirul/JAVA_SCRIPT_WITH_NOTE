/*
What is rest operator(...) ?
=> The rest operator is used to capture the remaining elements of an array or the properties of an object

Example:
    const addValues=(...values)=>{
        return values;
    }

    addValues(1,2,3,4,5,6,7,8,9,10) // We can pass unlimited values. Its return a array

*/


const addValues=(...values)=>{
    return values;
}

console.log(addValues(1,2,3,4,5,6,7,8,9,10))