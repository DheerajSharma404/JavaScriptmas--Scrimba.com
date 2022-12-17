// ********JavaScriptmas_DAY-17_Challenge**********

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/
// ***********SOLUTION**********

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
   // Method_01:The flat(depth) function.It creates a new array and shallow copy all the elments from the sub array,depth is level of  nesting.

   //* let flatArray = arr.flat()

   // Method_02: apply(thisobject and the array-like object) which has integer indexing which apply method can iterate through.Kind of call() which take list as an argument.The apply method perform the action of the thisObject which is it call upon on, for the given argument.

   //* let flatArray = [].concat.apply([],arr);

   // Method_03: Spread syntax can be use to flatten the array along wiht the concat method.

   //* let flatArray = [].concat(...arr)

   // Method_04: reduce() mehtod redcue an array to a single value, here i am using the reduce method to reduce the nested array into one single array.
   let flatArray = arr.reduce((accumulator, currrentVal) => {
      return accumulator.concat(currrentVal);
   });
   return flatArray;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
