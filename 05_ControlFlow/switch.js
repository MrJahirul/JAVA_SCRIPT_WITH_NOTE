/*
Switch statement

Syntax:
    switch(expression/variable){
        case value:
            statement
            break;
        case value:
            statement
            break;
        default:
            statement
    }


*/

let name="Panda";

switch(name){
    case "Panda":
        console.log("Panda");
        break;
    case "Rahul":
        console.log("Rahul");
        break;
    default:
        console.log("Not Found");
}