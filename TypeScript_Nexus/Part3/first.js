"use strict";
// const num: number=10;
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "Sanjid",
    age: 20,
    gender: "Male",
};
const obj2 = {
    name: "Rohit",
    balance: 210,
    age: 22
};
const obj3 = {
    name: "Rohit",
    balance: 210,
    age: 22
};
const obj4 = {
    name: "Rohit",
    balance: 210,
    age: 22
};
;
;
const arr = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 18 }, { salary: 20, id: "20" }];
const arr2 = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 18 }, { salary: 20, id: "20" }];
const arr3 = [{ name: "Rohit", age: 20, salary: 2000, id: "m1" }];
arr.forEach((item) => {
    if ("salary" in item) {
        console.log(item.salary);
    }
    else {
        console.log(item.name);
    }
});
// Function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function sanjid(x) {
    return x;
}
console.log(sanjid("khan"));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Sanjid Khan", 4);
function sadin(str, nm) {
    console.log(str, nm);
    return nm;
}
const result = sadin("Sanjid", 50);
console.log(result);
// default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("sanjid");
// Optional Parameter
function Gate(person) {
    console.log(person || "rakib");
}
Gate("shakib");
Gate();
// Arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
// const squareroot= (val:number)=>{
//     return val*val;
// }
// function placeOrder(order:number,callback:(amount:number)=>void):void{
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// Rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 1, 2, 4, 534, 54, 8, 9);
;
const obj8 = {
    name: "Sanjid",
    age: 20,
    salary: "chillar",
    id: 123
};
//# sourceMappingURL=first.js.map