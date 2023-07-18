const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json("Hello World!");
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