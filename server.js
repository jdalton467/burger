var express = require("express");
var mysql = require("mysql");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");



var port = 3000;

var app = express();

//serve static content for the app from the "public directory"
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

//Override with POST having the ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);