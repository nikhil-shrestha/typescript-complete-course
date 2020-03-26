// string
let myName: string = 'Nikhil';
// myName = 25;

// number
let myAge: number = 25;
// myAge = 'Nikhil';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray,
    Green = 100,
    Blue = 2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("hello!")
}

// argument types
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

// console.log(multiply(2, 'Hello'));
console.log(multiply(2, 10))
