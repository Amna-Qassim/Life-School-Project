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


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstName = getInputVal('firstName');
  var lastname = getInputVal('lasttName');
  var inputEmail4 = getInputVal('inputEmail4');
  var inputPassword4 = getInputVal('inputPassword4');
  var inputCity = getInputVal('inputCity');

}

//Function to grt form values
function getInputVal(id) {
  return document.getElementsById(id).value;
}