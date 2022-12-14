// ********JavaScriptmas_DAY-13_Challenge**********

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/
// ***********SOLUTION**********

const emojis = {
   smile: "😊",
   angry: "😠",
   party: "🎉",
   heart: "💜",
   cat: "🐱",
   dog: "🐕",
};

function emojifyWord(word) {
   let newWord = word.split(":").join(""); // Spliting the array and joining them to get rid of the colon.
   if (word.startsWith(":") && word.endsWith(":")) {
      //Checking the orignal stirng whether it starts or ends with the colon or not.
      if (emojis[newWord]) {
         //if it does return the emoji corresponding to it from the emojis object.
         return emojis[newWord]; //return the emoji
      }
   }
   return newWord; // Or else return the word without the colons.
}

function emojifyPhrase(phrase) {
   return phrase
      .split(" ") //Spliting the phrase into words array.
      .map((word, index) => emojifyWord(word)) //Then mapping it with the help of emojifyWord() function.
      .join(" "); //Then joining it and retruning it.
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
