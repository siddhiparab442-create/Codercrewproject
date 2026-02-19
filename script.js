




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fqcyasatkQ0roPzjCk0abCM1XKz3g-c",
  authDomain: "engictivity-8f243.firebaseapp.com",
  projectId: "engictivity-8f243",
  storageBucket: "engictivity-8f243.firebasestorage.app",
  messagingSenderId: "125143503533",
  appId: "1:125143503533:web:6d0e1ced852f0aee5cec24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();




function signIn() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Please enter Email and Password");
    }
    else {
        alert("Sign In Successful!");
    }
}


// Step 4: Google Sign In
function googleSignIn() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);

}

function logout() {
    firebase.auth().signOut().then(() => {

        alert("Logged out successfully");

        window.location.href = "index.html";

    }).catch((error) => {
        console.log(error);
    });
}
firebase.auth().onAuthStateChanged(function(user) {

    if (!user) {
        window.location.href = "index.html";
    }

});
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("username").innerText =
            "Welcome " + user.displayName;
    }
});
firebase.auth().getRedirectResult()
.then((result) => {

    if (result.user) {
        window.location.href = "dashboard.html";
    }

})
.catch((error) => {
    console.log(error);
});
firebase.auth().onAuthStateChanged((user) => {

    if (user) {

        const userText = document.getElementById("username");

        if (userText) {
            userText.innerText = user.email;
        }

    }

});
firebase.auth().onAuthStateChanged((user) => {

    if (user) {

        const usernameElement = document.getElementById("username");

        if (usernameElement !== null) {
            usernameElement.innerText = user.displayName;
        }

    }

});
document.addEventListener("DOMContentLoaded", function() {

firebase.auth().onAuthStateChanged((user) => {

    if (user) {

        const userText = document.getElementById("username");

        if (userText) {
            userText.innerText = user.email;
        }

    }

});

});




