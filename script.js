/* ---------------------------------------navbar------------------------- */
const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    navbar.classList.remove('active')
}
/* ---------------------------------------sticky navbar------------------ */

const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', pageYOffset > 100)
})
/* -----------------------------scrol up button------------------------ */
const toUp = document.querySelector('.toUp');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        toUp.classList.add('active')
    }
    else{
        toUp.classList.remove('active')
    }
})



