var guestList = ["Murtaza", "Mansun", "Asad", "Elaf"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh Skta");
guestList.splice(0, 1, "Jamshed");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
