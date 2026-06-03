//  mapped types


//  map


const arrayOfNum: number [] = [1,3,4];

const arrayOfstring: string [] = ["1","3","4"];

const arrayOfStringMap: string [] = arrayOfNum.map((num)=> num.toString());

console.log(arrayOfStringMap);



type AreaOfNum ={
    height: number;
    width: number;
}

type height =AreaOfNum["height"];


// type AreaOfString ={
//      height: string;
//      width: string;
// }



// type typeAreaOfString ={
//      [key in "height" | "width"] : string;
// }



type Area<T> ={
     [key in keyof T] : T[key];
}

// key >> height >> string
// key >> width >> number

//  T => { height:string;  width:string }

//  T["width"]: number;



//  "height" | "width"


const area1: Area<{ height: string; width:string}> ={
     height :'50',
     width: 'sanjid',
}