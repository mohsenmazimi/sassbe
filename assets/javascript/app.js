const menuDescktop = document.querySelectorAll("#navBar_descktop>li");
const menuDescktopSubmenuUl = document.querySelectorAll("#navBar_descktop>li>ul");
const menuMobile = document.querySelectorAll("#navBar_mobile>li");
const menuMobileSubmenuUl = document.querySelectorAll("#navBar_mobile>li>ul");
const closeMobileMenu = document.querySelector('#close_mobile_menu');
const MobileMenubtn = document.querySelector('#mobile_menu_btn');
const menuMobileParent = document.querySelector('#menu_mobile');
menuDescktop.forEach(function (el) {
    el.addEventListener("mouseover",function(){
        const submenu = el.children[1];
        
        submenu.classList.remove('invisible')
        submenu.classList.remove('opacity-0')
    })
})
menuDescktop.forEach(function (el) {
    el.addEventListener("mouseout",function(){
        const submenu = el.children[1];
        
        submenu.classList.add('invisible')
        submenu.classList.add('opacity-0')
    })
})

menuMobile.forEach(function (el) {
    el.addEventListener("click",function(){
        const submenu = el.children[1];
        
        submenu.classList.toggle('invisible')
        // submenu.classList.toggle('h-[300px]')
        el.classList.toggle('h-[60px]')
        submenu.classList.toggle('h-0')
        
        submenu.classList.toggle('opacity-0')
    })
})


closeMobileMenu.addEventListener("click",function(e){
    e.stopPropagation();
    this.parentElement.parentElement.classList.toggle("left-[-100%]")
})
MobileMenubtn.addEventListener("click",function(e){
    e.stopPropagation();
    // console.log()
    this.parentElement.previousElementSibling.classList.toggle("left-[-100%]")
})
document.addEventListener('DOMContentLoaded',function () {
    menuMobileParent.classList.add("left-[-100%]")
})

