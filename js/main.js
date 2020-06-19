(() => {
    console.log('fried!');

    let audioControls = document.querySelectorAll(".controls"),
        audio = document.querySelector("audio"),
        audioThumbs = document.querySelectorAll(".trackRef");


    function loadAndPlay() {
      // the 'this' keyword refers to the image you've clicked on
      audio.src = `audio/${this.dataset.trackref}`;

      // load method loads whatever resource you indicate
      audio.load();
      playAudio();
    }

    function playAudio() {
      // play the audio track
      audio.play(); // round brackets means it's a method (a built-in function)
    }

    function rewindAudio() {
      // rewind the sudio track
      audio.pause();
      audio.currentTime = 0;
      // debugger;
    }

    audioControls[0].addEventListener("click", playAudio);
    audioControls[1].addEventListener("click", rewindAudio);

    // process the image tags and make them load the right audio track
    for (thumb of audioThumbs) {
      thumb.addEventListener("click", loadAndPlay);
    }

    //listen for the end of the audio tracks
    audio.addEventListener("ended", () => console.log("track ended"));
})();
