// عد تنازلي لمدة 30 ثانية
let timeLeft = 30;
let countdownElement = document.getElementById('time-left');
let downloadSection = document.getElementById('download-links');

function updateCountdown() {
    if (timeLeft > 0) {
        timeLeft--;
        countdownElement.textContent = timeLeft;
    } else {
        clearInterval(countdownTimer);
        downloadSection.style.display = 'block';
    }
}

let countdownTimer = setInterval(updateCountdown, 1000);

