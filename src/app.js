const path = require('path');
const express = require("express");
const { Client } = require('pg');
const {CONNECTION_URL} = process.env;
const queries = require('./queries/queries');
const app = express();


const database = new Client({
    connectionString:CONNECTION_URL,
});

database.connect();



database.query(queries.selectAllUsers(), (err, res) => {
    console.log(err, res);
})
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname)));
app.use(express.json());


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/register', (req,res) => {
    res.render('register',{error:null});
});

app.post('/register', (req, res) => {
    const values = [...Object.values(req.body)];
    database.query(queries.insertUser(values), (err,data) => {
        
        if(err){
            let error = "Something failed on our end! Please try again.";
            if(err.code === '23505'){
                error = "That email is already taken. Please try another.";
            }
            console.log(error);
            return res.render("register", {error: error});
        }else{
            return res.redirect("/dashboard"); 
        }
    });
    
});

app.get('/login', (req,res) => {
    res.render('login');
});

app.get('/dashboard', (req,res) => {
    res.render('dashboard');
});

//TODO: Implement not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//TODO: Implement error handler
app.use((error, req, res, next) => {  // ! Handles all errors
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });



module.exports = app;