/*
 IF control 

 syntax:
 if(condition){
     if Condition true then code run otherwise not
 }

**Example**
    if(true){
        console.log("Hello"); //working
    }

    if(false){
        console.log("Hello"); //Not working
    }


*/
if(2<2){
    console.log("Hello"); //Not Working because condition Flase
}
if(2>2){
    console.log("Hello"); //Not Working because condition Flase
}
if(3>=2){
    console.log("Hello"); //Working because condition True
}

if(3!=2){
    console.log("Hello"); //Working because condition True
}
if(2!==2){
    console.log("Hello"); //Not Working because condition Flase
}
if(2!=='2'){
    console.log("Hello"); //Working because condition True
}