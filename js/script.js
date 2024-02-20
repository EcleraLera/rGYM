const blocks = document.querySelectorAll("header, section, footer");
const Blocks = Array.from(blocks);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener("click", prevSectionScroll);
function prevSectionScroll() {
    let prevBlock;
    Blocks.forEach((block, i) => {
        if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
            prevBlock = blocks.item(i - 1);
        } 
    });
    prevBlock.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

next.addEventListener("click", nextSectionScroll);
function nextSectionScroll() {
    let nextBlock;
    blocks.forEach((block, i) => {
        if (window.scrollY >= block.offsetTop && window.scrollY < block.offsetTop + block.clientHeight) {
            nextBlock = blocks.item(i + 1);
        }
    });
    nextBlock.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

