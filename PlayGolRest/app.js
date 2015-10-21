var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose");

// Connection to DB
var url = "mongodb://localhost/PlayGol";
mongoose.connect(url, function (err, res) {
    if (err) throw err;
    console.log("Connected to Database");
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var userModel = require("./models/userModel")(app, mongoose);
var userCtrl = require("./controllers/userCtrl");
var dataResidenceModel = require("./models/dataResidenceModel")(app, mongoose);
var dataResidenceCtrl = require("./controllers/dataResidenceCtrl");

// Example Route
var router = express.Router();
router.get("/", function (req, res) {
    res.send("Hello world!");
});
app.use(router);

// API routes
var users = express.Router();

users.route("/users")
    .get(userCtrl.findAllUsers)
    .post(userCtrl.addUser);

users.route("/users/:id")
    .get(userCtrl.findUserById)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);

app.use("/api", users);

var dataResidence = express.Router();

dataResidence.route("/data_residence/:pais")
    .get(dataResidenceCtrl.findAllStates);

dataResidence.route("/data_residence/:pais/:departamento")
    .get(dataResidenceCtrl.findAllCitiesForStates);

app.use("/api", dataResidence);

// Start server
app.listen(3000, function () { 
    console.log("Node server running on http://localhost:3000");
});