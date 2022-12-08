// ********JavaScriptmas_DAY-8_Challenge**********

//Check if the given string is correct time representation of the 24-hour clock.

//Example

//For time = "13:58", the output should be validTime(time) = true;
//For time = "25:51", the output should be validTime(time) = false;
//For time = "02:76", the output should be validTime(time) = false;

//Hints
//parseInt()
//split()

// ***********SOLUTION**********

function validTime(str) {
   //  write code here.
   const [hh, mm] = str.split(":").map((value) => parseInt(value));
   //Here after the spliting the "str", the "newStr" is ["hh","mm"](here hh and mm are stirng). Then we map it by parsing it into number and at the the "newStr" is [hh , mm](here hh and mm is number).
   console.log(hh + ":" + mm); //for testing
   //24hr-clock format have a range for hours form (0 - 24) and minute is (0-60). so accordng to that it return the value true and false.
   return hh >= 0 && hh <= 24 && mm >= 0 && mm <= 60;
}

/**
 * Test Suite
 */
describe("validTime()", () => {
   it("returns true for valid time", () => {
      // arrange
      const str = "13:58";

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(true);
   });

   it("returns false when invalid hours", () => {
      // arrange
      const str = "25:51";

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(false);
   });

   it("returns false when invalid minutes", () => {
      // arrange
      const str = "02:76";

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(false);
   });
});
