function writePost(title, username, content){
    let date = new Date();
    let now = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();

    const postData = {
        now,
        title,
        content,
        username,
    };

    firebase.database().ref().child('posts').push(postData);
}

function resister(){
    let title = document.getElementById('title').value;
    let name = document.getElementById('name').value;
    let content = document.getElementById('contents').value;

    writePost(title, name, content)

    document.getElementById('title').value = "";
    document.getElementById('name').value = "";
    document.getElementById('contents').value = "";

    hideModal();
}