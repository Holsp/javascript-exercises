const findTheOldest = function( people ) {
   
   let best;
   let bestLifespan = 0;
   
   for( const person of people )
   {
      let lifespan;
      if( person.yearOfDeath !== undefined )
         lifespan =  person.yearOfDeath - person.yearOfBirth;         
      else
         lifespan = (new Date).getFullYear() - person.yearOfBirth;
      
      if( lifespan > bestLifespan )
      {
         best = person;
         bestLifespan = lifespan;
      }
   }
   return best;
};

// Do not edit below this line
module.exports = findTheOldest;
