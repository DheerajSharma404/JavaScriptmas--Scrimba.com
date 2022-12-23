// ********JavaScriptmas_DAY-23_Challenge**********

/*
   You're online shopping for holiday gifts, but money is tight
   so we need to look at the cheapest items first. 
   Use the built in sort() method to write a function that returns a new array of
   products sorted by price, cheapest to most expensive.  


   Then log the item and the price to the console: 
   
   💕,0
   🍬,0.89
   🍫,0.99
   🧁,0.99
   📚,0.99
   ... continued
*/

// ***********SOLUTION**********

import products from "./data.js";
function sortProducts(data) {
   // sorting the data in increasing order then jus returning it.
   let sortProduct = data.sort((item1, item2) => item1.price - item2.price);
   return sortProduct;
}
const listByCheapest = sortProducts(products);
listByCheapest.map((item) => console.log(`${item.product},${item.price}`)); //cconsole logging it the way mention above.
