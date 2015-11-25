var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose");

// Connection to DB
//var url = "mongodb://190.156.243.193/playgol";
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
//data_recidense
var dataResidenceModel = require("./models/dataResidenceModel")(app, mongoose);
var dataResidenceCtrl = require("./controllers/dataResidenceCtrl");
//data_team
var dataTeamModel = require("./models/dataTeamModel")(app, mongoose);
var dataTeamCtrl = require("./controllers/dataTeamCtrl");

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

users.route("/users/name_lastname/:option")
    .get(userCtrl.findUserByNameLastName);

users.route("/users/country_depart_city/:option")
    .get(userCtrl.findUserByCountryDepartCity);

app.use("/api", users);


//data_recidenses
var dataResidence = express.Router();

dataResidence.route("/data_residence/:pais")
    .get(dataResidenceCtrl.findAllStates);

dataResidence.route("/data_residence/:pais/:departamento")
    .get(dataResidenceCtrl.findAllCitiesForStates);

app.use("/api", dataResidence);

//data_team
var dataTeam = express.Router();

dataTeam.route("/data_team")
    .get(dataTeamCtrl.findAllTeam)
    .post(dataTeamCtrl.addTeam);

dataTeam.route("/data_team/:id")
    .put(dataTeamCtrl.updateTeam)
    .delete(dataTeamCtrl.deleteTeam)
    .get(dataTeamCtrl.findAllTeamById);

dataTeam.route("/data_team/nombre_team/:nombre_team")
    .get(dataTeamCtrl.findAllTeamByName);
dataTeam.route("/data_team/country_depart_city_team/:option")
    .get(dataTeamCtrl.findAllTeamByCountryDepartCity);

app.use("/api", dataTeam);

// Start server
app.listen(3000, function () { 
    console.log("Node server running on http://localhost:3000");
});