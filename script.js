function circleClicked() {
    showText(String.fromCodePoint(Math.floor(Math.random() * 32) + 128512));
    setTimeout(showCircle, 1000);
}

function showCircle() {
    showText('');
    const circle = document.getElementById('circle');
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.classList.remove('hidden');

}

function showText(text) {
    document.getElementById('circle-text').innerText = text;
}
