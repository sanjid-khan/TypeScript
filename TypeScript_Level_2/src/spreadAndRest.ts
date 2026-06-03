//  spread operator

const friends = ["Rahim","Karim"];

const schoolFriends = ["pintu","Sanjid","Sadin"];

const collegeFriends = ["Mr.Smart", "Mr very very smar"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

// console.log(friends);



const user = {name :"Sanjid", phoneNo: "019"};

const otherInfo = { hobby: "gaming", favouriteColor: "Red"};

const userInfo = {...user, ...otherInfo};

// console.log(userInfo);




//  Rest operator


// const sendInvite = (...friends : string []) => {
//     friends.forEach((friend: string) => console.log(`Send invitation to ${friend}`))
// }

// sendInvite("Sanjid","Sadin","Tufan","Nasim","Rayhan");




// function sum(...numbers: number []): number{
//     return numbers.reduce((acc,curr)=> acc + curr,0);
// }

// console.log(sum(1,2,3,4));




const usr = { name: "Sanjid", age: 22, city: "Dhaka" };

const { name, ...rest } = usr;

console.log(name); 
console.log(rest); 