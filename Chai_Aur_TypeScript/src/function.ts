function makeChai (type:string, cups:number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai ("Masala",3);



function getChaiPrice():number{
    return 25
}


function makeOrder (order: string){
    if(!order) return null
    return order
}

function logChai(): void {
    console.log("Chai is ready");
}


// function orderChai (type?: string){

// }


function orderChai (type: string = "masala"){
     
}


function createChai (order :{
    type: string;
    sugar:number;
    size : "small" | "large"
}): number{
    return 4
}



// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }


const greet = (name: string): string => {
    return `Hello, ${name}!`;
};


// const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet("Rahim")); 



function createUser(name: string, age: number, email?: string): string {
    if (email) {
        return `${name}, ${age}, ${email}`;
    }
    return `${name}, ${age}`;
}

createUser("Rahim", 25);                 
createUser("Karim", 30, "k@gmail.com"); 


function orderItem(item: string, quantity: number = 1): string {
    return `${quantity}x ${item} ordered!`;
}

console.log(orderItem("Chai"));      
console.log(orderItem("Coffee", 3)); 



function addAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(addAll(1, 2, 3));        
console.log(addAll(10, 20, 30, 40)); 