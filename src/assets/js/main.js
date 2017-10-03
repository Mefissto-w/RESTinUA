/*Libs include*/
//= ./common/common.js

/*Modules include*/
//= ./common/localStorage.js

// $(document).ready(function () {
//     $('a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event) {
//       if (
//         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//         && 
//         location.hostname == this.hostname
//       ) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//           event.preventDefault();
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 1000)
//         }
//       }
//     });

//     let $menu = $('.header__menu-icon');

//     $menu.click(menuShow);    
//     function menuShow() {
//         $('.header__menu-items>div:nth-child(2)').slideToggle( "slow");
//     }
// });