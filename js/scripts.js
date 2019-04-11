

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

  $('.card-container').on('mouseenter', function() {
    $(this).children().toggleClass('flip');
  })

  $('.card-container').on('mouseleave', function() {
    $(this).children().toggleClass('flip');
  })





})