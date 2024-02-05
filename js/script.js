const parent = document.querySelector('.container');

const children = parent.children;

const childrenClass = children.classList;

console.log(childrenClass);

console.log(window.innerHeight);


const next = document.querySelector('.next');
console.log(next);
next.addEventListener("click", nextSectionScroll);

function nextSectionScroll() {

}

const prev = document.querySelector('.prev');
console.log(prev);
prev.addEventListener("click", previousSectionScroll);

function previousSectionScroll() {

}
