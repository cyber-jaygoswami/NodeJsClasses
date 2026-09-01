
function getData(endpoint,cb){
    const xhr = new XMLHttpRequest();

    xhr.open('GET',endpoint);

    xhr.onreadystatechange = function(){
        // console.log(this.readyState);

        if(this.readyState == 4){
            // console.log(this.responseText);
            cb(this.responseText);
            
        }
    }

    

    setTimeout(()=>{
         xhr.send();
    },Math.floor((Math.random() * 2000) + 1000));


   
};

// Callback Hell
getData('./movies.json',(data)=>{
    console.log(data);
    getData('./actors.json',(data)=>{
        console.log(data);
        getData('./directors.json',(data)=>{
            console.log(data);
        })
    })
});



console.log("program completed :)");

