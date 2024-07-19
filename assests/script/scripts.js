
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
// jQuery for gallery buttons
// jQuery for gallery buttons
$(document).ready(function() {
   // Initialize Magnific Popup for gallery
   $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Preload previous and next image
      }
   });


      // Add your gallery functionality here
   });
   $('.buttons').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      var filter = $(this).attr('data-filter');

      if (filter == 'all') {
         $('.image').show(400);
      } else {
         $('.image').not('.' + filter).hide(200);
         $('.image').filter('.' + filter).show(400);
      }
   });
   var swiper = new Swiper(".card_swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    document.addEventListener('DOMContentLoaded', () => {
      const currentLocation = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.nav__link');
  
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
          link.classList.add('active');
        }
      });
    });