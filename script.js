//your JS code here. If required.
// Get the element where the timer is to be display
let timerDisplay = document.getElementById("timer");

// Set the current date and time
let currentDate = new Date();

// Update the time in every second
setInterval(
    function () {
        // Get the current date and time
        currentDate = new Date();

        // Update the timer Dispaly
        timerDisplay.innerHTML = currentDate.toLocaleDateString();
    },1000
)