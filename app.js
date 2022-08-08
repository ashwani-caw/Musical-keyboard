//getting all the Keys white+black
const Keys = document.querySelectorAll(".key");

//Adding EventListener to each key
Keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key.dataset.note));
});

//will play the audio file of paticular note
function playNote(note) {
  const audioNote = document.getElementById(note);
  audioNote.currentTime = 0;
  audioNote.play();
}
