class person{
    constructor(n = "unknow",a = 0){
        this.name = n
        this.age = a
    }
    getdeatils(){
        return `Name ${this.name} Age ${this.age}`
    }

  
}
const person1 =new person("mithun" ,20)
console.log(person1) // expected output Name mithun , Age:20
const person2 = new person()
console.log(person2.getdeatils()) // Expected output Name: unknow , Age :0