function openNav() {
    document.getElementById("Board_List").style.width = '280px';
    document.getElementById("Menu_Button").style.width = '0';
}

function closeNav() {
    document.getElementById("Board_List").style.width = '0';
    document.getElementById("Menu_Button").style.width = '50px';
}

function openAside() {
    document.getElementById("Login_Form").style.width = '240px';
    document.getElementById("Login_Button").style.width = '0';
}

function closeAside() {
    document.getElementById("Login_Form").style.width = '0px';
    document.getElementById("Login_Button").style.width = '50px';
}