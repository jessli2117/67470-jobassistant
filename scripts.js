$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('#d7').offset().top }, 'slow');
    return false;
  });
});