const findTheOldest = function(peopleArr) {
   return peopleArr.reduce((currOldest, person) => {
      const currOldestAge = calculateAge(currOldest.yearOfBirth, currOldest.yearOfDeath);
      const personAge = calculateAge(person.yearOfBirth, person.yearOfDeath);
      return currOldestAge < personAge ? person : currOldest;
   });
}

function calculateAge(birthYear, deathYear) {
   if (!deathYear) {
      deathYear = new Date().getFullYear();
   }
   return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
