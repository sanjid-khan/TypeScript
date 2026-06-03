//  dynamic generalize : Generic


type GenericArray<T> = Array<T>;


// const friends : string [] = ["sanjid", "zaman", "khan"];
// const friends : Array <string>  = ["sanjid", "zaman", "khan"];
 const friends : GenericArray<string>  = ["sanjid", "zaman", "khan"];


// const rollNumbers: number [] = [4,7,16];
// const rollNumbers: Array <number>  = [4,7,16];
const rollNumbers:  GenericArray<number>  = [4,7,16];


// const isEligibleList: boolean[] =[true,false,true];
// const isEligibleList: Array <boolean> =[true,false,true];
const isEligibleList: GenericArray<boolean> =[true,false,true];



type User = {name:string; age:number}

const userList : GenericArray<User> =[
     {
        name : "sanjid",
        age  : 23
     },
     {
        name: "khan",
        age : 55
     }
]




type Coordinates <X, Y> =[X, Y];

const coordinates1 : Coordinates <number,number> = [20,30];

const coordinates2 : Coordinates <string,string> = ["20","30"];



//  Practice

