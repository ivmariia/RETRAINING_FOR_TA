function onReadyStateChange(){
    if(this.readyState === 4 && this.status === 200){
        voteButton.innerHTML = this.response;
    }
}

function onVoteBtnClick(){
    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open("GET", "http://127.0.0.1:5000/vote", true);
    ajaxRequest.onreadystatechange = onReadyStateChange;
    ajaxRequest.send();
}

const voteButton = document.getElementById("vote-button");
voteButton.onclick = onVoteBtnClick;