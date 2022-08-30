const person = {
    name : 'Rudro Hossain',
    study : "math",
    salary : 5000,
    subject : ["Math", "english","Bangla"],
    exam : function(){
       return this.name + " is a good Student"
    },
    improvement : function(subject){
        this.exam ();
        return `${this.name} is taking improvement exam on ${subject}`
       

    },
    treatDey : function(amount, tips){
        this.salary = this.salary - amount - tips;
        return this.salary;
    }
}

const person1 ={
    name : "Alamin Ahmed",
    salary : 8000,
}
// using call function we can get value of person . And we can use it person 2
const result2 = person.exam.call(person1);
console.log(result2);
const result3 = person.treatDey.call(person1, 400, 40)
console.log(result3);

const result4 = person.treatDey.apply(person1, [1000, 100])
console.log(result4)

const result5 = person.treatDey.bind(person1);
const remaning = result5(1000, 100);
console.log(remaning);