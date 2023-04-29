function fakePrint(someThing){
    console.log(someThing);
}

function checkFirstLetterCharacter(someString, someCharacter){
    return someString.charAt(0)===someCharacter;
}

function isEven (someNumber){
    return !(someNumber & 1);
}

const firstCharacterTarget = 'r';
const parityCheck = isEven;

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// if property or property implies acting in both cases, 
// so we print when either criteria is met.
for (let statisticKey in statistics) {
    const statisticValue = statistics[statisticKey];
    const firstCharacterValid = checkFirstLetterCharacter(statisticKey, firstCharacterTarget);
    const parityValid = parityCheck(statisticValue);
    
    for (let isValid in [firstCharacterValid, parityValid]){
        if (isValid) {
            fakePrint(statisticValue);
        }
    }
}
