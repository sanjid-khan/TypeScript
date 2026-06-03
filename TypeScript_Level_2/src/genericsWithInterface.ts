interface Developer <T,X=null>{
    name: string;
    salary: number;
    device: {
        brand:string;
        model:string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?:X
}



interface BrandCharaWatch {
    heartRate : string;
       stopwatch : boolean;
}


const poorDeveloper : Developer <BrandCharaWatch, {brand:'kawasaki',engineCapacity:'1000cc'}> ={
    name : "Mr. Poor",
    salary: 20,
    device:{
        brand: "Lenovo",
        model: "A21",
        releasedYear: '2010'
    },
    smartWatch:{
        heartRate: "200",
        stopwatch: true
    }
}




interface AppleWatch{
    heartRate : string;
       callSupport : boolean;
       calculator : boolean;
       AiFeature: boolean;
}


const richDeveloper : Developer <AppleWatch> ={
    name : "Mr. Poor",
    salary: 20,
    device:{
        brand: "Lenovo",
        model: "A21",
        releasedYear: '2010'
    },
    smartWatch:{
        heartRate: "200",
        callSupport:true,
        calculator:true,
        AiFeature: false,
    },
    bike:null
}




//  practice


interface Employee <T,X=null>{
    id:number;
    name:string;
    role:string;
    salary:number;

    device:T;
    transport?:X;
}




interface Macbook{
    brand: "Apple";
    model: string;
    chip:string;
}

interface WindowsLaptop{
    brand: "Dell" | "Hp" | "Lenovo";
    model:string;
    ram:string
}


interface Bike {
    brand:string;
    engineCC:number;
}



const seniorDev: Employee <Macbook,Bike>={
    id:1,
    name: "Sanjid",
    role: "Backend Developer",
    salary: 50000,

    device:{
        brand: "Apple",
        model: "MacBook Pro M3",
        chip: "M3 Pro"
    },
    transport: {
        brand: "Yamaha",
        engineCC: 155
    }
}



const intern: Employee <WindowsLaptop> ={
     id: 2,
    name: "Rahim",
    role: "Frontend Intern",
    salary: 15000,

    device: {
        brand: "Dell",
        model: "Inspiron 15",
        ram: "8GB"
    },
    transport:null
}



const backendDev: Employee <WindowsLaptop,Bike>={
     id: 3,
    name: "Karim",
    role: "Backend Developer",
    salary: 90000,

    device: {
        brand: "Hp",
        model: "Pavilion",
        ram: "16GB"
    },

    transport: {
        brand: "Honda",
        engineCC: 150
    }
}