var mysql = require('mysql');

var DatabaseConnectionConfig = {host: "localhost", user: "root", password: "", database:"school"}
var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
    if (error){
        console.log('connection fail');
    }
    else{
        console.log('connected success');
       // InsertData(con);
       // DeleteData(con);
       // UpdateData(con);
        SelectData(con);
    }
});

function InsertData(con) {
    let sql= "INSERT INTO studentList( name,class,roll,address,phone) VALUES ('Prianka Dhua','1st yr',02,'Bankura',7908456238);"
    con.query(sql,function (error){
        if(error){
            console.log('data insert fail');
        }
        else{
            console.log('data insert successfuly');
        }
    });
}

function DeleteData(con) {
    let sql="DELETE FROM studentList WHERE id = 1";
    con.query(sql,function (error){
        if (error){
            console.log('data delete fail');
        }
        else {
            console.log('data delete successfully');
        }
    });
}
function UpdateData(con) {
    let sql = "UPDATE studentList SET address = 'Bankura' WHERE id = 3";
    con.query(sql,function (error){
        if (error){
            console.log('data update fail');
        }
        else{
            console.log('data update successfully');
        }
    });
}

function SelectData(con) {
    let sql = "SELECT * FROM studentList";
    con.query(sql,function (error,result){
        if (error){
            console.log('data select fail');
        }
        else{
            console.log(result);
        }
    });
}