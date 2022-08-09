function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >=100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader)

 function slideimg(){
     const imgslide = document.getElementById("imgslide");
     if(this.scrollY >=300) imgslide.classList.add("slide-img");
     const imgslide1 = document.getElementById("imgslide1");
     if(this.scrollY >=1000) imgslide1.classList.add("slide-img1");    

 } 
 window.addEventListener('scroll',slideimg)