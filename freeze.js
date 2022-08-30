const bottle ={color : "Yellow", price : 500, isCleaned : true, capacity : 1};

const keys = Object.keys(bottle);
const value = Object.values(bottle);
const pair = Object.entries(bottle);
Object.freeze(bottle)
Object.seal(bottle);
bottle.price = 1000
delete bottle.isCleaned;

// console.log(keys)
// console.log(value)
// console.log(pair)
console.log(bottle)