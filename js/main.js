document.addEventListener('mousemove', parallax);

function parallax(event) {
    this.querySelectorAll('.parallax_bg').forEach(parallax_bg => {
        var speed = parallax_bg.getAttribute('data-speed');
        parallax_bg.style.transform = `translateX(${event.clientX*speed/800}px)`
    });
    
}