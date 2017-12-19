var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

planets.forEach ((planet) => {
  document.getElementById('planets').innerHTML += planet + '<br>';
});

// Use the map method to create a new array where the first letter of each planet is capitalized
capPlanets = planets.map((planet) => {return planet.charAt(0).toUpperCase() + planet.slice(1);});
  console.log(capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
ePlanets = planets.filter((planet) => {return planet.includes('e');});

console.log(ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce((prevVal, currVal) =>  {return prevVal + ' ' + currVal });

console.log(sentence);