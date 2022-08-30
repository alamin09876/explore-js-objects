// 1...normal declare objects
const data = {};
data.name = "alamin";
data.phone = "01703607407";
data.behavior = function(){
    // console.log("good")
}
// console.log(data)

const student = {
    name : "Alamin",
    Phone : "01703607407",
    behavior : function(){
        console.log("good")
    }
}
// console.log(student)

// 2....objects constroctor 

const person = new Object();
// console.log(person);

// 3.....objects creat method
// const item = Object.create(null);
const atel = Object.create(student)
// console.log(atel.name);
// 4.....class

class person1{
    name = "Abul";
    address = "Sadar Ghat";
    constructor(age){
        this.age = age;
    }

}
const person2 = new person1(52);
console.log(person2);
