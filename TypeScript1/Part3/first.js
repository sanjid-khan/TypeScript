"use strict";
// // const num: number=10;
Object.defineProperty(exports, "__esModule", { value: true });
// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhr?:number,
//     // dept?:string,
// }
// const obj:Person= {
//     name:"Rohit",
//     age:20,
//     gender:"Male",
// }
// // Lastest example
// interface customer{
//     name:string,
//     age:number,
//     balance:number
// }
// const obj2: Readonly<customer>={
//      name:"Rohit",
//      balance:210,
//      age:22
// }
// Partial : All Property becomes optional
// Required: All property should be filled
// Readonly: The property can only be read, write is not avaiable
// // Array of Objects
// interface people {name:string, age:number};
// interface manager {salary:number, id:string};
// const arr: (people | manager)[]= [{name:"Rohit",age:20},{name:"Mohit",age:18},{salary:20,id:"20"}]
// // Function in TS
// function greet(a:number):number{
//     console.log(a);
//     return a+5;
// }
// console.log(greet(10));
// function sanjid(x:string):string{
//     return x;
// }
// console.log(sanjid("khan"));
// function meet(msg:string, val:number):void{
//     console.log(msg,val);
// }
// meet("Sanjid Khan",4);
// function sadin(str:string, nm:number):number{
//     console.log(str,nm);
//     return nm;
// }
// const result= sadin("Sanjid",50);
// console.log(result);
// // default parameter
// function neet(msg:string="Jit"){
//     console.log(msg);
// }
// neet();
// neet("sanjid");
// function abc(def:string="Rohit"){
//     console.log(def);
// }
// abc();
// abc("Sanjid");
// // Optional Parameter
// function Gate(person?:string){
//     console.log(person || "Mohan");
// }
// Gate("Rohit");
// Gate();
// function xyz(opt?:string){
//     console.log(opt || "Sanjid");
// }
// xyz("Sadin");
// xyz();
// // Arrow function
// const sum=(a:number,b:number)=>{
//     return a+b;
// }
// console.log(sum(3,4));
// const mul=(x:number,y:number)=>{
//     return x*y;
// }
// console.log(mul(5,4));
// // callback function
// type chill=(amount:number)=>void;
// // const squareroot= (val:number)=>{
// //     return val*val;
// // }
// // function placeOrder(order:number,callback:(amount:number)=>void):void{
// function placeOrder(order:number,callback:chill):void{
// const amount:number=order+10;
// callback(amount);
// }
// placeOrder(10,(amount)=>{
//   console.log(amount);
// })
// // Rest Parameter
// function total(...arr:number[]){
//    let ans:number=0;
//    arr.forEach((val:number)=>ans=ans+val);
//    console.log(ans);
// }
// total(2,3,1,2,4,534,54,8,9);
// // extend keyword
// interface human{
//     name:string,
//     age:number
// };
// interface Teacher extends human{
//     salary:string,
//     id:number
// }
// interface BankEmployee extends human{
//     salary:string,
//     position: string
// }
// const obj8:Teacher={
//     name:"Rohit",
//     age:20,
//     salary:"chillar",
//     id:123
// }
//# sourceMappingURL=first.js.map