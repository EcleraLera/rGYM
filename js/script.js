const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const popular = document.querySelector('.popular');
const individual = document.querySelector('.individual');
const gallery = document.querySelector('.gallery');
const feedback = document.querySelector('.feedback');
const footer = document.querySelector('.footer');


// // можно так записать в переменную значение высоты и топ
// const headerTop = header.getBoundingClientRect().top;
// const heroTop = hero.getBoundingClientRect().top;
// const popularTop = popular.getBoundingClientRect().top;
// const individualTop = individual.getBoundingClientRect().top;
// const galleryTop = gallery.getBoundingClientRect().top;
// const feedbackTop = feedback.getBoundingClientRect();
// const footerTop = footer.getBoundingClientRect();
// console.log(feedbackTop);
// const next = document.querySelector('.next');
// // console.log(next);
// next.addEventListener("click", nextSectionScroll);

// function nextSectionScroll() {

// }

const prev = document.querySelector('.prev');

prev.addEventListener("click", previousSectionScroll);

function previousSectionScroll() {
    if (window.pageYOffset > 0 && window.pageYOffset <= 80) {
        header.scrollIntoView();
    } else if (window.pageYOffset > 80 && window.pageYOffset <= 930) {
        hero.scrollIntoView();
    } else if (window.pageYOffset > 930 && window.pageYOffset <= 2037) {
        popular.scrollIntoView();
    } else if (window.pageYOffset > 2037 && window.pageYOffset <= 3165) {
        individual.scrollIntoView();
    } else if (window.pageYOffset > 3165 && window.pageYOffset <= 4857) {
        gallery.scrollIntoView();
    } else if (window.pageYOffset > 4857 && window.pageYOffset <= 6908) {
        feedback.scrollIntoView();
    } 
}

