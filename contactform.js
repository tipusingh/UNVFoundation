  


// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyDUrZfy2zL0MjYATbpcsA2F-ufL-gRzFmc",
  authDomain: "contactform-89c29.firebaseapp.com",
  databaseURL: "https://contactform-89c29.firebaseio.com",
  projectId: "contactform-89c29",
  storageBucket: "contactform-89c29.appspot.com",
  messagingSenderId: "940699298702",
  appId: "1:940699298702:web:76828575093171775d92df",
  measurementId: "G-46VT421FFB"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var profession = getInputVal('profession');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, profession, email, phone, message);

 
 
 // Show alert
  document.querySelector('.sentmessage').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.sentmessage').style.display = 'none';
  },4000);

  

  


  // Clear form
  document.getElementById('contactform').reset();
}





// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, profession, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    profession:profession,
    email:email,
    phone:phone,
    message:message
  });
}