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



type Brew= {brewTime: number}
const coffee ={brewtime:5, beans: "Arabica"}
// const ChaiBrew: Brew =coffee


type User ={
    username: string,
    password: string
}

const u: User={
    username: "sanjid",
    password: "1234"
}


type Item={name:string, quantity:number}
type Address= {street: string, pin:number}

type Order ={
    id: string;
    items: Item[];
    address: Address
}

