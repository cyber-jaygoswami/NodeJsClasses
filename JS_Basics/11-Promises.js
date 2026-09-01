
// Promise Creation
// const promise1 = new Promise((resolve,rejected)=>{
//     let error = true;

//     if(!error){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         rejected("Promise Rejected");
//     }
// });

// // Promise Consume
// promise1
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });


// function getData(endpoint) {
//     return new Promise((resolve, rejected) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', endpoint);

//         xhr.onreadystatechange = function () {
//             // console.log(this.readyState);

//             if (this.readyState == 4) {
//                 // console.log(this.responseText);
//                 if(this.status == 200){
//                     resolve(this.responseText);
//                 }
//                 else{
//                     rejected("Error")
//                 }
                

//             }
           
//         }



//         setTimeout(() => {
//             xhr.send();
//         }, Math.floor((Math.random() * 2000) + 1000));

//     })

// };


// getData("./movies.json")
// .then((data)=>{
//     console.log(data);
//     return getData("./actors.json");
// })
// .then((data)=>{
//     console.log(data);
//     return getData("./directors.json");
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("done");
// });



fetch(
    "https://api.github.com/users/cyber-jaygoswami"
)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})