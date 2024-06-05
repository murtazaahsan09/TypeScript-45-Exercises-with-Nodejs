// Creating a Guest List Array
let guestList = ["Murtaza", "Mansub", "Asad", "Elaf"];

// Making variable for those Guest who cant come 
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nai Ahh Sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Jamshed");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding  new value at starting index of array
guestList.unshift("Kerem");

// Adding a new value at ending index of array
guestList.push("Henry");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Olive");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invittion message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

