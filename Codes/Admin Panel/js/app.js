
// !IMPORTANT: REPLACE WITH YOUR OWN CONFIG OBJECT BELOW


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

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('Products');




	readUserData(); 
	

// --------------------------
// READ
// --------------------------
function readUserData(e) {

	//const userListUI = document.getElementById("user-list");
	//var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('Products/');
		const userDetailUI = document.getElementById("user-list");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("tr");
				
				$p.innerHTML = "<td>"+childSnap.val().id+"</td>"+"<td>"+childSnap.val().name+"</td>"+"<td>"+childSnap.val().category+"</td>"+"<td>"+childSnap.val().time+"</td>"+"<td>"+childSnap.val().status+"</td>"+$p.append(deleteIconUI);
				
				userDetailUI.append($p);
			})

		});

	// usersRef.on("value", snap => {

	// 	userListUI.innerHTML = ""

	// 	snap.forEach(childSnap => {

	// 		let key = childSnap.key,
	// 			value = childSnap.val()
  			
	// 		let $li = document.createElement("tr");

			// // edit icon
			// let editIconUI = document.createElement("span");
			// editIconUI.class = "edit-user";
			// editIconUI.innerHTML = " ✎";
			// editIconUI.setAttribute("userid", key);
			// editIconUI.addEventListener("click", editButtonClicked)

			// delete icon
			let deleteIconUI = document.createElement("span");
			deleteIconUI.class = "delete-user";
			deleteIconUI.innerHTML = " ☓";
			deleteIconUI.setAttribute("userid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked)
			
			//$li.innerHTML = value.name;
			// $li.append(editIconUI);
			// $li.append(deleteIconUI);

			//$li.setAttribute("user-key", key);
			//$li.addEventListener("click", userClicked)
			//userListUI.append($li);

 	//	});


	//})

}



function userClicked(e) {


		var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('Products/' + userID);
		const userDetailUI = document.getElementById("user-list");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("td");
				$p.innerHTML = childSnap.val();
				userDetailUI.append($p);
			})

		});
	

}





// // --------------------------
// // ADD
// // --------------------------

// const addUserBtnUI = document.getElementById("add-product");
// addUserBtnUI.addEventListener("click", addUserBtnClicked)



// function addUserBtnClicked() {

// 	const usersRef = dbRef.child('Products');

// 	const addUserInputsUI = document.getElementsByClassName("form-control");

//  	// this object will hold the new user information
//     let newUser = {};

//     // loop through View to get the data for the model 
//     for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

//         let key = addUserInputsUI[i].getAttribute('data-key');
// 		let value = addUserInputsUI[i].value;

		
//         newUser[key] = value;
//     }

// 	usersRef.push(newUser)
	

    
//    console.log(myPro)
   


// }


// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {

		e.stopPropagation();

		var userID = e.target.getAttribute("userid");

		const userRef = dbRef.child('users/' + userID);
		
		userRef.remove();

}


// --------------------------
// EDIT
// --------------------------
function editButtonClicked(e) {
	
	document.getElementById('edit-user-module').style.display = "block";

	//set user id to the hidden input field
	document.querySelector(".edit-userid").value = e.target.getAttribute("userid");

	const userRef = dbRef.child('users/' + e.target.getAttribute("userid"));

	// set data to the user field
	const editUserInputsUI = document.querySelectorAll(".edit-user-input");


	userRef.on("value", snap => {

		for(var i = 0, len = editUserInputsUI.length; i < len; i++) {

			var key = editUserInputsUI[i].getAttribute("data-key");
					editUserInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-user-btn");
	saveBtn.addEventListener("click", saveUserBtnClicked)
}


function saveUserBtnClicked(e) {
 
	const userID = document.querySelector(".edit-userid").value;
	const userRef = dbRef.child('users/' + userID);

	var editedUserObject = {}

	const editUserInputsUI = document.querySelectorAll(".edit-user-input");

	editUserInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedUserObject[textField.getAttribute("data-key")] = textField.value
	});



	userRef.update(editedUserObject);

	document.getElementById('edit-user-module').style.display = "none";


}