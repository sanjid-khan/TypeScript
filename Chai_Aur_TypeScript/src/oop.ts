// class Chai{
//     flavour :string;
//     price : number

//     // constructor(flavour:string, price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }

//     constructor(flavour:string){
//         this.flavour = flavour
//         console.log(this);
//     }
// }

// const masalaChai = new Chai ("Ginger",20)
// masalaChai.flavour = "masala"




class Chai {
    public flavour : string = "Masala"

    private secretIngredients :string = "Cardamom"

    reveal(){
        return this.secretIngredients //ok
    }

}

// const c = new Chai ()
// c.reveal();



class Shop {
    protected shopName = "Chai corner"
}


class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

new Branch().getName




class Wallet {
    #balance = 100

    getBalance (){
        return this.#balance
    }
}

const w = new Wallet ()
console.log(w.getBalance())



class Cup{
    readonly capacity : number =250

    constructor(capacity:number){
        this.capacity = capacity
    }
}



class ModernChai {
    private _sugar =2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error ("Too sweet")
            this._sugar = value
    }
}

const c = new ModernChai()
console.log(c.sugar)
c.sugar = 3
console.log(c.sugar)




class EkChai {
    static shopName = "ChaiCode coffe"

    constructor (public flavour: string) {}
}

console.log(EkChai.shopName)




abstract class Drink {
    abstract make (): void
}


class MyChai extends Drink {
    make(){
        console.log("Brewing chai")
    }
}



class Heater {
    heat() {}
}

class ChaiMaker{
    constructor (private heater: Heater) {}

    make (){
        this.heater.heat
    }
}



interface Brewable {
    brew(): void
}


interface DrinkInterface {
    name: string
    price: number
    serve(): string
}


class LemonChai implements DrinkInterface {
    constructor(public name: string, public price: number) {}

    serve() {
        return `Serving ${this.name} for ${this.price} taka`
    }
}



interface Brewable {
    brew(): void
}

interface Servable {
    serve(): string
}

class SpecialChai implements Brewable, Servable {
    brew() {
        console.log("Brewing special chai...")
    }
    serve() {
        return "Serving special chai!"
    }
}



