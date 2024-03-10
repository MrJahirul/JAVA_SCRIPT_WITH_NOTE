/*

What is object de-structuring ?
=> Object destructuring in JavaScript allows you to extract values from an object and assign them to
   new variables in a single statement. It’s a powerful feature that simplifies working with object properties.

example:
        let myObject={
            name:"Panda",
            "full name":"Panda Khanna",
            age:20,
            address:"kolkata"
        }

        we assess like myObject.name,myObject.age its a old process and taking log time.

        Therefore we using de-structure 
        let {age,address}=myObject //de-structure
        Now we can use age and address as variable.
        We can write won name as well {age:myAge} now age is myAge



*/

let myObject={
    name:"Panda",
    "full name":"Panda Khanna",
    age:20,
    address:"kolkata"
}
