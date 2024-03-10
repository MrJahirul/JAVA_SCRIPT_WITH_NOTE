/*

**Object vs Array**
Array is a collection of values .Here we cant define key
Object is a collection of key and value. We can define key

create : let obj={key:value}
example:
        let myObject={
            name:"Panda",
            "full name":"Panda Khanna",
            age:20
        }


** if we want to access value of object the we have 2 option
1. Dot[.] operator
2. Bracket[] .Its treets like a array 

 
** If I want to that name value can't change by anyone then we use 'Object.freeze(objectName)'
exapmle:
        myObject.freeze(name)


** Nested object**
example:
        let myObject={
            fullName:{
                firstName:"Panda",
                lastName:"Khanna"

            }
        }

Access: myObject.fullName.firstName--Print First Name


**Marge Object
example:
        let myObject1={
            name:"Panda",
            "full name":"Panda Khanna",
            age:20
        }

        let myObject2={
            name:"Pikachu",
            "full name":"Pikachu Khanna",
            age:22
        }

        let myObject3=Object.assign({},myObject1,myObject2)
        let myObject4=(...myObject1,...myObject2)


**Access Object Key:
=> Using Oject.keys() method we can access object keys.Its return array

**Access Object Values:
=> Using Oject.values() method we can access object keys.Its return array

**Key Value pair Arrary:
=> Using Oject.entries() method we can access object keys.Its return array

**Find Key Value:
=> Using OjectName.hasWonProperty('findValue') 




*/

let myObject={
    name:"Panda",
    "full name":"Panda Khanna",
    age:20
}

Object.freeze(myObject)
myObject.name='Pikachu'
console.log(myObject);

let myObject1={
    name:"Panda",
    "full name":"Panda Khanna",
    age:20
}

let myObject2={
    gmail:"Pikachu@gmail.com",
    address:"kolkata"
}

let myObject3=Object.assign({},myObject1,myObject2)
console.log(myObject3);
console.log(Object.keys(myObject3));
