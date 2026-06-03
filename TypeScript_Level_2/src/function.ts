//  Function
// arrow function , normal function


// function addNormal(num1: number , num2: number) : number {
//       return num1 + num2;
// }

// const addArrow = (num1: number , num2: number): number => num1 + num2;

// addNormal(22,12);
// addArrow(2,2);



function addNormal(num1: number , num2:number) : number{
    return num1+num2;
}


const addArrow =(num1:number, num2:number): number => (num1*num2);

addNormal(22,12);

addArrow(12,33);



// object => function => method

// const poorUser ={
//     name: "sanjid",
//     balance: 0,
//     addBalance (value: number) : number {
//         const totalBalance = this.balance + value;
//         return totalBalance;
//     }
// }


// poorUser.addBalance(1000);




const arr: number[] = [1,3,5]

const sqrArray = arr.map((elem: number):number => elem * elem);








