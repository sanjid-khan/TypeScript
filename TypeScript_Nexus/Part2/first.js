"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
let x = 10;
let val = "Sanjid";
let money;
// any avoid kora hoy karon TypeScript off hoye jay
money = 20;
money = "sanjid";
console.log(money.toUpperCase());
// unknown a type check korte hobe
let value1;
value1 = 20;
if (typeof value1 === "number") {
    console.log("Number:", value1.toFixed(2));
}
value1 = "Sanjid";
if (typeof value1 === "string") {
    console.log("String:", value1.toUpperCase());
}
value1 = true;
if (typeof value1 === "boolean") {
    console.log("Boolean:", value1);
}
const values = [50, "sanjid", true, null, undefined];
values.forEach((value2) => {
    if (typeof value2 === 'number') {
        console.log("Number:", value2.toFixed(3));
    }
    else if (typeof value2 === 'string') {
        console.log("String:", value2.toUpperCase());
    }
    else if (typeof value2 === 'boolean') {
        console.log("Boolean:", value2);
    }
    else if (value2 === null) {
        console.log("It is null");
    }
    else {
        console.log("It is undefined");
    }
});
// Non Primitive
let arr = [2, 3, 5, 6, 6, 7];
let arr2 = ["Rohit", 20, 11, "sohan"];
arr2.push(10);
let array3 = ["sanjid", 3, 4, 5, "khan", true];
let array4 = ["sadin", 2, 3, 5, true, null];
let tuple = ["Khan", 1231, true];
// Objects
// lnline
let obj1 = {
    name: "Rohit",
    age: 20,
    gender: "female"
};
let man;
man = {
    name: "sanjid",
    age: 22,
    id: 216
};
let c1 = {
    name: "Sanjid",
    age: 20,
    id: "216"
};
let obj4 = {
    name: "sanjid",
    age: 22,
    id: 216,
    dept: "CSE",
    gender: "Male",
};
console.log(obj4);
let user = {
    name: "Sanjid",
    age: 22,
    id: 101,
    isAdmin: true
};
console.log(user.name);
console.log(user.id);
let staff1 = {
    name: "Nasim",
    age: 25,
    empId: 123,
    department: "IT"
};
console.log(staff1);
// interface e use korbo object a sob somoy
//# sourceMappingURL=first.js.map