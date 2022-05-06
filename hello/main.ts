
let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 42;
let aged: boolean = false;
let fullAge: number = 100;
const order = Symbol('OrderID');
let padding: string | number;

// TypeScript infers the type of the variable based on the value
// symbol—A unique value created by calling the Symbol constructor
// any—For variables that can hold values of various types, which may be unknown when you’re writing the code
// unknown—A counterpart of any, but no operations are permitted on an unknown without first asserting or narrowing it to a more specific type
// never—For representing unreachable code (we’ll provide an example shortly)
// void—An absence of a value

let message: string = 'Hello World';
console.log(message);

function getTax(income: number): number {
    return income * 0.15;
}
let yourTax = getTax(50000);
console.log(yourTax);


function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

let tax = calcTax('NJ', 50000, 'two');
console.log(tax);

type Foot = number;
type Pound = number;
type Patient = {
    name: string;
    height: Foot;
    weight: Pound;
  }

let patient: Patient = {
    name: 'Joe Smith',
    height: 5,
    weight: 100
}

class Person {
    firstName: string;
    lastName: string;
    age: number;
}

const person = new Person();
person.firstName = "John";
person.lastName = "Doe";
person.age = 38;