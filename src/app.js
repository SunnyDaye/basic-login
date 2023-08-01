const path = require("path");
const express = require("express");
const { Client } = require("pg");
const { CONNECTION_URL } = process.env;
const queries = require("./queries/queries");
const app = express();

const database = new Client({
  connectionString: CONNECTION_URL,
});

database.connect();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register", { error: null });
});

app.post("/register",  (req, res, next) => {
  const values = [...Object.values(req.body)];
  
    database.query(queries.insertUser(values), (err, data) => {
    if (err) {
      if (err.code === "23505") {
        next({ status: 400, message: "Email already taken. Please try another" });

      }else{
        next({});
      }
    }else {
      res.status(200).json({registrationSuccess: true});
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res, next) => {
  const {email,password} = req.body;

  database.query(queries.getUser(email), (err,data) => {
    console.log(err,data);
    if(err || (data && data.rows.length === 0) || (data && password !== data.rows[0].password)){
      next({status: 400, message: "Incorrect username or password"});
    }else{
      res.status(200).json({loginSuccess: true});
    }
  });
    
  
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//TODO: Implement not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//TODO: Implement error handler
app.use((error, req, res, next) => {
  // ! Handles all errors
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
