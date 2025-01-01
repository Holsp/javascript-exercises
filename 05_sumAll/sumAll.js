const sumAll = function(num1, num2) {
   if( typeof num1 != "number" || typeof num2 != "number" || // If it's not of type number
       num1 < 0 || num2 < 0 ||                  // If it's a negative number
       num1 % 1 != 0 || num2 % 1 != 0 )         // If it's not a while number
      return "ERROR";                           // Throw error
   
   let res = 0;
   from = Math.min( num1, num2 );
   to = Math.max( num1, num2 );

   for(; from <= to; from++ )
      res += from;
   
   return res
};

// Do not edit below this line
module.exports = sumAll;
