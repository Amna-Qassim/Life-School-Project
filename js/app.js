// Popup
$('.show-popup').click(function() {
  $('.popup').fadeIn()
});

$('.popup').click(function() {
  $(this).fadeOut();
});

$('.popup .inner').click(function(e) {
  e.stopPropagation();
});

$('.popup .close').click(function(e) {
  e.preventDefault();
  $('.popup').fadeOut();
});
