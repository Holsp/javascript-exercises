const getTheTitles = function(array) {
   return array.reduce(( arr, object) => {
      arr.push(object.title);
      return arr;
   }, [] );
};

// Do not edit below this line
module.exports = getTheTitles;
