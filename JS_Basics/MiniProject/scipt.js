const button = document.querySelector('#submit');

function apiCall(username){
    const url = "https://api.github.com/users/" + username;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",url);

    xhr.onreadystatechange = function(){
        
        if(this.readyState ===4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
            const DataDiv = document.createElement("div");
            DataDiv.innerHTML = `
            <h3> Followers : </h3>
            <b>${data.followers}</b>
            <hr>
            <h3> Public Repo : </h3>
            <b>${data.public_repos}</b>`;


            document.querySelector('#DataHere').appendChild(DataDiv);
        }
    }

    xhr.send();

}

function eventHandlerFunc(){
    const inputField = document.querySelector('#username');

    const username = inputField.value;

    console.log(username);
    apiCall(username);
}

button.addEventListener('click',eventHandlerFunc)