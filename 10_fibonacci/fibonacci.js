const fibonacci = function( num ) {
   num = +num;
   if( num < 0 )
      return "OOPS";

   console.log(num);
   let dp = new Array(num + 1).fill(0);
   return fibRec( num, dp );
};


function fibRec( num, dp )
{
   
   if( num == 1 || num == 2 ) return 1;
   if( num == 0 ) return 0;
   if( dp[num] != 0 ) return dp[num];

   dp[num] = fibRec( num - 1, dp ) + fibRec( num - 2, dp );
   return dp[num];
}

// Do not edit below this line
module.exports = fibonacci;
