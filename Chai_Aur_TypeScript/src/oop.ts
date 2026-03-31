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



interface HotDrink extends DrinkInterface {
    temperature: number
}

class MasalaChai implements HotDrink {
    name = "Masala Chai"
    price = 30
    temperature = 90

    serve() {
        return `Serving ${this.name} at ${this.temperature}°C`
    }
}




// OOP  Practice 

class Manush {
  naam: string;
  boyos: number;

  constructor(naam: string, boyos: number) {
    this.naam = naam;
    this.boyos = boyos;
  }

  parichoy(): string {
    return `আমার নাম ${this.naam}, বয়স ${this.boyos}`;
  }
}


const rahim = new Manush("রহিম", 25);
console.log(rahim.parichoy()); 



class BankAccount {
  public naam: string;        
  private balance: number;    
  protected pin: number;      

  constructor(naam: string, balance: number, pin: number) {
    this.naam = naam;
    this.balance = balance;
    this.pin = pin;
  }

  // private balance দেখার জন্য public method
  getBalance(): number {
    return this.balance;
  }

  deposit(taka: number): void {
    this.balance += taka;
  }
}

const account = new BankAccount("করিম", 5000, 1234);
console.log(account.naam);          
console.log(account.getBalance());  
// console.log(account.balance);    error bcz private



class Car {
  
  constructor(
    public brand: string,
    public model: string,
    private price: number
  ) {}

  info(): string {
    return `${this.brand} ${this.model} - ৳${this.price}`;
  }
}

const car = new Car("Toyota", "Corolla", 2500000);
console.log(car.info());



class Pranic {  
  naam: string;
  constructor(naam: string) {
    this.naam = naam;
  }
  shwas(): void {
    console.log(`${this.naam} শ্বাস নিচ্ছে`);
  }
}

class Kukur extends Pranic {  // Child
  breed: string;
  constructor(naam: string, breed: string) {
    super(naam);  
    this.breed = breed;
  }
  bark(): void {
    console.log(`${this.naam} ঘেউ ঘেউ করছে!`);
  }
}

const tommy = new Kukur("টমি", "Labrador");
tommy.shwas();  
tommy.bark();   




class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {  
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private w: number, private h: number) {
    super();
  }
  area(): number {  
    return this.w * this.h;
  }
}

const ca = new Circle(5);
const r = new Rectangle(4, 6);
console.log(ca.area()); 
console.log(ca.area()); 



class Student {
  private _marks: number = 0;

  get marks(): number {        
    return this._marks;
  }

  set marks(value: number) {   
    if (value < 0 || value > 100) {
      console.log("ভুল নম্বর!");
    } else {
      this._marks = value;
    }
  }
}

const s = new Student();
s.marks = 85;           
console.log(s.marks);   
s.marks = 150;          


class MathHelper {
  static PI = 3.14159;

  static square(n: number): number {
    return n * n;
  }
}


console.log(MathHelper.PI);          
console.log(MathHelper.square(4));  



abstract class Animal {
  abstract sound(): string;  

  sleep(): void {
    console.log("ঘুমাচ্ছে...");
  }
}

class Biral extends Animal {
  sound(): string {
    return "মিউ মিউ";
  }
}

// const a = new Animal(); // ❌ Error!
const b = new Biral();
console.log(b.sound()); 
b.sleep();             



interface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Flyable, Swimmable {  
    
  altitude = 100;

  fly(): void {
    console.log("হাঁস উড়ছে!");
  }
  swim(): void {
    console.log("হাঁস সাঁতার কাটছে!");
  }

}

