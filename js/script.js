const circle = document.getElementById('circle');

function circleClicked() {
    function generateRandomEmoji() {
        return String.fromCodePoint(Math.floor(Math.random() * 32) + 128512);
    }

    circle.disabled = true;
    circle.innerText = generateRandomEmoji();
    setTimeout(showCircle, 1000);
}


function showCircle() {
    function generateRandomPercent() {
        return `${Math.random() * 100}%`;
    }

    circle.style.top = generateRandomPercent();
    circle.style.left = generateRandomPercent();
    circle.innerText = '';
    circle.disabled = false;
}

