let guestList = ["Murtaza", "Mansun", "Asad", "Elaf"];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh Skta");

guestList.splice(0, 1, "Jamshed");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));

