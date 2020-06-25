// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAWWCPK6VurvZrmcHssK5W7-jHjqNU5TN0",
  authDomain: "big-kart.firebaseapp.com",
  databaseURL: "https://big-kart.firebaseio.com",
  projectId: "big-kart",
  storageBucket: "big-kart.appspot.com",
  messagingSenderId: "584561117639",
  appId: "1:584561117639:web:a3a2034d0d32adcc5771e2",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var fullName = document.getElementById("fullname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
}
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

function signOut() {
  alert("Signed Out: " + email.value);
  auth.signOut();
}

function forgotPassword() {
  // var auth = firebase.auth();
  var forgotemail = document.getElementById("forgotemail").value;
  if (forgotPassword != "") {
    auth
      .sendPasswordResetEmail(forgotemail)
      .then(function () {
        alert("Email has been sent to you, Please check email and verify");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Message: " + errorMessage);
      });
  } else {
    alert("Enter valid email id");
  }
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    // is signed in
    var email = user.email;
    alert("Active user " + email);
  } else {
    alert("No active user ");
  }
});
