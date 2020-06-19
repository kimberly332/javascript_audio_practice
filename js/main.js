(() => {
    console.log('fried!');

    let audioControls = document.querySelectorAll(".controls"),
        audio = document.querySelector('audio');


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
})();
