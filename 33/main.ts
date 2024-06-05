// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Using For-Loop
for(let oneNumber of numbers){
    let orignalEnding: string;

    if(oneNumber === 1){
        orignalEnding = "st"
    }
    else if(oneNumber === 2){
        orignalEnding = "nd"
    }
    else if(oneNumber === 3){
        orignalEnding = "rd"
    }
    else{
        orignalEnding = "th"
    }

    console.log(`${oneNumber}${orignalEnding}`);
}