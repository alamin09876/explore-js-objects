const numbers = [10, 20, 33, 23, 45];
for (const number of numbers){
    // console.log(number)
}

// 1. for of can not used with objects
const bottle ={color : "Yellow", price : 500, isCleaned : true, capacity : 1};
/* 
3 ways to read object properties
bottle.color
bottle['color']
// bottle[key] we can use it mostly
*/
// const keys = Object.keys(bottle);
// for(const key of keys){
//     // console.log(key, bottle[key])
// }

// for .... in
for(const key in bottle){
    const value = bottle[key];
    // console.log(key, value)
}

// advance 

const pair = Object.entries(bottle);
for (const [key, value] of  Object.entries(bottle)){
    console.log(key, value)
}
