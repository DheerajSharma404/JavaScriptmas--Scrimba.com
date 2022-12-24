// ********JavaScriptmas_DAY-24_Challenge**********

// Challenge: Add code here to make the youtube player play the new YouTube song

// ***********SOLUTION**********
const player = document.getElementById("player");

function playSong(id) {
   //By using the song id we get on every onclick event, i am setting the source url with that song id.
   player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
}
