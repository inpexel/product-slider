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

// =================== change image ========================

const mainImage = document.querySelector('.mainImage');
// const mainImage = document.querySelector('.productImages img');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach((img)=>{
    img.addEventListener('click',()=>{
        const link = img.src;
        mainImage.src = link;
    })
})

const body = document.body;

function myFunction() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');
    setTimeout(() => {
        popup.style.display = 'flex';
        body.style.overflow = 'hidden';
    }, 5000);
    console.log('done')
    close.addEventListener('click', ()=>{
        popup.style.display = 'none';
        body.style.overflow = 'scroll';
    })
  }



