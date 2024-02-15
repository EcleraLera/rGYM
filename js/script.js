// const blocks = document.querySelectorAll("header, section, footer");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// blocks.forEach((block, i) => {
//     if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
//         prevBtn.addEventListener("click", () => {
//         blocks.item[i - 1].scrollIntoView();
//         });
//         nextBtn.addEventListener("click", () => {
//         blocks.item(i + 1).scrollIntoView();
//         });
//     }
// });

// const blocks = document.querySelectorAll("header, section, footer");
// const btn = document.querySelectorAll(".btn");

// btn.addEventListener("click", sectionScroll);

// function previousSectionScroll() {
//     blocks[i - 1].scrollIntoView();
// }

// function nextSectionScroll() {
//     blocks[i + 1].scrollIntoView();
// }

// function sectionScroll(event) {
//     let target = event.target.id;
//     if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
//         if (target === 'prev') {
//             previousSectionScroll();
//         } else {
//             nextSectionScroll();
//         }
//     }
// }


const blocks = document.querySelectorAll("header, section, footer");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", prevSectionScroll);

function prevSectionScroll() {
    blocks.forEach((block, i) => {
        if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
            blocks.item(i - 1).scrollIntoView();
            blocks.item(i - 1).removeEventListener("click", prevSectionScroll);
        }
    });
}

nextBtn.addEventListener("click", nextSectionScroll);

function nextSectionScroll() {
    blocks.forEach((block, i) => {
        if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
            blocks.item(i + 1).scrollIntoView();
            blocks.item(i + 1).removeEventListener("click", nextSectionScroll);
        }
    });
}



// const prev = document.querySelectorAll('.prev');
// prev.addEventListener("click", previousSectionScroll);

// function previousSectionScroll() {
//     const header = (window.scrollY > blocks.item(0).getBoundingClientRect.top && window.scrollY <= blocks.item(0).getBoundingClientRect().bottom);
//     const hero = (window.scrollY > blocks.item(0).getBoundingClientRect().bottom && window.scrollY <= blocks.item(2).getBoundingClientRect().top);
//     const popular = (window.scrollY > blocks.item(2).getBoundingClientRect().top && window.scrollY <= blocks.item(3).getBoundingClientRect().top);
//     const individual = (window.scrollY > blocks.item(3).getBoundingClientRect().top && window.scrollY <= blocks.item(4).getBoundingClientRect().top);
//     const gallery = (window.scrollY > blocks.item(4).getBoundingClientRect().top && window.scrollY <= blocks.item(5).getBoundingClientRect().top);
//     const feedback = (window.scrollY > blocks.item(5).getBoundingClientRect().top && window.scrollY <= blocks.item(6).getBoundingClientRect().top);
//     const footer = (window.scrollY > blocks.item(0).getBoundingClientRect.top && window.scrollY <= blocks.item(0).getBoundingClientRect().bottom);
//     if (header) {
//         blocks.item(0).scrollIntoView();
//     } else if (hero) {
//         blocks.item(1).scrollIntoView();
//     } else if (popular) {
//         blocks.item(2).scrollIntoView();
//     } else if (individual) {
//         blocks.item(3).scrollIntoView();
//     } else if (gallery) {
//         blocks.item(4).scrollIntoView();
//     } else if (footer) {
//         blocks.item(5).scrollIntoView();
//     } 
// }


// const next = document.querySelector('.next');
// next.addEventListener("click", nextSectionScroll);

// function nextSectionScroll() {

// }
// const blocks = document.querySelectorAll("header, section, footer");

// const scrBtn = document.querySelectorAll('.scroll-button');
// Array.from(scrBtn).forEach(btn => {btn.addEventListener("click", sectionScroll)});

// const header = (window.scrollY > blocks.item(0).getBoundingClientRect.top && window.scrollY <= blocks.item(0).getBoundingClientRect().bottom);
// const hero = (window.scrollY > blocks.item(0).getBoundingClientRect().bottom && window.scrollY <= blocks.item(2).getBoundingClientRect().top);
// const popular = (window.scrollY > blocks.item(2).getBoundingClientRect().top && window.scrollY <= blocks.item(3).getBoundingClientRect().top);
// const individual = (window.scrollY > blocks.item(3).getBoundingClientRect().top && window.scrollY <= blocks.item(4).getBoundingClientRect().top);
// const gallery = (window.scrollY > blocks.item(4).getBoundingClientRect().top && window.scrollY <= blocks.item(5).getBoundingClientRect().top);
// const feedback = (window.scrollY > blocks.item(5).getBoundingClientRect().top && window.scrollY <= blocks.item(6).getBoundingClientRect().top);
// const footer = (window.scrollY > blocks.item(6).getBoundingClientRect.top && window.scrollY <= blocks.item(6).getBoundingClientRect().bottom);

// function previousSectionScroll() {
//     if (header) {
//         blocks.item(0).scrollIntoView();
//     } else if (hero) {
//         blocks.item(1).scrollIntoView();
//     } else if (popular) {
//         blocks.item(2).scrollIntoView();
//     } else if (individual) {
//         blocks.item(3).scrollIntoView();
//     } else if (gallery) {
//         blocks.item(4).scrollIntoView();
//     } else if (feedback) {
//         blocks.item(5).scrollIntoView();
//     }
// }

// function nextSectionScroll() {
//     if (header) {
//         blocks.item(1).scrollIntoView();
//     } else if (hero) {
//         blocks.item(2).scrollIntoView();
//     } else if (popular) {
//         blocks.item(3).scrollIntoView();
//     } else if (individual) {
//         blocks.item(4).scrollIntoView();
//     } else if (gallery) {
//         blocks.item(5).scrollIntoView();
//     } else if (feedback) {
//         blocks.item(6).scrollIntoView();
//     }
// }

// function sectionScroll(event) {
//     let target = event.target.id;
//     if (target === 'prev') {
//         previousSectionScroll();
//     } else {
//         nextSectionScroll();
//     }
// } 








