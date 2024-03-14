/*
What is map in js ?
=> The Map object holds key-value pairs and remembers the original insertion order.Its used to create new array.
Duplicate value not allowed

syntax:
    const map=new Map();
    map.set(key,value) ;
  
Methos:
    map.get(key)
    map.has(key)
    map.delete(key)
    map.clear()
    map.size
    map.forEach()
    [...map] //convert map to array
    for of map [same with forEach]
*/

const map=new Map()
map.set('IND','INDIA');
map.set('PAK','PAKISTAN');
map.set('BAN','BANGLADESH');
map.set('AFG','AFGHANISTAN');
map.set('CHN','CHINA');

console.log(map);
console.log(map.get('IND')); // get value
console.log(map.size);   // get size

map.forEach(function(value,key){
   console.log(key,value);
}) //for each for geting key and value

let arr=[...map] //convert map to array
console.log(arr);

//for of map [same with forEach]
for(const [key,value] of map){
    console.log(key,value);
}

//in map for in not possabile
for (const key in map){
    console.log(key);
}

