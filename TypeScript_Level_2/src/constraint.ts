//  constraint : strict rules deya


type Student = {id:number, name:string}

const addStudentToCourse =<T extends Student> (studentInfo:T) =>{
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


const student3 ={
    id:444,
    name:"khan",
}


const result = addStudentToCourse(student3);
console.log(result);
