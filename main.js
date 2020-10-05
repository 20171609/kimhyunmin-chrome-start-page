$(document).ready(function() {
    $("#error").hide();
});

function signUp() {
    let id = $("#email").val();
    let pw = $("#password").val();
    let cf = $("#checkpw").val();

    if(pw !== cf) {
        alert("Password does not match the confirm password.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(id, pw)
        .then(function() {
            alert("Signed Up!");
        })
        .catch(function(e) {
            $("#error #errmsg").html(e.message);
            $("#error").show();
            $("#signUp").hide();
            return;
        });
}