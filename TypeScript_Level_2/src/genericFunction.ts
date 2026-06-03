// Generic Function


// const createArrayWithString = (value:string) =>
// [value];


// const createArrayWithNumber = (value: number)=> 
// [value];


// const createArrayWithUserObj = ( value: { id:
//     number, name :string}) => {
//         return [value];
//     }



// const arrString = createArrayWithString("Apple");
// const arrNum =createArrayWithNumber(216);
// const arrObj =createArrayWithUserObj({
//     id:123,
//     name: "Sanjid",
// })



// const createArrayWithGeneric = <T> (value: T)=>
// {
//      return [value]
// }


const createArrayWithGeneric= <T>(value: T): T[] =>{

    return [value];
}


const arrString = createArrayWithGeneric("Apple");
const arrNum =createArrayWithGeneric(216);
const arrBool=createArrayWithGeneric(true);
const arrObj =createArrayWithGeneric({
    id:123,
    name: "Sanjid",
})



// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
    param1,
    param2
];


const createArrayTupleWithGeneric = <X,Y> 
(param1:X, param2:Y)=>[
    param1,
    param2
];


// const createArrayTupleGeneric = <X, Y>(
//   param1: X,
//   param2: Y
// ): [X, Y] => {
//   return [param1, param2];
// };


const res1= createArrayTupleWithGeneric('sanjid',true);
const res2= createArrayTupleWithGeneric(222, { name: "Khan"});






const addStudentToCourse =<T> (studentInfo:T) =>{
     return{
        course:"Next Level",
        ...studentInfo
     }
}



const student1 ={
    id:123,
    name:"Sanjid",
    hasPen:true,
}


const student2 ={
    id: 121,
    name: "Zaman",
    hasCar:true,
    isMarried:true,
}


const result = addStudentToCourse(student1);
console.log(result);




