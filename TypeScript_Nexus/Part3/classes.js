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
const obj1 = new Person("Khan", 24);
const obj2 = new Person("sadin", 18);
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
console.log(obj2.age);
obj1.greet();
obj2.meet();
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
const P1 = new Customer("Sanjid", 20, 420);
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
const E1 = new Employee(420, "Nasim", 20, 320);
console.log(E1);
console.log(E1.meet());
console.log(E1.salary);
console.log(E1.meet());
// Generic: Template
function value1(a) {
    return a;
}
// function value<T>(a:T):T{
//     return a;
// }
function value(m) {
    if (typeof m === "string") {
        return m.toUpperCase();
    }
    else if (Array.isArray(m)) {
        return m.length;
    }
    else {
        return m;
    }
}
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
console.log(value(["Mohan", "Rohan"]));
const obj10 = {
    name: "Rohit",
    age: 20,
    addhard: 123,
    salary: 23213
};
const obj11 = {
    name: "ROhit",
    age: 20,
    addhard: "32112",
    salary: 123
};
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
const obj70 = {
    name: "Sanjid",
    age: 22,
    id: 101,
    dept: "CSE",
    role: "Admin",
    salary: 5000
};
const emp = {
    name: "Sanjid",
    age: 22,
    id: 101,
    dept: "CSE",
    role: "Admin",
    salary: 5000
};
// | Part           | Meaning                   |
// | -------------- | ------------------------- |
// | `<T>`          | Generic type placeholder  |
// | `a: T`         | Parameter type            |
// | `: T`          | Return type               |
// | Call er shomoy | T automatically infer hoy |
//# sourceMappingURL=classes.js.map