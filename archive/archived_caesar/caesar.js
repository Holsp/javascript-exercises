const caesar = function( str, offset ) {

   let res = "";
   let skipLetters = new Set([" ", ",","?",".","!"]);
   for( let i = 0; i < str.length; i++ )
   {
      if( skipLetters.has(str[i]))
      {
         res += str[i];
         continue;
      }
         

      let letter = str[i];
      let start, end;
      if( letter >= "a" && letter <= "z" )
      {
         start = "a";
         end = "z";
      }
      if( letter >= "A" && letter <= "Z" )
      {
         start = "A";
         end = "Z";
      }
      console.log( letter + " " +  start + " " + end );
      letter = shift( letter, offset );
      console.log( letter );
      while( !(letter >= start && letter <= end) )
      {
         if( offset < 0 )
            letter = shift( letter, 26 );
         else
            letter = shift( letter, -26 );
      }

      res += letter;
   }

      return res;
};

function shift( char, offset )
{
   return String.fromCharCode(char.charCodeAt(0) + offset);
}

// Do not edit below this line
module.exports = caesar;
