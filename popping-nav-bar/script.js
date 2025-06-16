const navbar = document.querySelector(".nav");

window.addEventListener("scroll", ()=>{
    if(this.scrollY>1){
        navbar.classList.add("slidedown")
    }else {
        navbar.classList.remove("slidedown")
    }
})