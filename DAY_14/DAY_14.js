// ********JavaScriptmas_DAY-14_Challenge**********
// You are given a string s that consists of only lowercase English letters. If vowels("a","e","i","o" and "u") are givena value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input stirng.

// Example:
//   For s = "abcde", the output should be countVowelsConsonants(s)= 8.

//Hint:
//split()
//reduce()

// ***********SOLUTION**********
function countVowelConsonant(str) {
   // write code here
   let stringArray = str.split("").map((char) => {
      //Split the word and mapping it to 1 and 2 by checking whether it is vowel or consonant.
      if (
         char === "a" ||
         char === "e" ||
         char === "i" ||
         char === "o" ||
         char === "u"
      ) {
         return 1; //If it is vowel return 1;
      } else {
         return 2; //Else its a consonant so return 2;
      }
   });
   //Reduce method will reduce the array of 1's and 2's to a single value based on the logic to sum all the element of the array.
   let sum = stringArray.reduce(
      (accumulator, currentVal) => accumulator + currentVal
   );
   return sum;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
   it("returns total of vowels(1) and consonants(2) to be added", () => {
      // arrange
      const value = "abcde";

      // act
      const result = countVowelConsonant(value);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(8);
   });
});
