// ********JavaScriptmas_DAY-5_Challenge**********
/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
      {item: "🍭", price: 2.99},
      {item: "🍫", price: 1.99}, 
      {item: "🍬", price: 0.89}
   ]
*/
// ***********SOLUTION**********

import products from "./data.js";
function getSaleItems(data) {
   const productarray = data
      .filter((data) => data.type === "sweet") //* Here we are filtering the array with condition that the type of the object in the array should be the type of sweet only.
      .map((data) => {
         //*Then here we are mapping the filtered array so that it only contains the object with the item name and the price for it.
         return {
            item: data.item,
            price: data.price,
         };
      });
   return productarray;
}
console.log(getSaleItems(products));
