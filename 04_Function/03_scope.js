/*
Question: What is scope ?
=> Scope is a region of a program where a variable is accessible.   

Example:

    const wonner="panda"; // Global Scope its access every here 

    if(true){   
        let name="Panda"; // Block level scope. Its access only in this block
        const age=20;
        var address="kolkata";
    }

    console.log(name); //We cant access
    console.log(age); //We cant access
    console.log(address); //We can access. Its access out of scope
    console.log(wonner); //We can access


Question: What is closure?
=> Closure is a function that has access to the parent scope, even after the parent function has returned.

Example:
    function parent(){
        const name="Panda";
        function child(){
            console.log(name); // Its can access
        }
        return child
    }
    const fun=parent(); //fun is closure
    
Question: What is Expression Function ?
=> Expression function is a function that returns a value and store into a variable.

Example:
    const addNumber=function(num){
        return num+10
    }

Question: What is hoisting?
=> Hoisting is a process in which a function or a variable can be used before declaration.

Example:
    const wonner="Panda";
    console.log(wonner);
    



*/