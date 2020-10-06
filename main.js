$(document).ready(function() {
    $("#error").hide();
});

function remainSignIn(){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return signIn();
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

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
            alert("가입 완료!!");
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
    let pw = document.getElementById('PW').value;
    firebase.auth().signInWithEmailAndPassword(id, pw)
        .then(function() {
            alert("로그인 되었습니당")
            document.getElementById('SignInForm').style.height = '0px';
            document.getElementById('forgot').style.height = '0px';
            document.getElementById('SignedForm').style.height = '70px';
            document.getElementById('SignOut').style.height = '150px';
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
    if(!confirm("진짜 로그아웃 하실거에요?")) {
        return;
    }

    firebase.auth().signOut().then(function() {
        location.reload();
        document.getElementById('SignInForm').style.height = '70px';
        document.getElementById('forgot').style.height = '150px';
        document.getElementById('SignedForm').style.height = '0';
        document.getElementById('SignOut').style.height = '0';

    }, function(e) {
        lastWork = "authorized";
        $("#error #errmsg").html(e.message)
        $("#error").show();
        $("#authorized").hide();
    });
}

//check login
function isLogin(){
    let user = firebase.auth().currentUser;
    alert(user);
    if(user){
        document.getElementById('SignInForm').style.height = '0px';
        document.getElementById('forgot').style.height = '0px';
        document.getElementById('SignedForm').style.height = '70px';
        document.getElementById('SignOut').style.height = '150px';
    }
}

// function back() {
//     $("#" + lastWork).show();
//     $("#error").hide();
// }