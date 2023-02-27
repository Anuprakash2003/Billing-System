const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { addBills } = require('./controller/Bills');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/billing", () => {
    console.log("Database Connected!")
})

app.get("/", (req,res) => {
    res.render("compose.ejs");
})

app.post("/compose", addBills)

app.listen(8000, (req,res) => {
    console.log("App started at the port 6000");
})