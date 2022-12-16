// ********JavaScriptmas_DAY-16_Challenge**********

//Trans form a given sentence into a new one with dashes between each two consecutive letters.

//Example:
//For inputString = "aba caba", the output should be insertDashes(inputString) = "a-b-a c-a-b-a"

//Hints:
//   join()
//   split()
// ***********SOLUTION**********

function insertDashes(arr) {
   // write code here
   let newArray = arr.split(" ").map((word) => {
      //Splitting the string to be able to map over each word
      return word.split("").join("-"); //Taking each word splitting and then joining it with the dashes
   });
   return newArray.join(" "); //After getting the desired output in the array  joinig it to get the desired result.
}

/**
 * Test Suite
 */
describe("insertDashes()", () => {
   it("insert dashes in between chars", () => {
      // arrange
      const value = "aba caba";

      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe("a-b-a c-a-b-a");
   });
});
