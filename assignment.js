
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');  /*Set the view engine using ejs*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.post("/", function (request, res) {

    const password = request.body.password;
    if (password === "") {
       res.render("Message page", {content : "Please Input the password !"});
    }
    else if (password.length <= 8) {
        res.render("Message page", {content : "Your password is too short!! Please try with long password !"});
    }
    else {
        res.render("Message page", {content : "Your account has been successfully created! "});
    }

});




app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("server is listenig on port 3000");
});