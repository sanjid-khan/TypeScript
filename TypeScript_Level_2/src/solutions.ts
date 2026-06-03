// Problem 1

const filterEvenNumbers=( numbers: number[]): number [] =>{
   
    return numbers.filter((num)=>num%2==0);

}




// Problem 2

const reverseString = (str: string): string => {
  const charArr: string[] = str.split("");
  let left: number = 0;
  let right: number = charArr.length - 1;

  while (left < right) {

    const temp = charArr[left] as string;  
    charArr[left] = charArr[right] as string ;
    charArr[right] = temp as string;

    left++;
    right--;
  }

  return charArr.join("");

};




// Problem 3

type  StringOrNumber = string | number;

const  checkType = (value : StringOrNumber) :  string =>{

    if(typeof value === 'string')
        return "String";

    return "Number";
}





//  Problem 4

const getProperty = <X> (obj: X , key: keyof X)=>{

    return obj[key];
}





//  Problem 5

interface Book{
    title:string,
    author:string,
    publishedYear:number,
}

const toggleReadStatus = <T extends Book>(BookInfo: T):T & { isRead: boolean} =>{
    return{
        ...BookInfo,
        isRead:true,
    };
}





//  Problem 6

class Person {
    name: string;
    age: number;

    constructor (name: string , age: number){
        this.name = name;
        this.age = age;
    }
}


class Student extends Person{
    grade: string;

    constructor( name: string , age: number, grade: string){
        super(name,age);
        this.grade=grade;
    }

     getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade};`
    }
}






//  Problem 7

const getIntersection =(arr1: number[], arr2: number[]): number [] =>{

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter((num)=> set2.has(num));

  }


  

