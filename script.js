const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// =================== my slider ===================================
const boxes = document.querySelectorAll('.boxContainer');
const nextBtn = document.querySelectorAll('.next');
const prvBtn = document.querySelectorAll('.prv');

boxes.forEach((item, i)=>{
    let containerD = item.getBoundingClientRect();
    let containerW = containerD.width;

    nextBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerW;
    })
    
    prvBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerW;
    })
})