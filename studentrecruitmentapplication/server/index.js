const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send("Hello Cecily")
})

app.listen(3001, () => {
    console.log("running on port 3001");
})

//Adding SQL connection to console
/*var msg = 'Hello World';
console.log(msg);

var mysql = require('mysql');

var connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C@pst0n3',
    database: 'sra_db'
});
//Test to see date to make sure there is SQL connection to app

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results[0].time);
}); 
//Need this to close database connection
connection.end();*/
