const pull=document.querySelector(".pullUp-container");
const header=document.querySelector(".headerCont");
const toTop=document.querySelector(".toTop");
const bodyTop=document.querySelector(".inner-body")
const nav=document.querySelector("nav")

const close=document.querySelector(".closeIcon");
pull.addEventListener('click',(e)=>{
    e.stopPropagation();
    header.classList.add('menu');
})

nav.addEventListener('click',(e)=>{
    e.stopPropagation();
})
close.addEventListener('click',()=>{
    header.classList.remove('menu');
})

toTop.addEventListener('click',()=>{
    bodyTop .scroll(0,0);
})

window.addEventListener('click',()=>{
    header.classList.remove('menu');
})