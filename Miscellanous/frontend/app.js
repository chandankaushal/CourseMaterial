class Person{
    constructor(name,age)

    {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks) {
        super(name,age);
        this.marks = marks;
        
    }
}