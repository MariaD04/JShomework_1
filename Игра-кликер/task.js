const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;

cookie.onclick = () => {
    clickCount++;
    counter.textContent = clickCount;
    if (clickCount % 2 != 0) {
        cookie.width += 20;
        cookie.height += 20;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
    }
}
