$(document).ready(function() {
    $("#error").hide();
});

function signUp() {
    let id = document.getElementById('email').value;
    let pw = document.getElementById('password').value;
    let cf = document.getElementById('checkpw').value;

    if(pw !== cf) {
        alert("Password does not match the confirm password.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(id, pw)
        .then(function() {
            alert("Signed Up!");
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            document.getElementById('checkpw').value = "";
            document.getElementById('name').value = "";
        })
        .catch(function(e) {
            $("#error #errmsg").html(e.message);
            $("#error").show();
            $("#signUp").hide();
            return;
        });
}

function signIn() {
    let id = document.getElementById('ID').value;
    let pw = document.getElementById('PW').value
    firebase.auth().signInWithEmailAndPassword(id, pw)
        .then(function() {
            alert("login complete");
            // $("#Login_Form").hide();
            // $("#authorized").show();
            location.href = "Behind_You.html";
        })
        .catch(function(e) {
            lastWork = "signIn";
            $("#error #errmsg").html(e.message);
            $("#error").show();
            $("#signIn").hide();
            return;
        });
}

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

// function back() {
//     $("#" + lastWork).show();
//     $("#error").hide();
// }