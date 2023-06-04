class Parents {
    constructor(){
        this.FatherName = "Jhon cena"
    }
}

class Child extends Parents {
    constructor(childName){
        super()
        this.name = childName
    }
}

const child1 = new Child ('beibar')
const child2 = new Child ('Joe')
const child3 = new Child ('rock')

console.log(child1,child2,child3)