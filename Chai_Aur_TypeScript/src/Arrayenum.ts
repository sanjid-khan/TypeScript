const chaiFlavours: string []= ["masala", "adrak"]
const chaiPrice: number[] =[10,20]


const rating: Array <number> =[3.4,5, 4.0]

type Chai ={
    name:string;
    price:number
}

const menu: Chai []=[
    {name: "masala", price:25},
     {name: "Adrak", price:15},
]


const cities: readonly string []= ["Dhaka", "Sylhet"]
// cities.push("Barishal");


const table: number [][]=[
    [1,2,3],
    [4,5,6]
]


let chaiTuple: [string, number];
chaiTuple=["Masala",20]
// chaiTuple=[20, "Masala"]


let userInfo: [string, number, boolean?]
userInfo=["sanjid",22]
userInfo=["Nasim",24,true]


const location: readonly [number,number]=[28.66, 32.22]
// It can not be changed


const chaiItems: [name:string, price:number]=["Masala",25]


enum Cupsize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=Cupsize.LARGE


enum Status{
    PENDING=100,
    SERVED, //101
    CANCELLED, //102
}


enum ChaiType {
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.MASALA);
// makeChai("masala")


enum RandomEnum {
    ID=1,
    NAME="chai"
}


const enum  Sugars {
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

const s= Sugars.HIGH


let t: [string, number] =["chai",10]
 t.push("extra")