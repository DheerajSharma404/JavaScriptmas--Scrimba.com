// ********JavaScriptmas_DAY-18_Challenge**********

// n children have got m pieces oof candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determin how many pieces of candy will be eaen by all the children together. Indivudual pieces of candy cannot be split.

//Example:
//   For n = 3 and m = 10, the output should be candies(n, m) = 9.

//  Ecah child will eat 3 pieces.So the answer is 9.

//Hints

//Math.floor()

// ***********SOLUTION**********

function candies(children, candy) {
   //  write code here.
   return children * Math.floor(candy / children); //Simple math here nothing fancy.
}

/**
 * Test Suite
 */
describe("candies()", () => {
   it("returns ammount of total equal candy to be eaten", () => {
      // arrange
      const children = 3;
      const candy = 10;

      // act
      const result = candies(children, candy);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(9);
   });
});
