const bounce = document.querySelector(".bounce");
window.addEventListener('scroll', bouncing);
let start;

function bouncing() {
    start = Date.now();
    let now = Date.now();
    let diff = now - start; 
    if (diff > 4000) {
        bounce.classList.add("bounce--show");
    } else {
        bounce.classList.add("bounce--hidden");
    }
    start = now;
}



