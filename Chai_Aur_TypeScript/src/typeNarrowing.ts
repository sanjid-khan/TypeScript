function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }

    return `Chai order: ${kind}`;
}



function serverChai (msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }

    return `Serving default masala chai`;
}


function orderChai (size: "small" | "medium" | "large" | number){
    if(size==="small"){
        return `small cutting chai...`
    }
    if(size==="medium" || size==="large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}



class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class Cutting{
    serve(){
        return `Serving cutting Chai`;
    }
}

function serve (chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}



type ChaiOrder={
    type: string
    sugar:number
}


function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj==='object' && 
        obj!== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return  `Serving ${item.type} chai with $ {item.sugar} 
        sugar`
    }
    return `Serving custom chai: ${item}`
}


type MasalaChai= {type: "masala"; spicelevel: number};
type GingerChai= {type: "ginger"; amout: number};
type ElaichaiChai= {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichaiChai


function MakeChai(order: Chai){
      switch(order.type){
        case "masala":
            return `Masala chai`
            break;

        case "elaichi":
            return `Elaichi chai`
            break;
        
        case "ginger":
            return `Ginger chai`
            break;
      }
}



function brew (order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        // 
    }
}



// function isStringArray (arr:unknown): arr is string []{

// }