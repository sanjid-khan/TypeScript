class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet():void{
        console.log(this.name);
    }
    meet():void{
        console.log(this.age);
    }

}

// Blueprint of an Object

const obj1= new Person("Khan",24);
const obj2=new Person("sadin",18);
console.log(obj1);
console.log(obj2); 
console.log(obj1.name);
console.log(obj2.age);
obj1.greet();
obj2.meet();



// public private protected

class Customer {
 public name: string;
 private age: number; 
 protected balance: number;

    constructor(name: string, age: number, balance: number) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    meet (): number{
        this.age=this.age+10;
        return this.age;
    }

    greet():void{
        console.log(this.name);
    }
}

const P1 = new Customer("Sanjid", 20, 420);
console.log(P1.name);
// console.log(P1.age);
// console.log(P1.balance);

console.log(P1.meet());


class Employee extends Customer{
    salary:number;
    
    constructor(salary:number,name:string,age:number,balance:number){
         super(name,age,balance);
        this.salary =salary;
    }

    greet():void{
        console.log(this.balance);
    }

    meet(): number {
        console.log("hello Coder army");
        return 10;
    }
}

const E1= new Employee (420,"Nasim",20,320);
console.log(E1);
console.log(E1.meet());
console.log(E1.salary);
console.log(E1.meet());



// Generic: Template

function value1(a:(number | string | number[] |boolean)):(number | string | number[] | boolean){
    return a;
}

// function value<T>(a:T):T{
//     return a;
// }


function value<U>(m: U): string | number | U {
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
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["Mohan","Rohan"]));



interface Admin <T,U>{
    name:string,
    age:number,
    addhard:T,
    salary:U
}

const obj10: Admin<number,number> ={
    name:"Rohit",
    age:20,
    addhard:123,
    salary:23213
}

const obj11: Admin<string,number> ={
    name:"ROhit",
    age:20,
    addhard:"32112",
    salary:123
}


interface Per <T,U>{
    name:string,
    age:number,
    id:T,
    dept:U
}

const obj50: Per<number,number>={
    name:"sanjid",
    age:22,
    id:216,
    dept:1216
}

const obj60: Per<number,string>={
    name:"Sanjid",
    age:22,
    id:222,
    dept:"CSE"
}


interface Employer<T, U, V, W> {
    name: string;
    age: number;
    id: T;
    dept: U;
    role: V;
    salary: W;
}

const obj70: Employer<number, string, string, number> = {
    name: "Sanjid",
    age: 22,
    id: 101,
    dept: "CSE",
    role: "Admin",
    salary: 5000
}



interface Per<T, U> {
    name: string;
    age: number;
    id: T;
    dept: U;
}

interface Job<V, W> {
    role: V;
    salary: W;
}

type Employeer<T, U, V, W> = Per<T, U> & Job<V, W>;

const emp: Employeer<number, string, string, number> = {
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
