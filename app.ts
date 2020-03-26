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
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Hello'));
console.log(multiply(2, 10))

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: {name: string, age: number} = {
    name: 'Nikhil',
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

// union
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;