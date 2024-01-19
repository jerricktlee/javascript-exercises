const removeFromArray = function(array, ...filterVals) {
   return array.filter(arrayElement => !filterVals.includes(arrayElement));
};

// Do not edit below this line
module.exports = removeFromArray;
