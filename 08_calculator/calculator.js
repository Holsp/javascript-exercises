const add = function( num1, num2 ) {
  return num1 + num2;
};

const sub = function( num1, num2 ) {
  return num1 - num2;
};

const sum = function( arr ) {
	let res = 0;
  for( const num of arr )
    res += num;

  return res;
};

const mult = function( arr ) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const pow = function( base, exp ) {
	let res = 1;
  for( let i = 0; i < exp; i++ )
    res *= base;

  return res;
};

const fact = function( num ) {
  let res = 1;
	for( let i = num; i > 0; i-- )
    res *= i;

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  sub,
  sum,
  mult,
  pow,
  fact
};
