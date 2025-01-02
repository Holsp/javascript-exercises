const palindromes = function ( str ) {
   str = str.replace(/[.!?, ]/g, "");
   str = str.toLowerCase();

   for( let i = 0; i < str.length / 2; i++ )
      if( str[i] != str[str.length - 1 - i] )
         return false;

   return true;
};

// Do not edit below this line
module.exports = palindromes;
