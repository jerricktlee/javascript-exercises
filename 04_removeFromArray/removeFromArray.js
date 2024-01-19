const removeFromArray = function(array, ...filterVals) {
   for (let i = 0; i < filterVals.length; i++) {
      array = array.filter((arrayElement) => arrayElement !== filterVals[i]);
   }
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;
