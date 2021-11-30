//Adding SQL connection to console

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "sra_db",
  });

/*C@pst0n3*/
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const access = req.body.access;

    db.query(
        "INSERT INTO users (username, pass, email, access) VALUES (?,?,?,?)",
        [username, password,email,access],
        (err, result) => {
          console.log(err);
        }
      );
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?;",
      [username, password],
      (err, result) => {
            if (err) {
            res.send({ err: err });
            }
            if (result) {
                res.send(result)
            } else {
                res.send({message: "Incorrect username or password."})
            }
        }
    );
});
  
app.listen(3001, () => {
    console.log("running server");
  });
