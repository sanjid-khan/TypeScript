type ChaiOrder ={
    type:string,
    sugar:number,
    strong:boolean,
}

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}



type TeaRecipe ={
    water: number;
    milk:number
}


// class MasalaChai implements TeaRecipe{
//      water = 100;
//      milk  = 50;
// }



 interface CupSize {

    size: "small" | "large"
 }

class Chai implements CupSize{
       
    size: "small" | "large" = "large";
}



// type Response= {ok:true} | {ok:false}
// class myRes implements Response{
//     ok:boolean=true;
// }



// Literal type
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t);
}



type BaseChai = {teaLeaves: number}
type Extra ={masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai ={
    teaLeaves: 2 ,
    masala: 1
}


type User ={
    username: string;
    bio?: string
}

const u1: User ={username: "Hitesh"}
const u2: User= {username: "Hitesh", bio:"Engineer"}


type Config ={
    readonly appName: string
    version: number
}


const cfg: Config ={
    appName : "MasterJi",
    version:1
}


// cfg.appName= "ChaiCode"
//  ay khane error dibe karon readonly thakle matro ekbar e set kora jabe




type Person = {
    name: string;
    age: number;
    email: string;
};

const user1: Person = { name: "Rahim", age: 25, email: "rahim@gmail.com" }; // ✅
const user2: Person = { name: "Karim", age: 30, email: "karim@gmail.com" }; // ✅

// Function a use
function getUser(user: Person): number {
    // return user.name;
       return user.age;
}


interface Product {
    id: number;
    name: string;
    price: number;
}

const product: Product = {
    id: 1,
    name: "Chai",
    price: 20
};



// Type — Primitive, Union, Intersection সব করা যায়
type ID = string | number;           // ✅ Union করা যায়
type Name = string;                  // ✅ Primitive হতে পারে

// Interface — শুধু Object এর জন্য
interface Users {
    name: string;
}

// Interface Extend করা যায় — Type এ হয় না এভাবে
interface Admin extends Users {
    permissions: string[];
}

const admin: Admin = {
    name: "Rahim",          // User থেকে আসছে
    permissions: ["delete"] // Admin এর নিজের
};

// Type দিয়েও Extend করা যায় — & দিয়ে
type AdminType = User & { permissions: string[] };



// type Details = {
//     name: string;
//     age: number;
//     email?: string; // ? মানে থাকতেও পারে, না থাকলেও চলবে
// };

// const user1: Details = { name: "Rahim", age: 25 };                          // ✅ email ছাড়া
// const user2: Details = { name: "Karim", age: 30, email: "k@gmail.com" };    // ✅ email সহ

// // Optional property use করতে আগে check করো
// function printEmail(user: Details) {
//     if (user.email) {
//         console.log(user.email.toUpperCase()); // ✅ safe
//     }
// }


type Cat = { type: "cat"; meow: () => void };
type Dog = { type: "dog"; bark: () => void };

type Pet = Cat | Dog;

function handlePet(pet: Pet) {
    if (pet.type === "cat") {
        pet.meow(); // ✅ Cat
    } else {
        pet.bark(); // ✅ Dog
    }
}


type Info = {
    name: string;
    age: number;
};

type Employee = {
    company: string;
    salary: number;
};


type PersonEmployee = Info & Employee;

const worker: PersonEmployee = {
    name: "Rahim",    
    age: 25,          
    company: "Google",
    salary: 50000     
}; 



type Address = {
    city: string;
    country: string;
};

type Sanjid = {
    name: string;
    age: number;
    address: Address; // nested object
};

const user: Sanjid = {
    name: "Rahim",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(user.address.city); 



type ProductInfo = {
    id: number;
    name: string;
    price: number;
};


const products: ProductInfo[] = [
    { id: 1, name: "Chai",   price: 20 },
    { id: 2, name: "Coffee", price: 50 },
    { id: 3, name: "Juice",  price: 30 },
];


products.forEach(product => {
    console.log(product.name, product.price); 
});