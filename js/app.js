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

  const firebaseConfig = {
    apiKey: "AIzaSyDQoKb9Coa8BPTJ8f36yMA8LNVHBwzVV1U",
    authDomain: "pomo-a7b98.firebaseapp.com",
    projectId: "pomo-a7b98",
    storageBucket: "pomo-a7b98.appspot.com",
    messagingSenderId: "888163911722",
    appId: "1:888163911722:web:6acfae6580c46cdc8edb53"
  };



  // Reference messages collection
  var messagesRef = firebase.database().ref('messages'); 


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstName = getInputVal('firstName');
  var lastName = getInputVal('lastName');
  var inputEmail4 = getInputVal('inputEmail4');
  var inputPassword4 = getInputVal('inputPassword4');
  var inputCity = getInputVal('inputCity');
  var gridCheck = getInputVal('gridCheck');

  // Save message
  saveMessage(firstName, lastName, inputEmail4, inputPassword4, inputCity, gridCheck)

}

//Function to grt form values
function getInputVal(id) {
  var str,
  input = document.getElementById(id);
  var inputVal = "";
  if (input) {
    inputVal = input.value;
  }
  return inputVal;
}

// Save message to firebase
function saveMessage(firstName, lastName, inputEmail4, inputPassword4, inputCity, gridCheck){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    inputEmail4: inputEmail4,
    inputPassword4: inputPassword4,
    inputCity: inputCity,
    gridCheck: gridCheck
  })
}