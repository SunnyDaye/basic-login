const path = require('path');
const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname)));
app.use(express.json());


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/register', (req,res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    res.json(req.body);
})

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