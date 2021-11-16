//Adding SQL connection to console

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send("Hello Cecily")
})

app.listen(3001, () => {
    console.log("running on port 3306");
})

var db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sra_db'
});
/*C@pst0n3*/
app.post('/register', (req,res)=> {

    const username = req.body.username
    const password = reg.body.password

    db.query("INSERT INTO users (username, pass, email, access) VALUES(?,?,hello@gmail.com,admin)",[username, password], (err,result) =>
    {console.log(err);})

    db.query("INSERT INTO users (username, pass, email, access) VALUES(boo,goo,hello@gmail.com,admin)", (err,result) =>
    {console.log(err);})
})
//Test to see date to make sure there is SQL connection to app

/*var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results[0].time);
}); 
//Need this to close database connection
connection.end();*/
