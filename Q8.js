function Student(name){
    this.name = name
}
Student.prototype.printDatails = function(){
    console.log(`Hello , the student is ${this.name}`)
}
const answer = new Student("mithun")
answer.printDatails()