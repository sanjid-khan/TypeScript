let subs: number | string = '1M'


let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' ='middle'

airlineSeat= 'aisle';


const orders= ["12", "20", "28","42"];

let currentorder: string |undefined;

for(let order of orders){
    if(order==="28"){
        currentorder=order;
        break;
    }
}

console.log(currentorder);



// practice nije nije

let mixedData: (string | number)[] = [1, "chai", 2, "coffee", 404];

function getOrderDetails(funtionType: number | string) {
    console.log(funtionType);
}

getOrderDetails(101);
getOrderDetails("ORDER_22");


let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

let userRole: 'admin' | 'editor' | 'viewer' = 'viewer';
userRole = 'admin';