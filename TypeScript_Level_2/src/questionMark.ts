// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining


const biyerJonnoEligible = (age: number) =>{
    // if(age>=21){
    //     console.log("You are eligible");
    // }
    // else{
    //     console.log("You are not eligible");
    // }

    const result = age>=21 ? "You are eligible" : "You are not eligible !";
    console.log(result);
}

biyerJonnoEligible(20);



const userTheme = undefined  // atar jonno by default dibe light (null/undefined)
// const userTheme = "Dark theme";

const selectedTheme = userTheme ?? 'Light theme';

console.log(selectedTheme);





const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";

const resultWithNulish = isAuthenticated ?? '"You are guest !';

console.log({ resultWithTernary }, { resultWithNulish });


const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);