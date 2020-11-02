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
    location.href = "Add_Board.html";
}

function resister(){
    let title = document.getElementById('title').value;
    let name = document.getElementById('name').value;
    let content = document.getElementById('contents').value;

    writePost(title, name, content);

    alert("작성 완료 되었다능!!!");

    document.getElementById('title').value = "";
    document.getElementById('name').value = "";
    document.getElementById('contents').value = "";

    hideModal();
}

function showTitle(){
    const postRef = firebase.database().ref('/posts/').once('value', function(snapshot){
        const postData = Object.entries(snapshot.val());
        let tableContent = document.querySelector('#content');
        let num = postData.length-1;

        for(let i = postData.length-1; i >= 0; i--){
            const[key, body] = postData[i];


            tableContent.innerHTML += "<tr><td>"+body.now+ "</td><td class='title' onclick='showContent(" + num +")'>" + body.title + "</td><td>" + body.username+"</td></tr>";
            num--;
        }
    });
}

function showContent(num){
    let modal2 = document.querySelector('.modal2');
    let title = document.querySelector('#need_title');
    let name = document.querySelector('#need_name');
    let content = document.querySelector('#need_content');
    modal2.style.display='block';

    const postRef = firebase.database().ref('/posts/').once('value', function(snapshot){
        const postData = Object.entries(snapshot.val());

        for(let i = 0; i < postData.length; i++){
            if(i === num){
                const[key, body] = postData[i];
                title.innerText += body.title;
                name.innerText += body.username;
                content.innerText += body.content;
            }

        }
    });
}