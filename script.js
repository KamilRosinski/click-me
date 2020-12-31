function circleClicked() {
    const circle = document.getElementById('circle');
    circle.disabled = true;
    circle.innerText = String.fromCodePoint(Math.floor(Math.random() * 32) + 128512);
    setTimeout(showCircle, 1000);
}

function showCircle() {
    const circle = document.getElementById('circle');
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.innerText = '';
    circle.disabled = false;
}
