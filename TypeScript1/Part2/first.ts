let num:number=10;

let x=10;
let val="Rohit";

let money:any;

// any avoid kora hoy karon TypeScript off hoye jay

money=20;
money="Rohit";

console.log(money.toUpperCase());



// unknown a type check korte hobe


let value1:unknown

value1=20;
value1="Rohit";

if(typeof value1=='string')
console.log(value1.toUpperCase());
if(typeof value1=='number')
console.log(value1.toFixed(2));




let value2:unknown

value2=50;
value2="sanjid";
value2=true;

if(typeof value2=='number')
console.log(value2.toFixed(3));

if(typeof value2=='string')
console.log(value2.toUpperCase());

if(typeof value2=='boolean')
    console.log(value2);



let value3: unknown;

value3 = 10;
value3 = "sanjid";
value3 = true;
value3 = null;
value3 = undefined;

if (typeof value3 === "number")
    console.log(value3.toFixed(3));

if (typeof value3 === "string")
    console.log(value3.toUpperCase());

if (typeof value3 === "boolean")
    console.log(value3);

if (value3 === null)
    console.log("It is null");

if (typeof value3 === "undefined")
    console.log("It is undefined");



// sob value print er jonno code


let value01: unknown;

value01 = 20;
if (typeof value01 === 'number') {
    console.log(value01.toFixed(2)); 
}

value01 = "Rohit";
if (typeof value01 === 'string') {
    console.log(value01.toUpperCase()); 
}


let value02: unknown;

value02 = 50;
if (typeof value02 === 'number') {
    console.log(value02.toFixed(3)); 
}

value02 = "sanjid";
if (typeof value02 === 'string') {
    console.log(value02.toUpperCase()); 
}

value02 = true;
if (typeof value02 === 'boolean') {
    console.log(value02); 
}


let value03: unknown;

value03 = 10;
if (typeof value03 === "number") {
    console.log(value03.toFixed(3));
}

value03 = "sanjid";
if (typeof value03 === "string") {
    console.log(value03.toUpperCase());
}

value03 = true;
if (typeof value03 === "boolean") {
    console.log(value03);
}

value03 = null;
if (value03 === null) {
    console.log("It is null");
}

value03 = undefined;
if (typeof value03 === "undefined") {
    console.log("It is undefined");
}




// Non Primitive

let arr:number[]=[2,3,5,6,6,7];


let arr2:(string | number)[] = ["Rohit",20,11,"sohan"];
arr2.push(10);


let array3:(string | number |boolean)[]=["sanjid",3,4,5,"khan",true]

let array4:(string | number | boolean | null)[]=["sadin",2,3,5,true,null];

let arr4:(string | number | boolean)[]=["rohit",10,false];

let tuple:[string,number,boolean]=["Khan",1231,true];


// Objects
// lnline
let obj1:{name:string, age:number, gender:string}={
    name:"Rohit",
    age:20,
    gender:"female"
}


let person :{name:string, age:number, balance:number}
person ={ 
    name:"rohit",
    age:20,
    balance:420
};


let man :{name:string, age:number, id:number}
man={
    name:"sanjid",
    age:22,
    id:216
}



type customer={
    name:string,
    age:number,
    id:string
}

let c1: customer={
    name:"Rohit",
    age:20,
    id:"216"
}



interface admin {
    names:string,
    age:number,
    position:string
};

interface admin{
    id:number
}

let obj3: admin={
    names:"sadin",
    age:20,
    position:"manager",
    id:23
}


interface sanjid {
    name:string,
    age:number,
    id:number,
    dept:string
}

interface sanjid{
    gender:string,
}

let obj4: sanjid={
    name:"sanjid",
    age:22,
    id:216,
    dept:"CSE",
    gender:"Male",
}

console.log(obj4)



type A = {
    name: string;
    age: number;
}

type B = {
    id: number;
    isAdmin: boolean;
}


type C = A & B;

let user: C = {
    name: "Sanjid",
    age: 22,
    id: 101,
    isAdmin: true
};

console.log(user.name);   
console.log(user.id);     




interface Person {
    name: string;
    age: number;
}

interface Employee {
    empId: number;
    department: string;
}


type Staff = Person & Employee;

let staff1: Staff = {
    name: "Nasim",
    age: 25,
    empId: 123,
    department: "IT"
};

console.log(staff1);


// interface e use korbo object a sob somoy