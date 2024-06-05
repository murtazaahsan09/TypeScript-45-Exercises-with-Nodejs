// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Using For-Loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var orignalEnding = void 0;
    if (oneNumber === 1) {
        orignalEnding = "st";
    }
    else if (oneNumber === 2) {
        orignalEnding = "nd";
    }
    else if (oneNumber === 3) {
        orignalEnding = "rd";
    }
    else {
        orignalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(orignalEnding));
}
