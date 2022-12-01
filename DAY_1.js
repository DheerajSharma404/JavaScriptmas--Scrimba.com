// ********JavaScriptmas_DAY-1_Challenge**********

/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()


Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
*/

// ***********SOLUTION**********

function panic(str) {
   const newStr = str.toUpperCase().split(" "); // converting the stirng into uppercase and storing as array of strings in "newStr".
   const modifideStr =
      newStr.length === 1 ? newStr.concat("!").join("") : newStr.join(" 😱 "); //checking the length of the array of strings "newStr" and then doing the following.
   return modifideStr;
}
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
