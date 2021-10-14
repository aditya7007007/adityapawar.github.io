// javascript for navigation bar effects on scroll
window.addEventListener("scroll",function(){
const header=this.document.querySelector("header");
header.classList.toggle('sticky',window.scrolly>0);

});
//  javascript for responsive navigation sidebar menu
const menuBtn=document.querySelector(".menu-btn");
const navigation =document.querySelector(".navigation");
const navigationItems=document.querySelectorAll(".navigation a")
menuBtn.addEventListener("click" , ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener("click" , ()=>{
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});


