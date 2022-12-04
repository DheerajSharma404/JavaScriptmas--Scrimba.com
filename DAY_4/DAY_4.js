// ********JavaScriptmas_DAY-4_Challenge**********
/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
// ***********SOLUTION**********

function whisper(str) {
   //*Using the TERNARY OPERATOR
   return str.endsWith("!")
      ? ` shh... ${str.slice(0, str.indexOf("!")).toLowerCase()}` //first slicing the string at the index of "!" then transforming it to lowercase and returning the template stirng.
      : `shh... ${str.toLowerCase()}`; //Just transform the string into lowercase and then return the template stirng.
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
