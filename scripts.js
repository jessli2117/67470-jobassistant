$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('#conceiving').offset().top }, 'slow');
    return false;
  });
});


$('.carousel').carousel()