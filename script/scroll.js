const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track');
const body = document.body;

thumb.addEventListener('mousedown', startDrag);

function startDrag(e) {
    e.preventDefault();
    startY = e.clientY;
    startScroll = window.pageYOffset;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    const deltaY = e.clientY - startY;
    const scrollRatio = deltaY / track.clientHeight;
    const scrollAmount = scrollRatio * (body.scrollHeight - window.innerHeight);
    window.scrollTo(0, startScroll + scrollAmount);
    updateThumbPosition();
}

function stopDrag() {
    document.removeEventListener('mousemove', drag);
}

function updateThumbPosition() {
    const scrollRatio = window.pageYOffset / (body.scrollHeight - window.innerHeight);
    const thumbPosition = scrollRatio * (track.clientHeight - thumb.clientHeight);
    thumb.style.top = thumbPosition + 'px';
}

window.addEventListener('scroll', updateThumbPosition);
window.addEventListener('resize', updateThumbPosition);
updateThumbPosition();
