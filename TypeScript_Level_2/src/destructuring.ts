// object destructuring
// array destructuring


const user ={
    id: 123,
    name: {
        firstName : "sanjid",
        middleName: "Zaman",
        lastName: "Khan"
    },
    gender: "Male",
    favouriteColor: "black"
}


// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

const {gender} =user;

//  const { favouriteColor } = user;

// const { favouriteColor: myFavouriteColor } = user;
// console.log(myFavouriteColor);


const {
    favouriteColor,
    name: {middleName : myMiddleName}
} = user;

// console.log(myMiddleName);


const friends = ["karim", "Rahim", "Mahim"];

const [ , , myBestFriend] =friends;

console.log(myBestFriend)






