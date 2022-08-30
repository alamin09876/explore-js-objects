const first = {a : 2, b: 3, c : 5};
const second = {a : 2, c : 5, b : 3} ;

/* if(first === second){
    console.log("same")
}
else{
    console.log("different")
} */

// do not use this method to compare object or array
//  if we use stringfy we can give same result
/* const firstString = JSON.stringify(first)
const secondString = JSON.stringify(second)
 if(firstString === secondString){
    console.log("same")
}
else{
    console.log("different")
}  */



// this is the right way to comparw objects 
function compareObject (first, second){
    const firstKey = Object.keys(first)
    const secondKey = Object.keys(second)

    if(firstKey.length === secondKey.length){
        for (const key of firstKey){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
}
console.log(compareObject(first, second))