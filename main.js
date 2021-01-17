console.log("Greetings from main.js")


let bandNumber = 1


const printToDom = (bandNumber, bandName) => {
  console.log(`${bandNumber}. ${bandName} `);
};

const takeNumber =  (bandName) => {
  printToDom(bandNumber, bandName);
  bandNumber++
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM
