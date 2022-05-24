//importing modules
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const request = require('request');


//conecting to database
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"Mohan@2510@",
    database:"projectDB",
});
mysqlConnection.connect((err)=>{
    if (!err){
        console.log("Database Connected..");
    }else{
        console.log(err)
    };
});

//using express---
const app = express();

//vars
var data = "";
var result =""
//middlewares

app.set("view engine", "ejs");
app.use(express.static("public"))

//routes
app.get("", (req, res)=>{
    res.render("home",{result:result});
});

app.post("", bodyParser.urlencoded({extended:false}),(req, res)=>{
    data = req.body.email;
    var urlApi = "http://localhost:3000/api/" + data

    request(urlApi, (err, response, body)=>{
        result = body;
    });
    res.redirect('/');
});

app.get("/api/:email", (req, res)=>{
    var email = req.params.email;

    mysqlConnection.query("select Full_name, Consent from detailstable where Email = ?", [email], (err,result,fields)=>{
        if (!err){
            res.send(JSON.stringify(result[0]));
        }else{
            res.send("Email is not present ");
        }
    });


})
app.listen(3000, ()=>{
    console.log("server is working on the port 3000....");
});