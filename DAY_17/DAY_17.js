const kittyScores = [
   [39, 99, 76],
   89,
   98,
   [87, 56, 90],
   [96, 95],
   40,
   78,
   50,
   [63],
];

const kittyPrizes = [
   ["💰", "🐟", "🐟"],
   "🏆",
   "💐",
   "💵",
   ["💵", "🏆"],
   ["🐟", "💐", "💐"],
   "💵",
   "💵",
   ["🐟"],
   "🐟",
];

function flatten(arr) {
   //* Method_01:The flat(depth) function.It creates a new array and shallow copy all the elments from the sub array,depth is level of  nesting.

   //let flatArray = arr.flat()

   //* Method_02: apply(thisobject and the array-like object) which has integer indexing which apply method can iterate through.Kind of call() which take list as an argument.The apply method perform the action of the thisObject which is it call upon on, for the given argument.

   // let flatArray = [].concat.apply([],arr);

   //* Method_03: Spread syntax can be use to flatten the array along wiht the concat method.

   // let flatArray = [].concat(...arr)

   //* Method_04: reduce() mehtod redcue an array to a single value, here i am using the reduce method to reduce the nested array into one single array.
   let flatArray = arr.reduce((accumulator, currrentVal) => {
      return accumulator.concat(currrentVal);
   });
   return flatArray;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
