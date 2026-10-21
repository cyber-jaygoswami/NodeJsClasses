// const database = require('./database');
const {dbConnect,db_password} = require('./database');

const register = ()=>{
    dbConnect();
    console.log(db_password);
    console.log("User Registered");
}
const login = ()=>{
    console.log("User Login");
}

register();