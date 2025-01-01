const repeatString = function( str, num ) {
   if( num < 0 )
      return "ERROR";
   
   let res = "";

   for( num; num > 0; num-- )
   {
      res += str;
   }

   return res;
};

// Do not edit below this line
module.exports = repeatString;
