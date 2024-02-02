
// const header = document.querySelector('.header'); 
// let hheader = header.getBoundingClientRect().top;
// console.log(hheader);

const prev = document.querySelector('.prev');

prev.addEventListener("click", previousSection);

function previousSection() {
    if (window.pageYOffset >= 80 && window.pageYOffset <= 930) {
        window.scrollTo(0,0);
    } else if (window.pageYOffset >= 930 && window.pageYOffset <= 2037) {
        window.scrollTo(0,0);
    } else if (window.pageYOffset >= 2037 && window.pageYOffset <= 3165) {
        window.scrollTo(0,930);
    }
}
