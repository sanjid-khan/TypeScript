
let anything : any;

anything = 'Sanjid';


const kgToGMConverter = (input : string | number) : string | number | undefined =>{

    if( typeof input === 'number'){
        return input * 1000;
    }
    else if (typeof input === 'string'){
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value)*1000}`;
    }
}


const result1 = kgToGMConverter(2) as number;
console.log({ result1});

const result2 = kgToGMConverter("2 kg") as string;
console.log({ result2 });



type CustomError ={
    message: string;
}

try{

}catch(err){
    console.log((err as CustomError).message);
}




//  practice


let value : any = "Hello";
let strLength : number = (value as string).length;



let data : any  = "Sanjid";
let upper : string = (data as string).toUpperCase();
console.log(upper);



//  object Assertion
type User ={
    id : number;
    name: string;
}


let userData : any ={
    id : 1,
    name: "Sanjid"
};

let user = userData as User;

console.log(user.name);



// DOM
const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "Hello";

