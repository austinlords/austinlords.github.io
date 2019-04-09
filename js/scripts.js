

// front-end 

$(function() {
  $('.navbar-icon').on('click', function() {
    $('.navbar-menu').slideToggle().removeClass('initially-hidden');
  });

  $('.navbar-link').on('click', function() {
    $('.navbar-menu').slideUp();
  });

  



})