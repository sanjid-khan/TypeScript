"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(this.name);
    }
    meet() {
        console.log(this.age);
    }
}
// Blueprint of an Object
const obj1 = new Person("Rohit", 20);
const obj3 = new Person("Nitin", 11);
const obj15 = new Person("Khan", 24);
const obj20 = new Person("sadin", 18);
console.log(obj1);
console.log(obj3);
console.log(obj20);
console.log(obj1.name);
obj1.greet();
console.log(obj15.name);
console.log(obj20.age);
obj15.meet();
// public private protected
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
    greet() {
        console.log(this.name);
    }
}
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name);
// console.log(P1.age);
// console.log(P1.balance);
console.log(P1.meet());
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    greet() {
        console.log(this.balance);
    }
    meet() {
        console.log("hello Coder army");
        return 10;
    }
}
const E1 = new Employee(420, "Rohit", 20, 320);
console.log(E1);
console.log(E1.meet());
console.log(E1.salary);
// Generic: Template
// function value(a:(number | string | number[] |boolean)):(number | string | number[] | boolean){
//     return a;
// }
function value(a) {
    return a;
}
// function num<U> (x:U):U{
//     return x;
// }
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
console.log(value(["Mohan", "Rohan"]));
const obj50 = {
    name: "sanjid",
    age: 22,
    id: 216,
    dept: 1216
};
const obj60 = {
    name: "Sanjid",
    age: 22,
    id: 222,
    dept: "CSE"
};
// | Part           | Meaning                   |
// | -------------- | ------------------------- |
// | `<T>`          | Generic type placeholder  |
// | `a: T`         | Parameter type            |
// | `: T`          | Return type               |
// | Call er shomoy | T automatically infer hoy |
//# sourceMappingURL=classes.js.map