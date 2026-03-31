const chai ={
    name:"Masala Chai",
    price:20,
    isHot:true
}

// {
//     name:string;
//     price:number;
//     isHot: boolean
// }


let tea: {
    name:string;
    price:number;
    isHot: boolean
}

tea={
    name:"Ginger tea",
    price:2432,
    isHot:false
}


type Tea ={
    name:string,
    price:number,
    ingredients: string []
}

const adrakChai : Tea ={
    name:"Adrak Chai",
    price:24,
    ingredients : ["ginger", "tea leaves"]
}


type Cup= {size: string};
let smallCup : Cup ={size:"200ml"}


let bigCup ={size: "500ml", material: "steel"}

smallCup=bigCup



type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabica" }
const ChaiBrew: Brew = coffee   



// type User ={
//     username: string,
//     password: string
// }

// const u: User={
//     username: "sanjid",
//     password: "1234"
// }


type Item={name:string, quantity:number}
type Address= {street: string, pin:number}

type Order ={
    id: string;
    items: Item[];
    address: Address
}



type Chai ={
    name:string;
    price: number;
    isHot: boolean
}

const updateChai= (updates: Partial <Chai>)=>{
    console.log("Updating chai with",updates);
}


updateChai({price:25})
updateChai({isHot:true})
updateChai({})


type ChaiOrder={
    name?:string;
    quantity?:number
}

const placeOrder= (order: Required<ChaiOrder>)=>{
    console.log(order);
}


placeOrder({
    name:"Masala chai",
    quantity:2
})



type Chaii ={
    name:string;
    price:number;
    isHot:boolean;
    ingredients: string []
}


type BasicChaiInfo= Pick <Chaii, "name" | "price"  > 

const chaiInfo: BasicChaiInfo={
    name:"Lemon Tea",
    price:30
}



type ChaiNew ={
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients: string;
}

type Public =Omit <ChaiNew, "secretIngredients" >



type UserProfile = {
  name: string
  address: {
    city: string
    country: string
  }
}

const profile: UserProfile = {
  name: "Sanjid",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}




type Location = {
    city: string;
    country: string;
    zip?: string;
};

type Person = {
    name: string;
    age: number;
    address: Location; // nested object
};

const users: Person = {
    name: "Rahim",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(users.address.city);    
console.log(users.address.country); 


console.log(users.address.zip?.toUpperCase()); 



type Student = {
    id: number;
    name: string;
    grade: number;
};

const students: Student[] = [
    { id: 1, name: "Rahim", grade: 90 },
    { id: 2, name: "Karim", grade: 75 },
    { id: 3, name: "Jamal", grade: 85 },
];

// Loop
students.forEach(s => console.log(s.name, s.grade));

// Filter
const topStudents = students.filter(s => s.grade >= 85);
console.log(topStudents); // ✅ Rahim, Jamal

// Find
const student = students.find(s => s.id === 2);
console.log(student?.name); // ✅ Karim

// Map
const names = students.map(s => s.name);
console.log(names); // ✅ ["Rahim", "Karim", "Jamal"]



type BankAccount = {
    readonly id: number;
    owner: string;
    balance: number;
    deposit: (amount: number)  => void;
    withdraw: (amount: number) => void;
    getBalance: ()             => number;
};

const account: BankAccount = {
    id: 1,
    owner: "Rahim",
    balance: 5000,

    deposit(amount: number) {
        this.balance += amount; // this → account object
        console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    },

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. Balance: ${this.balance}`);
    },

    getBalance() {
        return this.balance;
    }
};

account.deposit(1000);   // ✅ Deposited 1000. Balance: 6000
account.withdraw(2000);  // ✅ Withdrawn 2000. Balance: 4000
account.getBalance();    // ✅ 4000




type User = {
    name: string;
    age: number;
    email: string;
    address: { city: string; country: string };
};

const user: User = {
    name: "Rahim",
    age: 25,
    email: "rahim@gmail.com",
    address: { city: "Dhaka", country: "Bangladesh" }
};

// Basic Destructuring
const { name, age, email } = user;
console.log(name, age); // ✅ Rahim 25

// Rename করা
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // ✅ Rahim 25

// Nested Destructuring
const { address: { city, country } } = user;
console.log(city, country); // ✅ Dhaka Bangladesh

// Default Value
const { name: n, age: a = 18 } = { name: "Jamal" };
console.log(n, a); // ✅ Jamal 18 (default)

// Function Parameter এ Destructuring
function printUser({ name, age }: User) {
    console.log(`${name} is ${age} years old`);
}
printUser(user); // ✅ Rahim is 25 years old


type Dog = { type: "dog"; breed: string; bark: () => void };
type Cat = { type: "cat"; color: string; meow: () => void };

type Pet = Dog | Cat;

function handlePet(pet: Pet) {
    
    if (pet.type === "dog") {
        console.log("Breed:", pet.breed);
        pet.bark(); 
    } else {
        console.log("Color:", pet.color);
        pet.meow(); 
    }
}



type BasicUser = { name: string; age: number };
type Contact = { email: string; phone: string };

const userr: BasicUser  = { name: "Rahim", age: 25 };
const contact: Contact = { email: "r@gmail.com", phone: "017..." };

// Spread — দুটো object merge করা
const fullUser = { ...userr, ...contact };
console.log(fullUser);
// ✅ { name: "Rahim", age: 25, email: "r@gmail.com", phone: "017..." }

// Object Update — immutable way
const updatedUser = { ...userr, age: 30 }; // age override হবে
console.log(updatedUser); // ✅ { name: "Rahim", age: 30 }

// Rest — কিছু বাদ দিয়ে বাকিটা নেওয়া
// const { name: userName, ...rest } = fullUser;
// console.log(userName); // ✅ Rahim
// console.log(rest);     // ✅ { age: 25, email: "r@gmail.com", phone: "017..." }