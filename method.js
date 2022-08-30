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
const output = person.exam()
// console.log(output)
const reExam = person.improvement('english');
console.log(reExam)
const remaning = person.treatDey(900, 100);
console.log(remaning)
const dolaRemaning = person.treatDey(500, 50);
console.log(dolaRemaning)