// ********JavaScriptmas_DAY-6_Challenge**********

// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!
/*
   Make this function return an array that contains 
   between one and ten taco emojis 🌮
   Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
    */
// ***********SOLUTION**********

function getRandomNumberOfTacos() {
   return new Array(Math.floor(Math.random() * 10 + 1)).fill(" 🌮 "); //* Returning a new array of random size filled will Taco's "🌮".
}

function putTacosOnTray() {
   return getRandomNumberOfTacos() //* This function gets an Array then we map over it to display it in the browser
      .map(function (taco) {
         return `<div class="taco">${taco}</div>`;
      })
      .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();
