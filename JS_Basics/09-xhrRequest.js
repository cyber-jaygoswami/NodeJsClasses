const xhr = new XMLHttpRequest();

xhr.open("GET","./movies.json"); // Async
// console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    // console.log(this.readyState);

    if(this.readyState === 4){
        console.log("Data Received");
        // console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data[1].year);
    }
}

xhr.send();
// console.log(xhr.readyState);


const xhr2 = new XMLHttpRequest();


xhr.open("GET","https://api.github.com/users/codewithdivu");

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(`${data.name} has ${data.followers}`);
        
    }
}

xhr.setRequestHeader('Authorization','Bearer <tokenValue>');
xhr.send();


console.log("Ending of the program");