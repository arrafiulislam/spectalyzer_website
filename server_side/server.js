const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sectalyzer",
});

app.post("/sectalyzer", (req, res) => {
  const sql =
    "INSERT INTO student_table (`first_name`, `last_name`, `mothers_first_name`, `mothers_last_name`, `fathers_first_name`, `fathers_last_name`, `username`, `password`, `confirm_password`,`gender`,`dob`,`age`,`therapist_name`,`address`,`street_address`,`address_line_2`,`state`,`country`,`zip`,`email`,`number`,`image`,`prescription`) VALUES (?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.mothers_first_name,
    req.body.mothers_first_name,
    req.body.fathers_first_name,
    req.body.fathers_last_name,
    req.body.username,
    req.body.password,
    req.body.confirm_password,
    req.body.gender,
    req.body.dob,
    req.body.age,
    req.body.therapist_name,
    req.body.address,
    req.body.street_address,
    req.body.address_line_2,
    req.body.state,
    req.body.country,
    req.body.zip,
    req.body.email,
    req.body.number,
    req.body.image,
    req.body.prescription,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server Running");
});
