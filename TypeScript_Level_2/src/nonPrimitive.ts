//  array, object

//  tupple

let bazarList : string [] =['eggs','milk','sugar'];

// bazarList.push(true);



let mixedArr : (string | number) [] = ["eggs",12,'milk', 16];

mixedArr.push(10);
mixedArr.push("sanjid");
// mixedArr.push(true);


let coordinates : [number,number] = [20,30];

let couple : [string,string] =['Husband','Wife'];


let SanjidNameAndRoll : [string, number] = ["sanjid",216];

let destination : [string,string,number] = ["Dhaka","Gazipur",100];



let  arr : string [] =['sanjid','khan','sadin','tufan'];

arr.push('saron');

let arr2: number [] =[10,20,30,40,50];
arr2.push(90);

let arr3: (number | string | boolean) [] =["sanjid",1231,true,false,]

let dest : [string,number,string] =["sanjid",16,"Gazipur"];


// reference type : object

// const user :{
//     organization: "Programming Hero "; //value =>type : literal types (change hobe na kkhn o)
//     firstName : string;
//     middleName?: string;  // Optional type
//     lastName: string,
//     isMarried: boolean,
// } = {
//     organization: "Programming Hero",
//   firstName: "Sanjid",
//   middleName : "Zaman",
//   lastName : "Khan",
//   isMarried : true,
// }

// user.organization ="Programming Hero Fire";

// console.log(user);



// const user :{
//    readonly organization:string,
//    firstName:string,
//    middleName?:string,
//    lastName: string
// }={
//   organization: "Coder army rohit negi",
//   firstName:"Sanjid",
//   // middleName:"Zaman",
//   lastName:"Khan"
// }

// user.organization="sanjid khan";

// console.log(user.organization);



// const user :{
//     readonly organization: string; // access modifier
//     firstName : string;
//     middleName?: string;  // Optional type
//     lastName: string,
//     isMarried: boolean,
// } = {
//     organization: "Programming Hero",
//   firstName: "Sanjid",
//   middleName : "Zaman",
//   lastName : "Khan",
//   isMarried : true,
// }


// user.organization ="Programming Hero Fire";

// console.log(user);