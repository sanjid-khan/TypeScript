function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }

    return `Chai order: ${kind}`;
}

function greetUser(name: string | null | undefined) {
    if (name === null) {
        console.log("Guest user");
    } else if (name === undefined) {
        console.log("Name not provided");
    } else {
        console.log("Hello, " + name.toUpperCase());
    }
}

function greetUser2(name: string | null | undefined) {
    if (name) {
        console.log("Hello, " + name.toUpperCase()); // ✅ নিশ্চিত string
    } else {
        console.log("No name found");
    }
}




function orderChai (size: "small" | "medium" | "large" | number){
    if(size==="small"){
        return `small cutting chai...`
    }
    if(size==="medium" || size==="large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}



function serveChai(msg? : string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}



class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting Chai`;
    }
}

function serve (chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    return chai.serve();
}




class Order {
    orderId: string;
    constructor(id: string) { this.orderId = id; }
}

class Payment {
    amount: number;
    constructor(amt: number) { this.amount = amt; }
}

function handleRequest(request: Order | Payment){
    if(request instanceof Order){
        console.log("Order ID:", request.orderId)
    }
    else{
        console.log("Payment Amount:", request.amount);
    }
}




type ChaiOrder={
    type: string
    sugar:number
}


function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj==='object' && 
        obj!== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return  `Serving ${item.type} chai with ${item.sugar} 
        sugar`
    }
    return `Serving custom chai: ${item}`
}



type MasalaChai= {type: "masala"; spicelevel: number};
type GingerChai= {type: "ginger"; amout: number};
type ElaichaiChai= {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichaiChai

function MakeChai(order: Chai){
      switch(order.type){
        case "masala":
            return `Masala chai`
            break;

        case "elaichi":
            return `Elaichi chai`
            break;
        
        case "ginger":
            return `Ginger chai`
            break;
      }
}


function brew (order: MasalaChai | GingerChai){
    if("spicelevel" in order){
       console.log(order.spicelevel)
    }
}



type Admin = { role: string; permissions: string[] };
type User  = { role: string; email: string };

function checkAccess (person: Admin | User){
    if('permissions' in person){
        console.log("Admin permissions: ", person.permissions)
    }
    else{
        console.log("User email:", person.email);
    }
}




let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

function handleStatus(status: 'pending' | 'success' | 'error') {
    if (status === 'success') {
        console.log("✅ Request successful!");
    } else if (status === 'error') {
        console.log("❌ Something went wrong!");
    } else {
        console.log("⏳ Still pending...");
    }
}




// type SuccessResponse = { status: "success"; data: string };
// type ErrorResponse   = { status: "error";   message: string };

// type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse) {
//     if (response.status === "success") {
//         console.log("Data:", response.data);       // ✅ SuccessResponse
//     } else {
//         console.log("Error:", response.message);   // ✅ ErrorResponse
//     }
// }



// function isStringArray (arr:unknown): arr is string []{

// }



// Real World use case

// const user: string | null = fetchUser();

// if (user) {
//     console.log(user.toUpperCase()); // ✅ safe
// }


// console.log(user?.toUpperCase());



type ApiResponse =
    | { status: "success"; data: string[] }
    | { status: "error";   message: string }
    | { status: "loading" }


function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log(response.data);
    } else if (response.status === "error") {
        console.log(response.message);
    } else {
        console.log("Loading...");
    }
}



function formatInput(value: string | number) {
    if (typeof value === "string") {
        return value.trim().toUpperCase();
    }
    return value.toFixed(2);
}


type Card   = { cardNumber: string };
type Cash   = { amount: number };

function processPayment(payment: Card | Cash) {
    if ("cardNumber" in payment) {
        console.log("Card:", payment.cardNumber);
    } else {
        console.log("Cash:", payment.amount);
    }
}


