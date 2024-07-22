document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    const startAudioButton = document.getElementById('start-audio');

    // Retrieve audio state and current time from localStorage
    const audioState = localStorage.getItem('audioState');
    const audioCurrentTime = localStorage.getItem('audioCurrentTime');

    // Set the initial state of the audio and button
    if (audioState === 'playing') {
        audio.currentTime = audioCurrentTime ? parseFloat(audioCurrentTime) : 0;
        audio.play();
        startAudioButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        startAudioButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }

    // Event listener for the audio button
    startAudioButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            this.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            localStorage.setItem('audioState', 'playing');
        } else {
            audio.pause();
            this.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            localStorage.setItem('audioState', 'paused');
        }
        localStorage.setItem('audioCurrentTime', audio.currentTime);
    });

    // Save current audio state and time before navigating away
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audioCurrentTime', audio.currentTime);
        localStorage.setItem('audioState', audio.paused ? 'paused' : 'playing');
    });
});

let links = document.querySelectorAll(".play-audio-link");
    links.forEach((link) => {
        // Add click sound audio element to each link
        link.innerHTML += `<audio src="C:/Users/91885/OneDrive/Desktop/javascript2.o/giggleGroves/click_effect-86995.mp3" class="click-sound"></audio>`;
        
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const clickSound = link.querySelector(".click-sound");
            clickSound.currentTime = 0; // Reset the sound to the start
            clickSound.play();

            // Navigate to the link after the click sound starts playing
            clickSound.addEventListener('ended', function() {
                window.location.href = link.href;
            });

            // Alternative: Navigate after a slight delay
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // 500 ms delay for the click sound to play
        });
    });

    if (window.screen.orientation && screen.orientation.lock) {
        window.addEventListener("load", function() {
            screen.orientation.lock("landscape").catch(function(error) {
                console.log("Orientation lock failed: ", error);
            });
        });
    }