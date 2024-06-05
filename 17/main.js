// Creating a Guest List Array
var guestList = ["Murtaza", "Mansub", "Asad", "Elaf"];
// Making variable for those Guest who cant come 
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Olive");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invittion message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you tp dinner"));
}
// Sending a invitations to the last two guest on the list
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
