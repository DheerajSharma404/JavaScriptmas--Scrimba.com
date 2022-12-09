// ********JavaScriptmas_DAY-9_Challenge**********
/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

// Test your functions

//first split the stirng
//second map it to a

// ***********SOLUTION**********
function capitalizeWord(word) {
   //* Getting a single wrod and Grab the first letter and transforming it to Upper case
   //* Also Making sure that no other character is Capitalize in between the word by slicing it from 1 position to rest of it and transforming them to Lower case.
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function toTitleCase(str) {
   //* METHOD----01
   // let newStr = str.split(" "); //* Spliting the string to be able to access the each word.(Brute force approach)
   // for (let i = 0; i < newStr.length; i++) {
   //    //* Traversing each word and calling the CapitalizeWord function for each word and assigning backt to the array
   //    newStr[i] = capitalizeWord(newStr[i]);
   // return newStr.join(" "); //* Returing the newString by joining them.
   // }
   //* METHOD----02
   // newStr.forEach((word, index) => newStr[index] = capitalizeWord(word))
   // return newStr.join(' ');
   // //* MEHTOD----03
   return str
      .split(" ")
      .map((word) => capitalizeWord(word))
      .join(" ");
}
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
console.log(capitalizeWord("pumpkin"));
