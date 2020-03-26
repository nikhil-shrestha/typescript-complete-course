// Exercise 1 - As Arrow Function
let double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - Default Params
let greet = (name = "Nikhil") => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Spread Operator
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - Spread Operator
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - Destructuring Array
let testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - Destructuring Object
let scientist = {firstName: "Will", experience: 12};
const { firstName, experience } = scientist;
console.log(firstName, experience);