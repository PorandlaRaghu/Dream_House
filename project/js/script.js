var search_type_btn = document.querySelectorAll(".search_type_btn");

search_type_btn.forEach((search_btn)=>{
     search_btn.addEventListener("click",()=>{
        search_type_btn.forEach((btn)=>{btn.classList.remove("active")});
        search_btn.classList.add("active");
     })
})

document.addEventListener('DOMContentLoaded',()=>{
 var tabsbtn= document.querySelectorAll(".featured_properties_memu_list li button");
 var tabs= document.querySelectorAll(".featured_tab");
 tabsbtn.forEach((tabbtn)=>{
     tabbtn.addEventListener("click",()=>{
        tabsbtn.forEach((btn)=>{btn.classList.remove("active")});
        tabs.forEach((tabs)=>{tab.classList.remove("active")});

        document.getElementById(tabbtn.data.tab).classList.add("active");
        tabbtn.classList.add("active");
     })
});
})
 
var swiper = new Swiper(".citiesSwiper", {
      spaceBetween: 30,
      slidesPerView: 1,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".brandSwiper", {
      spaceBetween: 30,
      slidesPerView: 3,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".TestimonialSwiper", {
      spaceBetween: 30,
      centeredSlides: 1,
      loop:true,
       autoplay: {
       delay: 2500,
       disableOnInteraction: false,
      }
    });

    var open_memu_btn = document.querySelector("#open_memu_btn");
    var close_memu_btn = document.querySelector("#close_memu_btn");
    var navbar = document.querySelector("#navbar");

    open_memu_btn.addEventListener("click",()=>{
      navbar.classList.add("active");
    })
    close_memu_btn.addEventListener("click",()=>{
      navbar.classList.remove("active");
    })

    const sb = ScrollReveal({
      duration:2500,
      delay:800,
      mobile:false,
      origin:'bottom',
      distance:'60px'
    });
