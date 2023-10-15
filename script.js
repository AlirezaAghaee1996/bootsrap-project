'use strict'
const arrowDown=document.querySelectorAll('.arrowDown')
const closeBtn=document.querySelectorAll('.closeBtn')
const menuItem=document.querySelectorAll('.menuItem')
for(let i=0; menuItem.length; i++){
    arrowDown[i].addEventListener('click', ()=>{
        menuItem[i].classList.add('activeMenu')
    })
    closeBtn[i].addEventListener('click', ()=>{
        menuItem[i].classList.remove('activeMenu')
    })
}