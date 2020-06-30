// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDixcBeKbxqf6q80Z_71xHiltT5WgAtYo0",
  authDomain: "heromaker-834a0.firebaseapp.com",
  databaseURL: "https://heromaker-834a0.firebaseio.com",
  projectId: "heromaker-834a0",
  storageBucket: "heromaker-834a0.appspot.com",
  messagingSenderId: "472566626928",
  appId: "1:472566626928:web:d84c66e71e949bcb3d52b5",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  window.location.replace("signin - Copy.html");
  promise.catch((e) => alert(e.message));
}
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // is signed in
      var email = user.email;

      window.location.replace("homepage-user.html");
      // window.open("homepage-user.html");
    } else {
      // alert("Incorrect credentials");
    }
  });
  promise.catch((e) => alert("Incorrect credentials: " + e.message));
}

function signOut() {
  auth.signOut();
  window.location.replace("homepage.html");
}

function forgotPassword() {
  // var auth = firebase.auth();
  var forgotemail = document.getElementById("forgotemail").value;
  if (forgotPassword != "") {
    auth
      .sendPasswordResetEmail(forgotemail)
      .then(function () {
        alert("Email has been sent to you, Please check email and verify");
        window.location.replace("signin - copy.html");
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
    document.getElementById("currentuser").innerHTML = email;
    document.getElementById("accountprofile").innerHTML = email;
    // window.location.replace("homepage-user.html");
  } else {
    // alert("No active user ");
  }
});
