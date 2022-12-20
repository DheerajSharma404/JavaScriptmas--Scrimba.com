// ********JavaScriptmas_DAY-20_Challenge**********

import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
   {title: "Scrimba Podcast", rating: 10, paid: false}, 
   {title: "Something about Witches", rating: 8, paid: false}, 
   {title: "Coding Corner", rating: 9, paid: false}
]
*/

// ***********SOLUTION**********

function getFreePodcasts(data) {
   // Here i am using .filter() first to filter the array and then .map() so that when i map the array i only map the free ones.
   let freePodcast = data
      .filter((pod) => pod.paid === false)
      .map((pod) => {
         return {
            title: pod.title,
            rating: pod.rating,
            paid: pod.paid,
         };
      });
   return freePodcast;
}
console.log(getFreePodcasts(podcasts));
