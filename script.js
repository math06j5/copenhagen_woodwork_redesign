////Video javascript - NOTE FRA KATJA: Med snak om at sætte op via Vimeo istedet, kan I bare redigere i koden, hvis I bruger Embed i stedet for.
//
//window.addEventListener("load", sidenVises);
//
//
//function sidenVises() {
//
//    // Video
//    let video = document.getElementById("video");
//
//    // Buttons
//    let playButton = document.getElementById("play-pause");
//    let muteButton = document.getElementById("mute");
//    let fullScreenButton = document.getElementById("full-screen");
//
//    // Sliders
//    let seekBar = document.getElementById("seek-bar");
//    let volumeBar = document.getElementById("volume-bar");
//
//
//
//    // Event listener for the play/pause button
//    playButton.addEventListener("click", function () {
//        if (video.paused == true) {
//            // Play the video
//            video.play();
//
//            // Update the button text to 'Pause'
//            playButton.innerHTML = "Pause";
//        } else {
//            // Pause the video
//            video.pause();
//
//            // Update the button text to 'Play'
//            playButton.innerHTML = "Play";
//        }
//    });
//
//    // Event listener for the mute button
//    muteButton.addEventListener("click", function () {
//        if (video.muted == false) {
//            // Mute the video
//            video.muted = true;
//
//            // Update the button text
//            muteButton.innerHTML = "Unmute";
//        } else {
//            // Unmute the video
//            video.muted = false;
//
//            // Update the button text
//            muteButton.innerHTML = "Mute";
//        }
//    });
//
//    // Event listener for the full-screen button
//    fullScreenButton.addEventListener("click", function () {
//        if (video.requestFullscreen) {
//            video.requestFullscreen();
//        } else if (video.mozRequestFullScreen) {
//            video.mozRequestFullScreen(); // Firefox
//        } else if (video.webkitRequestFullscreen) {
//            video.webkitRequestFullscreen(); // Chrome and Safari
//        }
//    });
//
//    // Pause the video when the slider handle is being dragged
//    seekBar.addEventListener("mousedown", function () {
//        video.pause();
//    });
//
//    // Play the video when the slider handle is dropped
//    seekBar.addEventListener("mouseup", function () {
//        video.play();
//    });
//
//
//
//    // Event listener for the seek bar
//    seekBar.addEventListener("change", function () {
//        // Calculate the new time
//        let time = video.duration * (seekBar.value / 100);
//
//        // Update the video time
//        video.currentTime = time;
//    });
//
//    // Update the seek bar as the video plays
//    video.addEventListener("timeupdate", function () {
//        // Calculate the slider value
//        let value = (100 / video.duration) * video.currentTime;
//
//        // Update the slider value
//        seekBar.value = value;
//    });
//
//    // Pause the video when the slider handle is being dragged
//    seekBar.addEventListener("mousedown", function () {
//        video.pause();
//    });
//
//    // Play the video when the slider handle is dropped
//    seekBar.addEventListener("mouseup", function () {
//        video.play();
//    });
//
//    // Event listener for the volume bar
//    volumeBar.addEventListener("change", function () {
//
//        console.log("Skift volume");
//        // Update the video volume
//        video.volume = volumeBar.value;
//    });
//
//
//}




window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
