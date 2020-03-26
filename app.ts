class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string){
        this.name = name
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Nikhil", "nikhil")
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");

// Inheritance
class Max extends Person {
    // name: "Max";

    constructor(username: string){
        super("Max", username);
        this.age = 31;
    }

}

const max = new Max("max");
console.log(max);
