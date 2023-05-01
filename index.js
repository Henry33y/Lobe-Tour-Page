//Variables
const hamburgerBtn=document.getElementById('hamburger-btn');
const closeBtn=document.getElementById('close-btn');
const mobileNav=document.querySelector('.mobile-nav');
const mobileHeader=document.querySelector('.mobile-header');


hamburgerBtn.addEventListener('click',() =>{
    hamburgerBtn.style.display='none';
    closeBtn.style.display='block'
    mobileNav.classList.add('down');
})
closeBtn.addEventListener('click',() =>{
    hamburgerBtn.style.display='block';
    closeBtn.style.display='none';
    mobileNav.classList.remove('down');
})