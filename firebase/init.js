// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCbuzLO8sLBkf6n3ahPag9Xk3k_eguACwg",
    authDomain: "chrome-behind-you.firebaseapp.com",
    databaseURL: "https://chrome-behind-you.firebaseio.com",
    projectId: "chrome-behind-you",
    storageBucket: "chrome-behind-you.appspot.com",
    messagingSenderId: "1096550068401",
    appId: "1:1096550068401:web:c086354288c5269be5f290"
};
// Initialize Firebase
firebase.initializeApp(config);
// Your web app's Firebase configuration

// Sign out
function signOut() {
    if(!confirm("Do you really want to log out?")) {
        return;
    }

    firebase.auth().signOut().then(function() {
        location.reload();
    }, function(e) {
        lastWork = "authorized";
        $("#error #errmsg").html(e.message)
        $("#error").show();
        $("#authorized").hide();
    });
}