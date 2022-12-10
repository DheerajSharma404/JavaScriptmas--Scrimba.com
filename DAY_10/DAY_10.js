// ********JavaScriptmas_DAY-10_Challenge**********

//Write the sorByLength fuction which sorts the given string according to their increasing length.

// ***********SOLUTION**********

function sortByLength(strs) {
   //  write code here.

   //if we call the default sort() funtion here it will sort the array according to the charactes ASCII value.
   //So we have explicitly mention how to sort the array which is according to the length of the string.
   //Also below logic sorts the array in increasing order of their strings length.
   //If we want it to sort it in decreasing order the we just have the write the statement in other way around "str2.length-str1.length".and it will do the magic.
   return strs.sort((str1, str2) => str1.length - str2.length);
}

/**
 * Test Suite
 */
describe("sortByLength()", () => {
   it("sorts the strings from shortest to longest", () => {
      // arrange
      const strs = ["abc", "", "aaa", "a", "zz"];

      // act
      const result = sortByLength(strs);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
   });
});
