let response: any = "42";

let numericLength: number= (response as string).length;



type Book={
    name:string
};

let bookString= `{"name":"who moved my cheese"}`;

let bookobjbect= JSON.parse(bookString) as Book

// console.log(bookobjbect.title);
console.log(bookobjbect.name);




type Products = {
  name: string
  price: number
}

const json = '{"name":"Laptop","price":1000}';

const product = JSON.parse(json) as Products;

console.log(product.price);
console.log(product.price);




type User = {
  name: string
  age: number
}

const dataa = JSON.parse(response) as User;
console.log(dataa.name);




const inputElement=document.getElementById("username") as HTMLInputElement;
console.log(inputElement.value);





type Product = {
    id: number;
    name: string;
    price: number;
};

async function getProducts() {
    const response = await fetch("https://api.example.com/products");
    
    const data = await response.json() as Product[];
                                  
    // console.log(data[0].name);  
    // console.log(data[0].price); 
}




type AuthUser = {
    id: string;
    name: string;
    token: string;
};


function saveUser(user: AuthUser) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getUser(): AuthUser {
    const raw = localStorage.getItem("user")!; 
    return JSON.parse(raw) as AuthUser;         
}

const user = getUser();
console.log(user.token); 






let value:any

value="chai"
value=[1,2,3]
value=2.5
value.toUpperCase()



let newValue:unknown

newValue="chai"
newValue=[1,2,3]
newValue=2.5

if(typeof newValue === "string"){
    newValue.toUpperCase();
}




try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
}




type Role= "admin" | "user" | "superadmin";

function redirectBasedRole(role:Role):void{
     if(role === "admin"){
        console.log("Redirecting to admin dashboard");
     }
     if(role === "user"){
         console.log("Redirecting to user dashboard");
     }

     role;
}



function neverReturn (): never{
    while(true){
        
    }
}