

const canHover = !(matchMedia('(hover: none)').matches);
if(canHover) {
document.body.classList.add('can-hover');
}

// front-end 

$(function() {
  $('.navbar-icon').on('click', function() {
    $('.navbar-menu').slideToggle().removeClass('initially-hidden');
  });

  $('.navbar-link').on('click', function() {
    if ($(window).width() < 768){
      $('.navbar-menu').slideUp();
    }
  });

  $('.card-container').on('click', function() {
    $(this).children().toggleClass('flip');
  });

  $(document.body).on('click', function() {
    if ($('.navbar-menu[display=flex]') && ($(window).width() < 768)) {
      $('.navbar-menu').slideUp(); 
    }
  });

  $('.navbar-icon').on('click', function(e) {
    e.stopPropagation();
  });

  $('.navbar-list').on('click', function(e) {
    e.stopPropagation();
  });

}) 