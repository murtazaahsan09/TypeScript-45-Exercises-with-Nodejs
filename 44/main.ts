// Define afunction with a rest parameter that accept items arugments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 diffrent number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lecttuce", "Tomato");