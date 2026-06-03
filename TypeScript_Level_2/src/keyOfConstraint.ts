//  keyof : type operator


type RichPeoplesVehicle ={
    car : string, // key: value
    bike: string;
    cng : string;
}


// type  MyVehicle =  "bike" | "car" | "cng";
type  Myvehicle2 = keyof RichPeoplesVehicle;


const myVehicle: Myvehicle2 = 'cng';
// const myVehicle: Myvehicle2 = "ship";




type User ={
     id: number;
     name: string;
     address:{
       city: string
     }
}




const user ={
    id: 222,
    name: "sanjid",
    address:{
        city: "gazipur",
    }
}


// const myId = user.id;
// const myId = user["id"]
// const myName = user["name"];
// const address= user["address"]

// console.log(myId,myName,address);



const getPropertyFromObj =  <X>(obj: X, key: keyof X)=>{

    return obj[key];
}


// const result1= getPropertyFromObj(user,"name");
// console.log(result1);


const product ={
    brand: "HP",
}

const student ={
    id: 123,
    class: "four"
}


// const result2 = getPropertyFromObj(product, "brand")

const result3 = getPropertyFromObj(student,"class");