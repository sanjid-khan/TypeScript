// oop - class - object


// class Animal {
//     name:string;
//     species:string;
//     sound:string

//     constructor(name:string, species:string, sound:string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound(){
//         console.log(`${this.name} is making sound: ${this.sound}`);
//     }
// }




//  parameter properties

class Animal {

    constructor(public name:string, public species:string, public sound:string){
    }

    makeSound(){
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}


const dog = new Animal ('dogest bhai', 'dog', "Ghew Ghew");

const cat = new Animal ('Cat bhai', 'cat', "Mew Mew");

// console.log(dog.sound);
// console.log(cat.species);

cat.makeSound();

