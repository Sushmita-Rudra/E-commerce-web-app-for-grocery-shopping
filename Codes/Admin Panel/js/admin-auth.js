// Initialize Firebase
var config = {
    apiKey: "AIzaSyBqOrei74F8bc_gx5Da4ObEoJHZUNiIozA",
      authDomain: "bigkart-bdb25.firebaseapp.com",
      databaseURL: "https://bigkart-bdb25.firebaseio.com",
      projectId: "bigkart-bdb25",
      storageBucket: "bigkart-bdb25.appspot.com",
      messagingSenderId: "1054476211210",
      appId: "1:1054476211210:web:ffc53449434e4ca929fbf3",
      measurementId: "G-962J9KN38Y"
};



firebase.initializeApp(config);



function login(){
var useremail = document.getElementById("email").value
var userpassword = document.getElementById("password").value



firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
    // Handle Errors here.
    
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error"+ errorMessage) 
    
    
    
    
  });

  
}


 firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    
    // [END_EXCLUDE]
    if (user) {
      // User is signed in.
        
        window.location.replace('index.html');
      }
      
      // [END_EXCLUDE]
     else {
      // User is signed out.
     
    }
    
    // [END_EXCLUDE]
  });


  function forgotPassword() {

    if(email.value.length == 0){
      alert("email not entered")
      return false;
    }


    // var auth = firebase.auth();
    var auth = firebase.auth();
var emailAddress = "deepakmalempati@gmail.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  alert("Password reset link sent to registered email")
}).catch(function(error) {
  // An error happened.
});
  }


