console.log(' bonjour le monde ');
const nav_mobile_icone =document.querySelector('.nav-mobile-icone');
const nav_mobile_list=document.querySelector('.nav-mobile-list');
const nav_mobile_deroulant=document.querySelector('.deroulant-expertise');
const nav_mobile_deroulant_icone=document.querySelector('.deroulant i');
console.log(nav_mobile_deroulant_icone);
nav_mobile_icone.addEventListener('click',()=>{
    nav_mobile_list.classList.toggle('show');
})
nav_mobile_deroulant_icone.addEventListener('click',()=>{
    nav_mobile_deroulant.classList.toggle('show1')
})