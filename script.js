// Countdown
var countdownText = document.getElementById("countdown-text");

function countdown(count) {
    countdownText.textContent = count;

    if (count > 0) {
        setTimeout(function () {
            countdown(count - 1);
        }, 1000);

    } else {
        document.getElementById("background-image").style.opacity = 1;

    };
    if (count==0) {textContent = null;}
    
}

countdown(5);

