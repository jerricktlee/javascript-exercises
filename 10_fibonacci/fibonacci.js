const fibonacci = function(fibNum) {
   let fibLast = 1;
   let fibCurr = 1;
   
   if (fibNum < 0) { return 'OOPS'; }
   if (fibNum == 0) { return 0; }
   if (fibNum <= 2) { return 1; }
   for (let i = 2; i < fibNum; i++) {
      fibTemp = fibCurr;
      fibCurr = fibCurr + fibLast;
      fibLast = fibTemp;
   }

   return fibCurr;
};

// Do not edit below this line
module.exports = fibonacci;
