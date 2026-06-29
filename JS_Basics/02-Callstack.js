function first(){
    console.log("I am frist function");
    second();
}
function second(){
    console.log("I am second function");
}
function third(){
    console.log("I am third function");
    first();
}

third();

