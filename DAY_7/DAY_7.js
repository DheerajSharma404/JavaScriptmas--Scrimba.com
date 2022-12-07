// ********JavaScriptmas_DAY-7_Challenge**********

/* Alternating Caps 
Write a function that takes in a string of letters
and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

// ***********SOLUTION**********

function altCaps(str) {
   //* Observe that  every character at even index is Upper case letter and at odd index is lower case.
   return str
      .split("") //* Converting the stirng into char array.
      .map((char, index) =>
         index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()
      ) //* Mapping the whole array and Capitalizing the alternate character.
      .join(""); //* Joining them back into the Sentence.
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
