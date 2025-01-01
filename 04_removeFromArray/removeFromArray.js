const removeFromArray = function(arr) {
   let conditions = [];
   for( cond of arguments )
      conditions.push( cond );

   return arr.filter( item => !conditions.includes( item ) );
};

// Do not edit below this line
module.exports = removeFromArray;
