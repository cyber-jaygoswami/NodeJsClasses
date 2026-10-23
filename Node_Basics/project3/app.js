const mysql = require("mysql2");

const con = mysql.createConnection({
    host:"127.0.0.1",
    port: 3307,
    user: "root",
    password: "clear2cut",
    database: "college"
});

con.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    else{
        console.log("Database Connected :)");

        // Insert
        const name = "raj";
        const age = 22;
        const course = "mscit";

        // Create Statement
        // const insertQuery1 = `INSERT INTO students(name,age,course) VALUES('${name}',${age},'${course}');`;
        
        //  con.query(insertQuery1,(err,result)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(result);
        //     }

        // })

        // Prepared Statement
        const insertQuery2 = `INSERT INTO students(name,age,course) VALUES(?,?,?);`;
        con.query(insertQuery2,[name,age,course],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(`${result.affectedRows} rows inserted`);
            }

        })

       

    }
});
