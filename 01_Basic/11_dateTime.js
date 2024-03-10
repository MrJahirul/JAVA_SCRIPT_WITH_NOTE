//Making a date object

/*
Date= Its object
Hour=getHours()
min=getMinits()

toLocaleSting:: important
*/

const myDate=new Date();

myDate.toLocaleDateString('default',
{year:'2-digit',month:'long',day:'numeric'}
);

console.log(myDate);