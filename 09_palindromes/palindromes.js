const palindromes = function (str) {
   strArr = str.split('');
   strArr = strArr.filter(char => (!(char === ',' || char === ' ' || char === '?' || char === '!' || char === '.')));

   return strArr.join('').toLowerCase() === strArr.reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
