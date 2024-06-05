//Making a array of Countries are Print its Orignal Order
let countriesToVisit: String[] = ["Japan", "Turkey", "Iceland", "America"];
console.log("Orignal Order:", countriesToVisit);

// Print the Array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is stillin its Orignal Order
console.log("Still in Orignal Order:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Acutal Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is stillin its Orignal Order
console.log("Still in Orignal Order:", countriesToVisit);

// We have Changed the Orignal Array Order Now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse())

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Orignal Array Order Now in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());

